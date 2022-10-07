import { AuthPatientController } from '../../../../presentation/controllers/authPatient/authPatientController';
import { Controller } from '../../../../presentation/protocols/controller';
import { makeAuthPatientFactory } from '../../useCases/authPatient/authPatientFactory';

export const makeAuthPatientController = (): Controller => {
  return new AuthPatientController(makeAuthPatientFactory())
}