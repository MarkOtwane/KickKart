/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Role } from 'generated/prisma';
import {
  MailerService,
  ResetPasswordEmailContext,
} from '../mailer/mailer.service';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailer: MailerService,
  ) {}

  async register(dto: RegisterDto) {
    const customerExists = await this.prisma.customers.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (customerExists) {
      throw new BadRequestException('Email already registered.');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const customer = await this.prisma.customers.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email.toLowerCase(),
        password: hashedPassword,
        address: dto.address,
        contact: dto.contact || '+254700000000',
        // save password in a secure password table if needed; otherwise extend the model
      },
    });

    await this.mailer.sendWelcomeEmail(customer.email, {
      name: `${customer.firstName} ${customer.lastName}`,
    });

    return {
      message: 'Customer registered successfully.',
      access_token: this.generateJwt(
        customer.customerID,
        Role.CUSTOMER,
        customer.email,
      ),
    };
  }

  async login(dto: LoginDto) {
    const customer = await this.prisma.customers.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!customer) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    // Replace with hashed password check once the password is stored properly
    const valid = await bcrypt.compare(
      dto.password,
      'yourStoredHashedPassword',
    ); // placeholder
    if (!valid) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    return {
      message: 'Login successful.',
      access_token: this.generateJwt(
        customer.customerID,
        Role.CUSTOMER,
        customer.email,
      ),
    };
  }

  async resetPasswordRequest(dto: ResetPasswordDto) {
    const customer = await this.prisma.customers.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!customer) {
      throw new NotFoundException('No account associated with that email.');
    }

    const token = this.generateJwt(
      customer.customerID,
      Role.CUSTOMER,
      customer.email,
      '15m',
    );
    const resetPasswordEmailContext: ResetPasswordEmailContext = { token };

    await this.mailer.sendResetPasswordEmail(
      customer.email,
      resetPasswordEmailContext,
    );

    return { message: 'Password reset link sent to email.' };
  }

  async updatePassword(dto: UpdatePasswordDto) {
    let payload: { sub: string };
    try {
      payload = this.jwtService.verify(dto.token);
    } catch {
      throw new ForbiddenException('Invalid or expired token.');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);
    await this.prisma.customers.update({
      where: { customerID: Number(payload.sub) },
      data: {
        password: hashedPassword,
      },
    });

    return { message: 'Password updated successfully.' };
  }

  private generateJwt(
    customerID: number,
    role: Role,
    email: string,
    expiresIn = '7d',
  ) {
    return this.jwtService.sign(
      { sub: customerID, role, email },
      { secret: process.env.JWT_SECRET, expiresIn },
    );
  }
}
