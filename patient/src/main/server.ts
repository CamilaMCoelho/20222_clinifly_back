import { adaptRoute } from './adapters/expressRouteAdapter';
import app from './config/app';
import env from './config/env';
import { makeAuthPatientController } from './factories/controllers/authPatientController/authPatientControllerFactory';
import { makeCreatePatientController } from './factories/controllers/createPatientController/createPatientControllerFactory';

app.post('/patients', adaptRoute(makeCreatePatientController()))
app.post('/auth', adaptRoute(makeAuthPatientController()))

app.listen(env.port, () => {
  console.log(`🔥 Server started ${env.port}`)
})
