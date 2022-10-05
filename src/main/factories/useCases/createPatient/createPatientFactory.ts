import { BcryptAdapter } from '../../../../adapters/criptography/bcryptAdapter';
import { CreatePatient } from '../../../../domain/useCases/patients/createPatient';
import { PrismaPatientsRepository } from '../../../../adapters/repositories/prisma/PrismaPatientRepository';
import { CreatePatientUseCase } from '../../../../useCases/createPatient/createPatientUseCase';

export const makeCreatePatientFactory = (): CreatePatient => {
  const salt = 8
  const bcryptAdapter = new BcryptAdapter(salt);
  const prismaPatientsRepository = new PrismaPatientsRepository();
  return new CreatePatientUseCase(
    prismaPatientsRepository, 
    prismaPatientsRepository,
    bcryptAdapter, 
  );
}