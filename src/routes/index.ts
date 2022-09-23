import { Router } from 'express'

import { CreateQueryController } from '../controllers/createQueryController';

const createQueryController = new CreateQueryController()

export default (router: Router): void => {
  router.post('/query', createQueryController.handle)
}