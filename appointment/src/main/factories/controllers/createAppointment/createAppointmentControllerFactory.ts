import { CreateAppointmentController } from '../../../../presentation/controllers/createAppoinment/createAppointmentController';
import { makeCreateAppointmentFactory } from '../../useCases/createAppointment/createAppointmentFactory';

import type { Controller } from "../../../../presentation/protocols";

export const makeCreateAppointmentController = (): Controller => {
  return new CreateAppointmentController(makeCreateAppointmentFactory())
}