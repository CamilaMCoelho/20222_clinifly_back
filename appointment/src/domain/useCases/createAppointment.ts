import { AppointmentModel } from '../models/appointmentModel';

export interface CreateAppointmentData {
  patientId: string
  doctorId: string
  address: string
  appointmentPrice: string
}

export interface CreateAppointment {
  create: (appointment: CreateAppointmentData, token: string) => Promise<AppointmentModel>
}