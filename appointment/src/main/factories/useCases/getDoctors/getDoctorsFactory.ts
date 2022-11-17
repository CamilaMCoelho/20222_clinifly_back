import { GetDoctors } from '../../../../domain/useCases/getDoctors';
import { PrismaAppointmentsRepository } from '../../../../adapters/repositories/prisma/PrismaAppointmentsRepository';

import { GetDoctorsUseCase } from '../../../../useCases/getDoctors/getDoctorUseCase';

export const makeGetDoctorsFactory = (): GetDoctors => {
  const prismaAppointmentsRepository = new PrismaAppointmentsRepository()
  return new GetDoctorsUseCase(
    prismaAppointmentsRepository
  )
}