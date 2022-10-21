import { prisma } from "./helpers/prisma";

import { CreateAppointmentData } from "../../../domain/useCases/createAppointment";
import { AppointmentModel } from '../../../domain/models/appointmentModel';

import {
  CreateAppointmentRepository,
  CheckPatientByIdRepository,
  CheckPatientByIdResponse,
  GetAppointmentByCpfRepository,
  CheckPatientByCpfRepository,
  CheckPatientByCpfResponse
} from "../../../useCases/protocols/repositories/appointmentRepository";

export class PrismaAppointmentsRepository
  implements CreateAppointmentRepository, GetAppointmentByCpfRepository, CheckPatientByIdRepository, CheckPatientByCpfRepository
{
  async create(appointment: CreateAppointmentData): Promise<AppointmentModel> {
    const appointmentData = await prisma.appointment.create({
      data: appointment,
    })

    return appointmentData
  }

  async checkById(patientId: string): Promise<CheckPatientByIdResponse | null> {
    const appointments = await prisma.patient.findFirst({
      where: { id: patientId }
    })

    return appointments
  }

  async checkByCpf(cpf: string): Promise<CheckPatientByCpfResponse | null> {
    const patient = await prisma.patient.findFirst({
      where: { cpf }
    })

    return patient
  }

  async getByCpf(cpf: string): Promise<AppointmentModel[]> {
    const appointment = await prisma.appointment.findMany({
      where: { patient: { cpf } }
    })

    return appointment
  }
}
