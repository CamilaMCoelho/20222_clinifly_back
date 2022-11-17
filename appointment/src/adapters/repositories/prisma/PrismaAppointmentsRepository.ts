import { prisma } from "./helpers/prisma";

import { CreateAppointmentData } from "../../../domain/useCases/createAppointment";
import { AppointmentModel } from '../../../domain/models/appointmentModel';

import {
  CreateAppointmentRepository,
  GetAppointmentByPatientIdRepository,
  CheckPatientByCpfRepository,
  CheckPatientByCpfResponse,
  CheckAppointmentByPatientIdResponse,
  CheckAppointmentByPatientId,
  CheckPatientByIdRepository,
  CheckPatientByIdResponse,
  GetDoctorsRepository,
} from "../../../useCases/protocols/repositories/appointmentRepository";
import { DoctorModel } from "../../../domain/models/doctorModel";

export class PrismaAppointmentsRepository
  implements CreateAppointmentRepository, GetAppointmentByPatientIdRepository, CheckAppointmentByPatientId, GetDoctorsRepository, CheckPatientByIdRepository, CheckPatientByCpfRepository
{
  async create(appointment: CreateAppointmentData): Promise<AppointmentModel> {
    const appointmentData = await prisma.appointment.create({
      data: appointment,
    })

    return appointmentData
  }

  async checkById(patientId: string): Promise<CheckPatientByIdResponse | null> {
    const patient = await prisma.patient.findUnique({
      where: { id: patientId }
    })

    return patient
  }

  async checkAppointmentByPatientId(patientId: string): Promise<CheckAppointmentByPatientIdResponse | null> {
    const appointments = await prisma.appointment.findFirst({
      where: { patientId }
    })

    return appointments
  }

  async checkByCpf(cpf: string): Promise<CheckPatientByCpfResponse | null> {
    const patient = await prisma.patient.findUnique({
      where: { cpf }
    })

    return patient
  }

  async getAppointmentsByPatientId(id: string): Promise<AppointmentModel[]> {
    const appointment = await prisma.appointment.findMany({
      where: { patientId: id }
    })

    return appointment
  }

  async getDoctors(): Promise<DoctorModel[]> {
    const doctors = await prisma.doctor.findMany()

    return doctors
  }

}
