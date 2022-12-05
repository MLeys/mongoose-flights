const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    index,
    new: newFlight,
    create,
    show,
    delete: deleteFlight,
    deleteDestination
}

async function deleteDestination(req, res) {
    try {
        console.log(req.body);
        const destinationDoc = await Flight.destinations.findByIdAndDelete(req.params.id);
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log(destinationDoc)

        res.redirect(`/flights/${flight}`)
    } catch(err) {
        console.log(err)
        console.log(' $$$$$$$$$$$$$$$$$$$$$  Check terminal <-- flights-deleteflight')
    }
}

async function deleteFlight(req, res) {
    try {
        // const flightDoc = await Flight.findByIdAndDelete(req.params.id);

        const flightDoc = await Flight.findById(req.params.id);
        const destinationsDocs = await flightDoc.destinations.findById({flight: flightDoc})

        res.redirect('/flights');
    } catch(err) {
        console.log(err)
        console.log(' $$$$$$$$  Check terminal <-- flights-deleteflight')
    }
}

async function show(req, res) {
    try {
        const flightDoc = await Flight.findById(req.params.id);
        const ticketsDocs = await Ticket.find({flight: flightDoc})
        
        const destinations = flightDoc.destinations.sort((a, b) => a.arrival - b.arrival);
        
        res.render('flights/show', {
            title: 'Flight Information', 
            flight: flightDoc , 
            tickets: ticketsDocs,
            destinations
        })
    } catch(err) {
        console.log(err);
        res.send('CHECK TERMINAL for flights --> show controller ERROR')
    }
}

async function index( req, res) {
    try {
        const flightsDoc = await Flight.find({}).exec();
        flightsDoc.sort((a, b) => a.departs - b.departs);
        
        res.render('flights/index', { flights: flightsDoc});
   
    }catch(err) {
        console.log(err);
        console.log(' ---- TERMINAL ERROR ==== flgihts ctrl INDEX')
    }
}


function create(req, res) {
    let newFlight = new Flight(req.body);
    newFlight.save(function() {})
    Flight.findById(newFlight._id).then(function () {
        res.redirect('/');
      })
}


async function newFlight( req, res) {
    try {
        const flightDoc = await Flight.find({}).exec();
        const defaultDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        const date = defaultDate.toISOString().slice(0, 16);

        res.render('flights/new', {departDefault: date, flights: flightDoc});
   
    }catch(err) {
        console.log(err);
        console.log(' ---- TERMINAL ERROR ==== flgihts ctrl newFlight')
    }
}

