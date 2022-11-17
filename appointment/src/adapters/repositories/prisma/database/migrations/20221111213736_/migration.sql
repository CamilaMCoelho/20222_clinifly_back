/*
  Warnings:

  - A unique constraint covering the columns `[patientId]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[doctorId]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "appointments_patientId_key" ON "appointments"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "appointments_doctorId_key" ON "appointments"("doctorId");
