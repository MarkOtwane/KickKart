/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // ✅ Add this import
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {} // ✅ Fixed constructor

  async create(createProductDto: CreateProductDto) {
    return this.prisma.products.create({
      // ✅ model is singular: product
      data: {
        name: createProductDto.name,
        description: createProductDto.description,
        price: createProductDto.price,
      },
    });
  }

  async findAll() {
    return this.prisma.products.findMany(); // ✅ corrected `this.prisma`
  }

  async findOne(id: number) {
    return this.prisma.products.findUnique({ where: { productID: id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.products.update({
      where: { productID: id },
      data: {
        name: updateProductDto.name,
        price: updateProductDto.price,
      },
    });
  }

  async remove(id: number) {
    await this.prisma.products.delete({ where: { productID: id } });
    return { message: 'Product deleted successfully' };
  }
}
