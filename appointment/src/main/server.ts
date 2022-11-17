import app from './config/app';
import env from './config/env';

import { adaptRoute } from '../../../patient/src/main/adapters/expressRouteAdapter';
import { makeCreateAppointmentController } from './factories/controllers/createAppointment/createAppointmentControllerFactory';
import { makeGetAppointmentByCpfController } from './factories/controllers/getAppointmentByPatientId/getAppointmentByPatientIdControllerFactory';
import { makeGetDoctorsController } from './factories/controllers/getDoctors/getDoctorsControllerFactory';

app.post('/appointment', adaptRoute(makeCreateAppointmentController()))
app.get('/appointment', adaptRoute(makeGetAppointmentByCpfController()))
app.get('/doctors', adaptRoute(makeGetDoctorsController()))

app.listen(env.port, () => {
  console.log(`🔥 Server started ${env.port}`)
})
