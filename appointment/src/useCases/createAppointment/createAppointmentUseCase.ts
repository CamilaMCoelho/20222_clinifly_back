import { CreateAppointment, CreateAppointmentRepository, CreateAppointmentData, AppointmentModel, PayloadData, Decrypter, CheckPatientByIdRepository } from "./createAppointmentUseCaseProtocols";

export class CreateAppointmentUseCase implements CreateAppointment {
  constructor(
    private readonly createAppointmentRepository: CreateAppointmentRepository,
    private readonly checkPatientByIdRepository: CheckPatientByIdRepository,
    private readonly decrypter: Decrypter
  ) {}

    async create(appointment: CreateAppointmentData, token: string): Promise<AppointmentModel> {
      const { sub: studentId } = this.decrypter
      .decrypt(token) as PayloadData

      console.log(token)
      console.log(studentId)
      
      const isPatientExists = await this.checkPatientByIdRepository.checkById(studentId as string)
      console.log(isPatientExists)

      if (!isPatientExists) {
        throw new Error('PATIENT_ID_NOT_EXISTING')
      }
      
      return this.createAppointmentRepository.create(appointment)
    }
}