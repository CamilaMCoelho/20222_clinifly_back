export interface CheckPatientByIdResponse {
  id: string
  name: string
  cpf: string
  age: number
  email: string
  password: string
  createdAt: Date
}

export interface CheckPatientByIdRepository {
  checkById: (studentId: string) => Promise<CheckPatientByIdResponse | null>
}