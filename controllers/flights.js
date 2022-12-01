const Flight = require('../models/flight');


module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function show(req, res) {
    console.log(req.params.id, ' <---- req id!');
    Flight.findById(req.params.id, function(err, flight) {;
        console.log('==========================================')
        console.log(flight.id);
        console.log('==========================================');
        res.render('flights/show', {flight: flight}) 
    })}


	// Flight.findById(req.params.id, function(err, flight) {
    //   console.log(flight, ' <----- FLIGHT VARIABLE');
	//   console.log('==========================================')
	//   console.log(req.params.id, ' <-------- req.params.id')
	   //{ title: 'flight Detail', flight });
  


function index(req, res) {
    Flight.find({}, function(err, flightDoc){

        // console.log(flightDoc)

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


function newFlight(req, res) {
    Flight.find({}, function(err, flightDoc){
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
