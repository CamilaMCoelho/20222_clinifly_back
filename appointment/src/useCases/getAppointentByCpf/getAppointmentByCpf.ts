import { AppointmentModel } from "../createAppointment/createAppointmentUseCaseProtocols";
import { GetAppointmentByCpf, GetAppointmentByCpfRepository, CheckPatientByCpfRepository } from "./getAppointmentByCpfProtocols";


export class GetAppointmentByCpfUseCase implements GetAppointmentByCpf {
  constructor(
    private readonly getAppointmentByCpfRepository: GetAppointmentByCpfRepository,
    private readonly checkPatientByCpfRepository: CheckPatientByCpfRepository
  ) {}

  async getByCpf(cpf: string): Promise<AppointmentModel[]> {
    const isPatientCpf = await this.checkPatientByCpfRepository.checkByCpf(cpf)

    if (!isPatientCpf) {
      throw new Error('PATIENT_CPF_NOT_EXISTING')
    }

    return this.getAppointmentByCpfRepository.getByCpf(cpf)
  }
}