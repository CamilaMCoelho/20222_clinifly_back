import app from './config/app';

import { adaptRoute } from './adapters/expressRouteAdapter';
import { makeCreatePatientController } from './factories/controllers/createPatientController/createPatientControllerFactory';


app.post('/patient', adaptRoute(makeCreatePatientController()))
app.listen(3333, () => {
  console.log('🔥 Server started at http://localhost:3333')
})
