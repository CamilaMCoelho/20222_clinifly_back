import { AppointmentModel } from '../../../../domain/models/appointmentModel';

export interface GetAppointmentByCpfRepository {
  getByCpf(cpf: string): Promise<AppointmentModel[]>
}