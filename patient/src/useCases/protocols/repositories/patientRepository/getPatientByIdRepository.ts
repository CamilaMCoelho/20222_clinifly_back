import { PatientModel } from "../../../../domain/models/patientModel";

export interface GetPatientByIdRepository {
  getById: (id: string) => Promise<PatientModel | null>
}