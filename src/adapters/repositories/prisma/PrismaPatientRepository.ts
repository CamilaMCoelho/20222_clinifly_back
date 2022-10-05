import { prisma } from "./helpers/prisma";

import {
  CreatePatientRepository,
  CheckPatientByCpfRepository,
  GetPatientByIdRepository,
} from "../../../useCases/protocols/repositories/patientRepository";

import { CreatePatientData } from "../../../domain/useCases/patients/createPatient";
import { PatientModel } from "../../../domain/models/patientModel";

export class PrismaPatientsRepository
  implements
    CreatePatientRepository,
    CheckPatientByCpfRepository,
    GetPatientByIdRepository
{
  async create(data: CreatePatientData): Promise<void> {
    await prisma.patient.create({
      data,
    });
  }
  async checkByCpf(cpf: string): Promise<PatientModel | null> {
    const patient = await prisma.patient.findUnique({
      where: { cpf },
    });

    return patient;
  }
  async getById(id: string): Promise<PatientModel | null> {
    const patient = await prisma.patient.findUnique({
      where: { id },
    });

    return patient;
  }
}
