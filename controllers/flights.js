const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

function create(req, res) {

    Flight.create(req.body, function(err, flightDoc){

        if (err) {
            console.log(err);
        }
        console.log(flightDoc);

        res.redirect('/flights');
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

function index(req, res) {
    Flight.find({}, function(err, flightDocs){

        console.log(flightDocs)

        res.render('flights/index', {flights: flightDocs}); 
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
    // Flight.findById(req.params.id, )


    res.render('flights/new');
}
