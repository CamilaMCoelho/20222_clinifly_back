/*
  Warnings:

  - A unique constraint covering the columns `[patientId,doctorId]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "appointments_doctorId_key";

-- DropIndex
DROP INDEX "appointments_patientId_key";

-- CreateIndex
CREATE UNIQUE INDEX "appointments_patientId_doctorId_key" ON "appointments"("patientId", "doctorId");
