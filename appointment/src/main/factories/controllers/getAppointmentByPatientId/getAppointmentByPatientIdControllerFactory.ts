import { GetAppointmentController } from '../../../../presentation/controllers/getAppointmentByPatientIdController/getAppointmentByPatientIdController';
import { makeGetAppointmentByCpfFactory } from '../../useCases/getAppointmentByPatientId/getAppointmentByPatientIdFactory';

import type { Controller } from "../../../../presentation/protocols";

export const makeGetAppointmentByCpfController = (): Controller => {
  return new GetAppointmentController(makeGetAppointmentByCpfFactory())
}