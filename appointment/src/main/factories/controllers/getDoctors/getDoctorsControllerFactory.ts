import type { Controller } from "../../../../presentation/protocols";
import { GetDoctorsController } from '../../../../presentation/controllers/getDoctors/getDoctorsController';
import { makeGetDoctorsFactory } from '../../useCases/getDoctors/getDoctorsFactory';

export const makeGetDoctorsController = (): Controller => {
  return new GetDoctorsController(makeGetDoctorsFactory())
}