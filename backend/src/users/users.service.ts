/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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
import { ChangePasswordDto } from './dto/change-user.to';
import { UpdateUserDto } from './dto/upate-user.dto';

@Injectable()
export class customerssService {
  constructor(private prisma: PrismaService) {}

  async getProfile(customersId: string) {
    const customers = await this.prisma.customers.findUnique({
      where: { id: customersId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    if (!customers) throw new NotFoundException('customers not found');

    return customers;
  }

  async updateProfile(customersId: string, dto: UpdateUserDto) {
    return await this.prisma.customers.update({
      where: { id: customersId },
      data: {
        name: dto.name,
        phone: dto.phone,
      },
    });
  }

  async changePassword(customerID: string, dto: ChangePasswordDto) {
    const customers = await this.prisma.customers.findUnique({
      where: { id: customerID },
    });
    if (!customers) throw new NotFoundException('customers not found');

    const valid = await bcrypt.compare(dto.currentPassword, customers.password);
    if (!valid) throw new ForbiddenException('Incorrect current password');

    const hashed = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.customers.update({
      where: { id: customersID },
      data: { password: hashed },
    });

    return { message: 'Password updated successfully.' };
  }

  async softDeletecustomers(customersId: string) {
    const customers = await this.prisma.customers.findUnique({
      where: { id: customersID },
    });
    if (!customers) throw new NotFoundException('customers not found');
    if (customers.role === Role.ADMIN)
      throw new ForbiddenException('Admin customerss cannot be deleted.');
    await this.prisma.customers.update({
      where: { id: customersId },
      data: { deletedAt: new Date() },
    });
    return { message: 'customers account deactivated.' };
  }

  async getAllcustomerss(role: Role) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    return this.prisma.customers.findMany({
      where: { deletedAt: null },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async getcustomersById(id: string, role: Role) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const customers = await this.prisma.customers.findUnique({
      where: { id, deletedAt: null },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!customers) {
      throw new NotFoundException('customers not found');
    }

    return customers;
  }

  async updatecustomers(id: string, dto: UpdatecustomersDto, role: Role) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const customers = await this.prisma.customers.findUnique({
      where: { id, deletedAt: null },
    });

    if (!customers) {
      throw new NotFoundException('customers not found');
    }

    const updated = await this.prisma.customers.update({
      where: { id },
      data: {
        name: dto.name,
        phone: dto.phone,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updated;
  }

  async deletecustomers(id: string, role: Role) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const customers = await this.prisma.customers.findUnique({
      where: { id, deletedAt: null },
    });

    if (!customers) {
      throw new NotFoundException('customers not found');
    }

    // Prevent admin from deleting themselves
    if (customers.role === Role.ADMIN) {
      throw new ForbiddenException('Cannot delete admin customerss');
    }

    // Soft delete by setting deletedAt timestamp
    const deleted = await this.prisma.customers.update({
      where: { id },
      data: { deletedAt: new Date() },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        deletedAt: true,
      },
    });

    return { message: 'customers deleted successfully', customers: deleted };
  }
}
