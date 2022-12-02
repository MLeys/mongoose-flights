const express = require('express')
const { route } = require('.');
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets');

router.get('/new', ticketsCtrl.new); //same as new movie
// router.get('/flights/:id/tickets', ticketsCtrl.index);
router.post('/', ticketsCtrl.create);
// router.post('/flights/:id/tickets', ticketsCtrl.addTicket);
// router.get('/flights/:id', flightCtrl.show);

module.exports = router;