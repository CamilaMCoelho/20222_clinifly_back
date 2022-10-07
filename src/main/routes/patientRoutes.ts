import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeCreatePatientController } from '../factories/controllers/createPatientController/createPatientControllerFactory'
import { makeAuthPatientController } from '../factories/controllers/authPatientController/authPatientControllerFactory'

export default (): void => {
  const router = Router()
  router.post('/patients', adaptRoute(makeCreatePatientController()))
  router.post('/auth', adaptRoute(makeAuthPatientController()))
}