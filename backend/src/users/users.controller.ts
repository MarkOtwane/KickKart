import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Role } from 'generated/prisma';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles-guard';
import { Roles } from '../shared/decorators/roles.decorator';
import { ChangePasswordDto } from './dto/change-user.to';
import { UpdateUserDto } from './dto/upate-user.dto';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getProfile(@Request() req: { user: { sub: string } }) {
    return this.usersService.getProfile(req.user.sub);
  }

  @Patch('update')
  updateProfile(
    @Request() req: { user: { sub: string } },
    @Body() dto: UpdateUserDto,
  ) {
    return this.usersService.updateProfile(req.user.sub, dto);
  }

  @Patch('change-password')
  changePassword(
    @Request() req: { user: { sub: string } },
    @Body() dto: ChangePasswordDto,
  ) {
    return this.usersService.changePassword(req.user.sub, dto);
  }

  @Delete('deactivate')
  deactivate(@Request() req: { user: { sub: string } }) {
    return this.usersService.softDeleteUser(req.user.sub);
  }

  @Roles(Role.ADMIN)
  @Get()
  getAll(@Request() req: { user: { sub: string; role: Role } }) {
    return this.usersService.getAllUsers(req.user.role);
  }

  @Roles(Role.ADMIN)
  @Get(':id')
  getUserById(
    @Request() req: { user: { sub: string; role: Role } },
    @Param('id') id: string,
  ) {
    return this.usersService.getUserById(id, req.user.role);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  updateUser(
    @Request() req: { user: { sub: string; role: Role } },
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, dto, req.user.role);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  deleteUser(
    @Request() req: { user: { sub: string; role: Role } },
    @Param('id') id: string,
  ) {
    return this.usersService.deleteUser(id, req.user.role);
  }
}
