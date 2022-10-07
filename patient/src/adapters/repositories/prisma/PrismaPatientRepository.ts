import { prisma } from "./helpers/prisma";

import {
  CreatePatientRepository,
  CheckPatientByCpfRepository,
  CheckPatientByEmailRepository,
  GetPatientByIdRepository
} from "../../../useCases/protocols/repositories/patientRepository";

import { CreatePatientData } from "../../../domain/useCases/patients/createPatient";
import { PatientModel } from "../../../domain/models/patientModel";

export class PrismaPatientsRepository
  implements
    CreatePatientRepository,
    CheckPatientByCpfRepository,
    CheckPatientByEmailRepository,
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

  async checkByEmail(email: string): Promise<PatientModel | null> {
    const patient = await prisma.patient.findUnique({
      where: { email },
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
