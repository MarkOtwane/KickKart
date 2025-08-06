import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export enum Category {
  CLOTHING = 'CLOTHING',
  SHOES = 'SHOES',
  BAGS = 'BAGS',
  JEWELRY = 'JEWELRY',
  ACCESSORIES = 'ACCESSORIES',
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsEnum(Category)
  category: Category;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  size?: string;

  @IsString()
  @IsOptional()
  color?: string;

  @IsInt()
  @IsOptional()
  stock?: number;

  @IsArray()
  @IsOptional()
  images?: string[];
}
