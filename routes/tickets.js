const express = require('express')
const { route } = require('.');
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets');


router.get('/flights/:id/tickets/new', ticketsCtrl.new); //same as new movie
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.delete('/flights/:id/tickets/:id', ticketsCtrl.delete);

// router.get('/flights/:id', ticketsCtrl.show);
// router.get('/flights/:id', ticketsCtrl.addTicket);
// router.get('/flights/:id/tickets', ticketsCtrl.index);

// router.post('/flights/:id/tickets', ticketsCtrl.addTicket);



module.exports = router;