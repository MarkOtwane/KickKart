/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Role } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { ChangePasswordDto } from './dto/changePasswordDto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async getProfile(customerID: number) {
    const customer = await this.prisma.customers.findUnique({
      where: { customerID },
      select: {
        customerID: true,
        fullName: true,
        email: true,
        role: true,
      },
    });

    if (!customer) throw new NotFoundException('Customer not found');

    return customer;
  }

  async updateProfile(customerID: number, dto: UpdateCustomerDto) {
    return this.prisma.customers.update({
      where: { customerID },
      data: {
        fullName: dto.name,
      },
      select: {
        customerID: true,
        fullName: true,
        email: true,
        role: true,
      },
    });
  }

  async changePassword(customerID: number, dto: ChangePasswordDto) {
    const customer = await this.prisma.customers.findUnique({
      where: { customerID },
    });

    if (!customer) throw new NotFoundException('Customer not found');

    const valid = await bcrypt.compare(dto.currentPassword, customer.password);
    if (!valid) throw new ForbiddenException('Incorrect current password');

    const hashed = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.customers.update({
      where: { customerID },
      data: { password: hashed },
    });

    return { message: 'Password updated successfully.' };
  }

  async getAllUsers(requesterRole: Role) {
    if (requesterRole !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    return this.prisma.customers.findMany({
      select: {
        customerID: true,
        fullName: true,
        email: true,
        role: true,
      },
    });
  }

  async getUserById(customerID: number, requesterRole: Role) {
    if (requesterRole !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const customer = await this.prisma.customers.findUnique({
      where: { customerID },
      select: {
        customerID: true,
        fullName: true,
        email: true,
        role: true,
      },
    });

    if (!customer) throw new NotFoundException('Customer not found');

    return customer;
  }

  async updateUser(
    customerID: number,
    dto: UpdateCustomerDto,
    requesterRole: Role,
  ) {
    if (requesterRole !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const customer = await this.prisma.customers.findUnique({
      where: { customerID },
    });

    if (!customer) throw new NotFoundException('Customer not found');

    return this.prisma.customers.update({
      where: { customerID },
      data: {
        fullName: dto.name,
      },
      select: {
        customerID: true,
        fullName: true,
        email: true,
        role: true,
      },
    });
  }
  async softDeleteUser(customerID: number) {
    return this.prisma.customers.update({
      where: { customerID },
      data: { deletedAt: new Date() },
    });
  }

  async deleteUser(customerID: number, requesterRole: Role) {
    if (requesterRole !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const customer = await this.prisma.customers.findUnique({
      where: { customerID },
    });

    if (!customer) throw new NotFoundException('Customer not found');

    if (customer.role === Role.ADMIN) {
      throw new ForbiddenException('Cannot delete admin users');
    }

    // Optional: implement soft delete logic by adding `deletedAt` field to schema if needed
    await this.prisma.customers.delete({
      where: { customerID },
    });

    return { message: 'Customer deleted successfully' };
  }
}
