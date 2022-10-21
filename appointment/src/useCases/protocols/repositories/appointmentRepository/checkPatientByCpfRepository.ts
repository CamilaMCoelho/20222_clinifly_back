export interface CheckPatientByCpfResponse {
  id: string;
  name: string;
  cpf: string;
  age: number;
  email: string;
  password: string;
  createdAt: Date;
}

export interface CheckPatientByCpfRepository {
  checkByCpf: (cpf: string) => Promise<CheckPatientByCpfResponse | null>
}