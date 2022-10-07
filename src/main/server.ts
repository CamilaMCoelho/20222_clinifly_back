import app from './config/app';

import { adaptRoute } from './adapters/expressRouteAdapter';
import { makeCreatePatientController } from './factories/controllers/createPatientController/createPatientControllerFactory';


app.post('/patient', adaptRoute(makeCreatePatientController()))
app.listen(process.env.PORT || 3333, () => {
  console.log('🔥 Server started')
})
