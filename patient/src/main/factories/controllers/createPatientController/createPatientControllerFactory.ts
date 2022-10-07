import { CreatePatientController } from '../../../../presentation/controllers/createPatient/createPatientController';
import { makeCreatePatientFactory } from '../../useCases/createPatient/createPatientFactory';

import type { Controller } from "../../../../presentation/protocols";

export const makeCreatePatientController = (): Controller => {
  return new CreatePatientController(
    makeCreatePatientFactory(), 
  );
}