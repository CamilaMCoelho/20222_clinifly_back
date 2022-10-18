import app from './config/app';
import env from './config/env';

import { adaptRoute } from '../../../patient/src/main/adapters/expressRouteAdapter';
import { makeCreateAppointmentController } from './factories/controllers/createAppointment/createAppointmentControllerFactory';

app.post('/appointment', adaptRoute(makeCreateAppointmentController()))
app.get('/appointment', () => {})

app.listen(env.port, () => {
  console.log(`🔥 Server started ${env.port}`)
})
