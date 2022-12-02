
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket,
    // addTicket,
    // show
};

function newTicket(req, res) {
    res.render('tickets/new');

    // try {

    //     const flightDoc = await Ticket.findById(req.params.id);

    //     res.render('tickets/new');
    // } catch(err) {
    //     console.log(err);
    //     res.send('ERROR in tickets.newTicket *************')
    // }
}

function create(req, res) {

        let newTicket = new Ticket(req.body);
        newTicket.save(function() {
            console.log('TICKET WAS SAVED')

        })
        Ticket.findById(newTicket._id).populate('flight').then(function () {
            console.log(newTicket, '=============== NEW TICKET')
            res.redirect('/flights')  
          })
        // const flightDoc = await Flight.find(req.params.id);

        // res.redirect(`/flights/${flightDoc._id}`);
}


// function create(req, res) {
//     Ticket.create(req.body, function (err, ticket) {
//         console.log('******************************************************')
//         console.log('****************************TICKET***************************')
//         console.log(ticket);
//         console.log('**********************TICKET*************************')
//         console.log('***************************TICKET****************************')
//         res.redirect('tickets/new')
//     })
// }

// function show(req, res) {

// }

// function addTicket(req, res) {

//     Movie.findById(req.params.id, function(err, movieDoc){
//         // add performerId to the movieDoc's array
//         movieDoc.cast.push(req.body.performerId); // req.body, is the contents of the form, performerId is the name property at the from
//         // when mutating a doc ^ we must save to update
//         // save, to tell the db that we changed the doc
//         movieDoc.save(function(err){
//           // where we are saving
//           res.redirect(`/movies/${movieDoc._id}`);
//         })
//       })
    
//     }



// function newTicket(req, res){
//     Ticket.find({}, function(err, tickets) {
//         console.log('**********************TICKETS*********************************')
//         console.log('************************TICKETS************************')
//         console.log(tickets);
//         console.log('********************TICKETS***********************')
//         console.log('***********************TICKETS********************************')
//         res.render('tickets/new', {
//             title: 'Add Ticket to Flight',
//             tickets
//         });
//     });
// };

// function create(req, res) {
//     Flight.findById(req.params.id, function(err, flightDoc){
//         if (err) {
//             res.send(' ERROR from CREATING NEW DESTINATION')
//         }
//         flightDoc.destinations.push(req.body);

//         flightDoc.save(function (err) {
//             res.redirect(`/flights/${req.params.id}`)
//         });
//     });
// };


// function create(req, res) {
//     Flight.findById(req.params.id, function(err, flightDoc){
//         if (err) {
//             res.send(' ERROR from CREATING NEW DESTINATION')
//         } else {
//             flightDoc.destinations.push(req.body);
//             Ticket.find({flight: flight._id}, function(err, tickets) {
//                 flightDoc.save(function (err) {
//                     res.redirect(`/flights/${req.params.id}`, flights, tickets)
//                 })


//             })
//         }
//     })
// }

            




// const Ticket = require('../models/ticket');
// const Flight = require('../models/flight');

// module.exports = {
//     create,
//     new: newTicket
// };

// function create(req, res){
//     Flight.findById(req.params.id, function(err, flight) {
//         Ticket.find({flight: flight._id}, function(err, tickets) {
//             res.render('tickets/new', {title: 'Flight Information', flight , tickets }) 
//         }); // end of Ticket.Find
//     }); // end of FLight.findID
// }; // end of function - show

// // end of the create controller function


