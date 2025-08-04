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
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailer: MailerService,
  ) {}

  async register(dto: RegisterDto) {
    const userExists = await this.prisma.customers.findFirst({
      where: {
        OR: [{ email: dto.email.toLowerCase() }],
      },
    });

    if (userExists) {
      throw new BadRequestException('Email already registered.');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.customers.create({
      data: {
        fullName: dto.fullName,
        email: dto.email.toLowerCase(),
        password: hashedPassword,
        role: Role.CUSTOMER,
      },
    });

    await this.mailer.sendWelcomeEmail(user.email, { name: user.fullName });

    return {
      message: 'User registered successfully.',
      access_token: this.generateJwt(
        String(user.customerID),
        user.role,
        user.email,
      ),
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.customers.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    return {
      message: 'Login successful.',
      access_token: this.generateJwt(
        String(user.customerID),
        user.role,
        user.email,
      ),
    };
  }

  async resetPasswordRequest(dto: ResetPasswordDto) {
    const user = await this.prisma.customers.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!user) {
      throw new NotFoundException('No account associated with that email.');
    }

    const token = this.generateJwt(
      String(user.customerID),
      user.role,
      user.email,
      '15m',
    );
    const resetPasswordEmailContext: ResetPasswordEmailContext = { token };
    await this.mailer.sendResetPasswordEmail(
      user.email,
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
      data: { password: hashedPassword },
    });

    return { message: 'Password updated successfully.' };
  }

  private generateJwt(
    userId: string,
    role: Role,
    email: string,
    expiresIn = '7d',
  ) {
    return this.jwtService.sign(
      { sub: userId, role, email },
      { secret: process.env.JWT_SECRET, expiresIn },
    );
  }
}
