import { AppointmentModel } from "../createAppointment/createAppointmentUseCaseProtocols";
import { GetAppointmentByPatientId, GetAppointmentByPatientIdRepository, CheckAppointmentByPatientId } from "./getAppointmentByPatientIdProtocols";


export class GetAppointmentByPatientIdUseCase implements GetAppointmentByPatientId {
  constructor(
    private readonly getAppointmentByPatientIdRepository: GetAppointmentByPatientIdRepository,
    private readonly checkPatientByIdRepository: CheckAppointmentByPatientId
  ) {}

  async getAppointmentByPatientId(id: string): Promise<AppointmentModel[]> {
    const isPatientId = await this.checkPatientByIdRepository.checkAppointmentByPatientId(id)


    if (!isPatientId) {
      throw new Error('PATIENT_ID_NOT_EXISTING')
    }

    return this.getAppointmentByPatientIdRepository.getAppointmentsByPatientId(id)
  }
}