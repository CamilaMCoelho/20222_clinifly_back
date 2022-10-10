import { AppointmentModel } from '../../../../domain/models/appointmentModel';

// export interface App {
//   id: string
//   name: string
//   cpf: string
//   age: number
//   email: string
//   password: string
//   createdAt: Date
// }

export interface GetAppointmentByCpf {
  getByCpf(cpf: string): Promise<AppointmentModel | null>
}