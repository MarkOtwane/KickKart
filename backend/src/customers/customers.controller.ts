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
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from '../shared/decorators/roles.decorator';
import { CustomersService } from './customers.service';
import { ChangePasswordDto } from './dto/changePasswordDto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('user')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get('me')
  getProfile(@Request() req: { user: { sub: string } }) {
    return this.customersService.getProfile(Number(req.user.sub));
  }

  @Patch('update')
  updateProfile(
    @Request() req: { user: { sub: string } },
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customersService.updateProfile(Number(req.user.sub), dto);
  }

  @Patch('change-password')
  changePassword(
    @Request() req: { user: { sub: string } },
    @Body() dto: ChangePasswordDto,
  ) {
    return this.customersService.changePassword(Number(req.user.sub), dto);
  }

  @Delete('deactivate')
  deactivate(@Request() req: { user: { sub: string } }) {
    return this.customersService.softDeleteUser(Number(req.user.sub));
  }

  @Roles(Role.ADMIN)
  @Get()
  getAll(@Request() req: { user: { sub: string; role: Role } }) {
    return this.customersService.getAllUsers(req.user.role);
  }

  @Roles(Role.ADMIN)
  @Get(':id')
  getUserById(
    @Request() req: { user: { sub: string; role: Role } },
    @Param('id') id: string,
  ) {
    return this.customersService.getUserById(Number(id), req.user.role);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  updateUser(
    @Request() req: { user: { sub: string; role: Role } },
    @Param('id') id: string,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customersService.updateUser(Number(id), dto, req.user.role);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  deleteUser(
    @Request() req: { user: { sub: string; role: Role } },
    @Param('id') id: string,
  ) {
    return this.customersService.deleteUser(Number(id), req.user.role);
  }
}
