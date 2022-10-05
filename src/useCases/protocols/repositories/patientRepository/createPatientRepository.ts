import { CreatePatientData } from '../../../../domain/useCases/patients/createPatient'

export interface CreatePatientRepository {
  create(patient: CreatePatientData): Promise<void>
}