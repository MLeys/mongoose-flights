var express = require('express');
const { route } = require('.');
var router = express.Router();
const flightCtrl = require('../controllers/flights')


router.get('/', flightCtrl.index);
router.get('/new', flightCtrl.new);
router.post('/', flightCtrl.create);
router.delete('/:id', flightCtrl.delete);
router.get('/:id', flightCtrl.show);



module.exports = router;
