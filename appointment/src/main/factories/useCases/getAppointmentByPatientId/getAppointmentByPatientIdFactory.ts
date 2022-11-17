import { PrismaAppointmentsRepository } from '../../../../adapters/repositories/prisma/PrismaAppointmentsRepository';
import { GetAppointmentByPatientId } from '../../../../domain/useCases/getAppointmentByPatientId';
import { GetAppointmentByPatientIdUseCase } from '../../../../useCases/getAppointentByPatientId/getAppointmentByPatientId';

export const makeGetAppointmentByCpfFactory = (): GetAppointmentByPatientId => {
  const prismaAppointmentsRepository = new PrismaAppointmentsRepository()

  return new GetAppointmentByPatientIdUseCase(
    prismaAppointmentsRepository, 
    prismaAppointmentsRepository,
  )
}