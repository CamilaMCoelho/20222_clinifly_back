import { DoctorModel } from "../models/doctorModel";

export interface GetDoctors {
  getDoctors(): Promise<DoctorModel[]>
}