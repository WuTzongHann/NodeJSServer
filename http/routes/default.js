import express from 'express'
import defaultController from '../controllers/default.js'
import { jsonLogger } from '../../logs/index.js'

const notAllowedMethod = (req, res) => {
  res.status(405).send()
  jsonLogger.error('Method Not Allowed', { statusCode: res.statusCode })
}
const router = express.Router()
router.route('/')
  .get(defaultController.sayHelloWorld)
  .all(notAllowedMethod)
router.route('/health')
  .get(defaultController.responseHealth)
  .all(notAllowedMethod)
router.route('/echo')
  .post(defaultController.echoYourRequest)
  .all(notAllowedMethod)
export default router
