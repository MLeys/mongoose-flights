const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
}

function index(req, res) {
    Flight.find({}, function(err, flightDocs){

        console.log(flightDocs)

        res.render('flights/', {flights: flightDocs}); 
        // injecting the movies variable to use in pages ejs file
    })
}

function newFlight(req, res) {
    res.render('flights/new');
}
