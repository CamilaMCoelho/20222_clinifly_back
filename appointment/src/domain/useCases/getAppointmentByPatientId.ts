import { AppointmentModel } from '../models/appointmentModel';

export interface GetAppointmentByPatientId {
  getAppointmentByPatientId(id: string): Promise<AppointmentModel[]>
}