import { CreatePatient, CreatePatientData, CreatePatientRepository, CheckPatientByCpfRepository, Hasher } from './createPatientProtocols'

export class CreatePatientUseCase implements CreatePatient {
  constructor (
    private readonly createPatientRepository: CreatePatientRepository,
    private readonly checkPatientByCpfRepository: CheckPatientByCpfRepository,
    private readonly encrypter: Hasher
  ) {}

  async create(patientData: CreatePatientData): Promise<void> {
    const patientCpf = await this.checkPatientByCpfRepository
    .checkByCpf(patientData.cpf);

    if(patientCpf) {
      throw new Error('STUDENT_CPF_EXISTING');
    }

    const hashedPassword = await this.encrypter
    .hash(patientData.password);

    await this.createPatientRepository
    .create(Object.assign({}, patientData, { password: hashedPassword }));
  }
}