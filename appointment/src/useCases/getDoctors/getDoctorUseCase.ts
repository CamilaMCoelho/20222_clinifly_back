import { DoctorModel, GetDoctors, GetDoctorsRepository } from "./getDoctorProtocols";


export class GetDoctorsUseCase implements GetDoctors {
  constructor(
    private readonly getDoctorsRepository: GetDoctorsRepository,
  ) {}

  async getDoctors(): Promise<DoctorModel[]> {
    return this.getDoctorsRepository.getDoctors()
  }
}