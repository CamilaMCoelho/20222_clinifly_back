import { AppointmentModel } from '../../../../domain/models/appointmentModel';

export interface GetAppointmentByPatientIdRepository {
  getAppointmentsByPatientId(id: string): Promise<AppointmentModel[]>
}