import { prisma } from "./helpers/prisma";

import { CreateAppointmentData } from "../../../domain/useCases/createAppointment";
import { AppointmentModel } from '../../../domain/models/appointmentModel';

import {
  CreateAppointmentRepository,
  CheckPatientByIdRepository,
  CheckPatientByIdResponse,
  GetAppointmentByCpf,
} from "../../../useCases/protocols/repositories/appointmentRepository";

export class PrismaAppointmentsRepository
  implements CreateAppointmentRepository, GetAppointmentByCpf, CheckPatientByIdRepository
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


  async getByCpf(cpf: string): Promise<AppointmentModel | null> {
    const appointment = await prisma.appointment.findFirst({
      where: { patient: { cpf } }
    })

    return appointment
  }
}
