const Flight = require('../models/flight');

module.exports = {
    create,
};



function create(req, res) {
    Flight.findById(req.params.id, function(err, flightDoc){
        if (err) {
            res.send(' ERROR from CREATING NEW DESTINATION')
        }
        flightDoc.destinations.push(req.body);
        flightDoc.destinations.sort((a, b) => a.departs - b.departs);

        flightDoc.save(function (err) {
            res.redirect(`/flights/${req.params.id}`)
        });
    });
};