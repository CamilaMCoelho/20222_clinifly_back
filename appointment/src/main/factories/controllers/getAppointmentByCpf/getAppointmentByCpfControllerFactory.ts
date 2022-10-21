import { GetAppointmentController } from '../../../../presentation/controllers/getAppointmentByCpf/getAppointmentByCpfController';
import { makeGetAppointmentByCpfFactory } from '../../useCases/getAppointmentByCpf/getAppointmentByCpfFactory';

import type { Controller } from "../../../../presentation/protocols";

export const makeGetAppointmentByCpfController = (): Controller => {
  return new GetAppointmentController(makeGetAppointmentByCpfFactory())
}