import {
  Controller,
  HttpResponse,
  ok,
  serverError,
  GetDoctors,
} from "./getDoctorsProtocols";

export class GetDoctorsController implements Controller {
  constructor(private readonly getDoctors: GetDoctors) {}

  async handle(): Promise<HttpResponse> {
    try {
      const doctors = await this.getDoctors.getDoctors();

      return ok(doctors);
    } catch (error: any) {
      return serverError();
    }
  }
}
