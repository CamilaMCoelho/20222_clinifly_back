import { PatientModel } from "../../../../domain/models/patientModel";

export interface CheckPatientByCpfRepository {
  checkByCpf: (cpf: string) => Promise<PatientModel | null>
}