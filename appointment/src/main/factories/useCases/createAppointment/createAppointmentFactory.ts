import { CreateAppointment } from '../../../../domain/useCases/createAppointment';
import { PrismaAppointmentsRepository } from '../../../../adapters/repositories/prisma/PrismaAppointmentsRepository';
import { CreateAppointmentUseCase } from '../../../../useCases/createAppointment/createAppointmentUseCase';
import { JwtAdapter } from '../../../../adapters/criptography/jwtAdapter';

import env from '../../../config/env'

export const makeCreateAppointmentFactory = (): CreateAppointment => {
  const { accessTokenSecret } = env
  const prismaAppointmentsRepository = new PrismaAppointmentsRepository()
  const jwtAdapter = new JwtAdapter(accessTokenSecret)
  return new CreateAppointmentUseCase(
    prismaAppointmentsRepository, 
    prismaAppointmentsRepository,
    jwtAdapter
  )
}