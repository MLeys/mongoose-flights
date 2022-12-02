const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function newTicket(req, res) {
    console.log(req.params.id, ' <---- req id!');
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            console.log('==========================================')
            console.log(flight, ' <-----------------***** flight *****--------------->');
            console.log('==========================================');
            console.log('==========================================')
            console.log(tickets, ' <-----------------***** tickets *****--------------->');
            console.log('==========================================');
            res.render('flights/:id/tickets/new', {title: 'Flight Information', flight , tickets }) 
        }); // end of Ticket.Find
    }); // end of FLight.findID
}; // end of function - show
    
//     res.render('/flights/:id/tickets/new')
// }


function show(req, res) {
    console.log(req.params.id, ' <---- req id!');
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            console.log('==========================================')
            console.log(flight, ' <-----------------***** flight *****--------------->');
            console.log('==========================================');
            console.log('==========================================')
            console.log(tickets, ' <-----------------***** tickets *****--------------->');
            console.log('==========================================');
            res.render('flights/show', {title: 'Flight Information', flight , tickets }) 
        }); // end of Ticket.Find
    }); // end of FLight.findID
}; // end of function - show



function index(req, res) {
    // let FlightSorted = [];
    // for (let arrivalTime in Flight) {
    //     FlightSorted.push([arrivalTime, Flight[]])
    // }

    Flight.find({}, function(err, flightDoc){
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
         console.log(flightDoc)
         console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
         console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

        res.render('flights/index', {flights: flightDoc}); 
        // injecting the movies variable to use in pages ejs file
    })
}


function create(req, res) {

    

    Flight.create(req.body, function(err, flightDoc){
        

        if (err) {
            console.log(err);
        }
        // console.log(flightDoc);
        console.log('*******************************************************')
        console.log('*******************************************************')
        console.log(flightDoc);
        console.log('*******************************************************')
        console.log('*******************************************************')

        res.redirect('/');
    })
    // console.log(req.body, ' <---------------------------')
    // const newFlight = new Flight();
    // // Obtain the default date
    // const dt = newFlight.departs;
    // console.log(dt, " DT DFGFASDFDSFDSAASFDSSADSDFSA")
    // // Format the date for the value attribute of the input
    // const departsDate = dt.toISOString().slice(0, 16);
    // console.log('==================================')
    // console.log(departsDate);
    
}


function newFlight(req, res) {
    
    Flight.find({}, function(err, flightDoc){
        // const flight3 = flightDoc.
        console.log(flightDoc, ' <======== FLIGHTDOC')
        
        const defaultDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        console.log(defaultDate, '<------------------------------------------------DEFAULT DATE')
        const date = defaultDate.toISOString().slice(0, 16);
        console.log(date, '===================== NEW DATE in FORMAT')
        res.render('flights/new', {departDefault: date, flights: flightDoc});
        // res.render('flights/new', {flights: flightDoc});
    })
    // Obtain the default date
    
    // Format the date for the value attribute of the input
    // const departsDate = dt.toISOString().slice(0, 16);
    // res.render('flights/new', {departDefault: departsDate});
    
}
