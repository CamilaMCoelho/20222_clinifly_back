export interface AppointmentModel {
  id: string;
  patientId: string;
  doctorId: string;
  address: string;
  appointmentPrice: string;
  createdAt: Date;
}
