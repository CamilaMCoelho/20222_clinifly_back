import { AppointmentModel } from '../models/appointmentModel';

export interface GetAppointmentByCpf {
  getByCpf(cpf: string): Promise<AppointmentModel>
}