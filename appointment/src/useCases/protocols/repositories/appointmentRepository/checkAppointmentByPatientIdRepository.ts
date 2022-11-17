export interface CheckAppointmentByPatientIdResponse {
  id: string;
  patientId: string;
  doctorId: string;
  address: string;
  appointmentPrice: string;
  createdAt: Date;
}


export interface CheckAppointmentByPatientId {
  checkAppointmentByPatientId: (patientId: string) => Promise<CheckAppointmentByPatientIdResponse | null>
}