import { Controller, CreateAppointment, HttpRequest, HttpResponse, ok, serverError, } from "./createAppointmentProtocols";
import { forbidden } from '../../helpers/http/httpHelper';
export class CreateAppointmentController implements Controller {
  constructor(
    private readonly createAppointment: CreateAppointment
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { patientId, doctorId, address, appointmentPrice } = httpRequest.body
      
      const { token } = httpRequest.body || httpRequest.headers

      const appointment = await this.createAppointment.create({ patientId, doctorId, address, appointmentPrice }, token)

      return ok(appointment)
    } catch (error: any) {
      switch (error.message) {
        case 'PATIENT_ID_NOT_EXISTING':
          return forbidden(error)
        default:
          console.log(error)
          return serverError()
      }
    }
  }
}