import { PatientModel } from "../../../../domain/models/patientModel";

export interface CheckPatientByEmailRepository {
  checkByEmail: (email: string) => Promise<PatientModel | null>
}