/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Request,
} from '@nestjs/common';
import { Role } from 'generated/prisma';
import { Roles } from '../shared/decorators/roles.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createProductDto: CreateProductDto, @Request() req) {
    return this.productsService.create(createProductDto);
  }

  // ✅ Public: Get all products (with optional category and search filter)
  @Get()
  findAll(
    @Query('category') category?: string,
    @Query('search') search?: string,
  ) {
    return this.productsService.findAll(category, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
