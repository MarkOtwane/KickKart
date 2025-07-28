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
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { ChangePasswordDto } from './dto/change-user.to';
import { UpdateUserDto } from './dto/upate-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async updateProfile(userId: string, dto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id: userId },
      data: {
        name: dto.name,
        phone: dto.phone,
      },
    });
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const valid = await bcrypt.compare(dto.currentPassword, user.password);
    if (!valid) throw new ForbiddenException('Incorrect current password');

    const hashed = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: { password: hashed },
    });

    return { message: 'Password updated successfully.' };
  }

  async softDeleteUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    if (user.role === Role.ADMIN)
      throw new ForbiddenException('Admin users cannot be deleted.');
    await this.prisma.user.update({
      where: { id: userId },
      data: { deletedAt: new Date() },
    });
    return { message: 'User account deactivated.' };
  }

  async getAllUsers(role: Role) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    return this.prisma.user.findMany({
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

  async getUserById(id: string, role: Role) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const user = await this.prisma.user.findUnique({
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

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateUser(id: string, dto: UpdateUserDto, role: Role) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const user = await this.prisma.user.findUnique({
      where: { id, deletedAt: null },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const updated = await this.prisma.user.update({
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

  async deleteUser(id: string, role: Role) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Access denied');
    }

    const user = await this.prisma.user.findUnique({
      where: { id, deletedAt: null },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Prevent admin from deleting themselves
    if (user.role === Role.ADMIN) {
      throw new ForbiddenException('Cannot delete admin users');
    }

    // Soft delete by setting deletedAt timestamp
    const deleted = await this.prisma.user.update({
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

    return { message: 'User deleted successfully', user: deleted };
  }
}
