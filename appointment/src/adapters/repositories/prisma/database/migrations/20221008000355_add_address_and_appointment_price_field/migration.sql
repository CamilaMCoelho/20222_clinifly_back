/*
  Warnings:

  - Added the required column `address` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appointment_price` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "appointment_price" TEXT NOT NULL;
