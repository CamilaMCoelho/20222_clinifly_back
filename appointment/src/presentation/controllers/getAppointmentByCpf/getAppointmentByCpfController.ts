import {
  Controller,
  GetAppointmentByCpf,
  HttpRequest,
  HttpResponse,
  serverError,
  ok,
  forbidden,
} from "./getAppointmentByCpfProtocols";

export class GetAppointmentController implements Controller {
  constructor(private readonly getAppointmentByCpf: GetAppointmentByCpf) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { cpf } = httpRequest.body;

      const appointment = await this.getAppointmentByCpf.getByCpf(cpf);

      if (appointment.length === 0) {
        return ok({ message: 'Nenhuma consulta agendada no nome desse paciente' })
      } 

      return ok(appointment);
    } catch (error: any) {
      switch (error.message) {
        case 'PATIENT_CPF_NOT_EXISTING':
          return forbidden(error)
        default:
          return serverError()
      }
    }
  }
}
