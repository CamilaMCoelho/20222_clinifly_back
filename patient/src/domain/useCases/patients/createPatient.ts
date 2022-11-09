export interface CreatePatientData {
  name: string
  cpf: string
  phone: string
  age: number
  email: string
  password: string
}

export interface CreatePatient {
  create(patient: CreatePatientData): Promise<void>
}