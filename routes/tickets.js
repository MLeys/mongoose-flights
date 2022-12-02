const express = require('express')
const { route } = require('.');
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets');

// router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.get('/tickets/new', ticketsCtrl.new);
router.post('/tickets', ticketsCtrl.create);
router.post('/flights/:id/tickets', ticketsCtrl.addTicket);
router.get('/tickets/:id', ticketsCtrl.show);

module.exports = router;