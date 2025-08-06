/*
  Warnings:

  - Added the required column `category` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('CLOTHING', 'SHOES', 'BAGS', 'JEWELRY', 'ACCESSORIES');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "brand" TEXT,
ADD COLUMN     "category" "Category" NOT NULL,
ADD COLUMN     "color" TEXT,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "size" TEXT,
ADD COLUMN     "stock" INTEGER;
