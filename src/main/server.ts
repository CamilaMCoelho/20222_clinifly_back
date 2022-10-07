import app from './config/app';
import env from './config/env';

// import { adaptRoute } from './adapters/expressRouteAdapter';
// import { makeCreatePatientController } from './factories/controllers/createPatientController/createPatientControllerFactory';

// app.post('/patient', adaptRoute(makeCreatePatientController()))
app.listen(env.port || 3333, () => {
  console.log('🔥 Server started')
})
