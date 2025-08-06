/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { Category, CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const {
      name,
      description,
      price,
      category,
      brand,
      size,
      color,
      stock,
      images,
    } = createProductDto;

    return this.prisma.products.create({
      data: {
        name,
        description,
        price: new Prisma.Decimal(price),
        category,
        brand,
        size,
        color,
        stock,
        images,
      },
    });
  }

  async findAll(category?: string, search?: string) {
    return this.prisma.products.findMany({
      where: {
        AND: [
          category ? { category: category as Category } : {},
          search
            ? {
                OR: [
                  { name: { contains: search, mode: 'insensitive' } },
                  { description: { contains: search, mode: 'insensitive' } },
                ],
              }
            : {},
        ],
      },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.products.findUnique({
      where: { productID: id },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id); // Throws if not found

    const data: Prisma.productsUpdateInput = {
      ...updateProductDto,
      price: updateProductDto.price
        ? new Prisma.Decimal(updateProductDto.price)
        : undefined,
    };

    return this.prisma.products.update({
      where: { productID: id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Throws if not found
    await this.prisma.products.delete({
      where: { productID: id },
    });
    return { message: 'Product deleted successfully' };
  }
}
