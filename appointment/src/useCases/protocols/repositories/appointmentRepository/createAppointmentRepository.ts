import { CreateAppointmentData } from "../../../../domain/useCases/createAppointment";
import { AppointmentModel } from '../../../../domain/models/appointmentModel';

export interface CreateAppointmentRepository {
  create(appointment: CreateAppointmentData): Promise<AppointmentModel>
}