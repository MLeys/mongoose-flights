const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    index,
    new: newFlight,
    create,
    show,
}


async function show(req, res) {
    try {
        const flightDoc = await Flight.findById(req.params.id);
        const ticketsDocs = await Ticket.find({flight: flightDoc})

        res.render('flights/show', {
            title: 'Flight Information', 
            flight: flightDoc , 
            tickets: ticketsDocs})
    } catch(err) {
        console.log(err);
        res.send('CHECK TERMINAL for flights --> show controller ERROR')
    }
}

function index(req, res) {
    Flight.find({}, function(err, flightDoc){
        res.render('flights/index', {flights: flightDoc}); 
    })
}

function create(req, res) {
    let newFlight = new Flight(req.body);
    newFlight.save(function() {})
    Flight.findById(newFlight._id).then(function () {
        res.redirect('/');
      })
}


function newFlight(req, res) {
    
    Flight.find({}, function(err, flightDoc){
        const defaultDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        const date = defaultDate.toISOString().slice(0, 16);

        res.render('flights/new', {departDefault: date, flights: flightDoc});
    })
}
