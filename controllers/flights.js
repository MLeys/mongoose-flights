const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

function create(req, res) {
    console.log(req.body)
}

function index(req, res) {
    Flight.find({}, function(err, flightDocs){

        console.log(flightDocs)

        res.render('flights/', {flights: flightDocs}); 
        // injecting the movies variable to use in pages ejs file
    })
}

function newFlight(req, res) {
    // const newFlight = new Flight();
    // // Obtain the default date
    // const dt = newFlight.departs;
    // // Format the date for the value attribute of the input
    // const departsDate = dt.toISOString().slice(0, 16);
    // res.render('flights/new', {departsDate});


    res.render('flights/new');
}
