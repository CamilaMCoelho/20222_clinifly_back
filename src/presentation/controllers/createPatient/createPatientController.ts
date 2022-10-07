import {
  conflict,
  ok,
  serverError,
} from "../../helpers/http/httpHelper";

import {
  Controller,
  CreatePatient,
  HttpRequest,
  HttpResponse,
} from "./createPatientControllerProtocols";

export class CreatePatientController implements Controller {
  constructor(private readonly createPatient: CreatePatient) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, cpf, age, email, password } = httpRequest.body;

      await this.createPatient.create({ name, cpf, age, email, password });

      return ok();
    } catch (error: any) {
      switch (error.message) {
        case "STUDENT_CPF_EXISTING":
          return conflict(error);
        case "STUDENT_EMAIL_EXISTING":
          return conflict(error)
        default:
          console.log(error)
          return serverError();
      }
    }
  }
}
