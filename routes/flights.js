import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET http://localhost:3000/flights
router.get('/', flightsCtrl.index)
// GET http://localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
// GET http://localhost:3000/flights/:flightId
router.get('/:flightId', flightsCtrl.show)
// GET http://localhost:3000/flights/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)
// POST http://localhost:3000/flights
router.post('/', flightsCtrl.create)
// POST http://localhost:3000/flights/:flightId/tickets
router.post('/:flightId/tickets', flightsCtrl.createTicket)
// POST http://localhost:3000/flights/:flightId/meals
router.post('/:flightId/meals', flightsCtrl.addToMeals)
// DELETE http://localhost:3000/flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)
// PUT http://localhost:3000/flgihts/:flightId
router.put('/:flightId', flightsCtrl.update)

export {
  router
}