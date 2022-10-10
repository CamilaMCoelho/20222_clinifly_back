export interface AppointmentModel {
  id: string;
  patientId: string;
  doctorId: string;
  address: string;
  appointment_price: string;
  createdAt: Date;
}
