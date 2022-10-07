import { Controller, Authentication, HttpRequest, HttpResponse, ok, unauthorized, serverError } from './authPatientControllerProtocols';


export class AuthPatientController implements Controller {
  constructor (
    private readonly authentication: Authentication
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body

      const { accessToken } = await this.authentication.auth({ email, password })

      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken })
    } catch (error: any) {
      switch (error.message) {
        case 'E-MAIL_OR_PASSWORD_INCORRECT':
          return unauthorized()
        default:
          return serverError()
      }
    }
  }
}