import { Authentication } from '../../../../domain/useCases/patients/authentication';
import { PrismaPatientsRepository } from '../../../../adapters/repositories/prisma/PrismaPatientRepository';
import { JwtAdapter } from '../../../../adapters/criptography/jwtAdapter';
import { AuthStudentUseCase } from '../../../../useCases/authPatient/authPatientUseCase';
import { BcryptAdapter } from '../../../../adapters/criptography/bcryptAdapter';

import env from '../../../config/env';

export const makeAuthPatientFactory = (): Authentication => {
  const { accessTokenSecret, expiresInAccessToken } = env
  const salt = 8
  const bcryptAdapter = new BcryptAdapter(salt)
  const prismaPatientsRepository = new PrismaPatientsRepository()
  const jwtAccessTokenAdapter = new JwtAdapter(accessTokenSecret, expiresInAccessToken)

  return new AuthStudentUseCase(
    prismaPatientsRepository, 
    bcryptAdapter, 
    jwtAccessTokenAdapter
  )
}