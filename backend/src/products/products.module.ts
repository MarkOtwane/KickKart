import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../prisma/prisma.module'; // ✅ Import this

@Module({
  imports: [PrismaModule], // ✅ Add this line
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
