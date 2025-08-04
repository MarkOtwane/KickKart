/*
  Warnings:

  - You are about to drop the column `address` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `contact` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `customers` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "address",
DROP COLUMN "contact",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "fullName" TEXT NOT NULL;
