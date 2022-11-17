import {
  Controller,
  GetAppointmentByPatientId,
  HttpRequest,
  HttpResponse,
  serverError,
  ok,
  forbidden,
} from "./getAppointmentByPatientIdProtocols";

export class GetAppointmentController implements Controller {
  constructor(private readonly getAppointmentByPatientId: GetAppointmentByPatientId) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.query;


      const appointment = await this.getAppointmentByPatientId.getAppointmentByPatientId(id);

      if (appointment.length === 0) {
        return ok({ message: 'Nenhuma consulta agendada no nome desse paciente' })
      } 

      return ok(appointment);
    } catch (error: any) {
      switch (error.message) {
        case 'PATIENT_ID_NOT_EXISTING':
          return forbidden(error)
        default:
          return serverError()
      }
    }
  }
}
