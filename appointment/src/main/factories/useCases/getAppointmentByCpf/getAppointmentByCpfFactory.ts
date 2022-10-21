import { PrismaAppointmentsRepository } from '../../../../adapters/repositories/prisma/PrismaAppointmentsRepository';
import { GetAppointmentByCpf } from '../../../../domain/useCases/getAppointmentByCpf';
import { GetAppointmentByCpfUseCase } from '../../../../useCases/getAppointentByCpf/getAppointmentByCpf';

export const makeGetAppointmentByCpfFactory = (): GetAppointmentByCpf => {
  const prismaAppointmentsRepository = new PrismaAppointmentsRepository()

  return new GetAppointmentByCpfUseCase(
    prismaAppointmentsRepository, 
    prismaAppointmentsRepository,
  )
}