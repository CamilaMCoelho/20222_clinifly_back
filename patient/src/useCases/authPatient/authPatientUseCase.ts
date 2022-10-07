import {
  Authentication,
  AuthenticationData,
  AuthenticationResponse,
  Encrypter,
  HashComparer,
  CheckPatientByEmailRepository
} from './authPatientUseCaseProtocols'

export class AuthStudentUseCase implements Authentication {
  constructor(
    private readonly checkStudentByEmailRepository: CheckPatientByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly accessTokenEncrypter: Encrypter,
  ) {}

  async auth({ email, password }: AuthenticationData): Promise<AuthenticationResponse> {
    const student = await this.checkStudentByEmailRepository.checkByEmail(
      email
    )

    if (student) {
      const passwordMatch = await this.hashComparer.compare(
        password,
        student.password
      )

      if (passwordMatch) {
        const accessToken = await this.accessTokenEncrypter.encrypt({}, student.id)
        
        const tokenReturn: AuthenticationResponse = {
          accessToken,
        }
        return tokenReturn
      }
    }
    throw new Error('E-MAIL_OR_PASSWORD_INCORRECT')
  }
}
