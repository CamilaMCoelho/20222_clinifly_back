export interface CreatePatientData {
  name: string
  cpf: string
  age: number
  email: string
  password: string
}

export interface CreatePatient {
  create(patient: CreatePatientData): Promise<void>
}