import { DoctorModel } from "../../../../domain/models/doctorModel";

export interface GetDoctorsRepository {
  getDoctors(): Promise<DoctorModel[]>
}