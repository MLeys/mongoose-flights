
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket,
    // addTicket,
    // show,
    delete: deleteTicket
};

async function deleteTicket(req, res) {
    try {
        // const flightDoc = await Flight.findById(req.params.id);
        const ticketDoc = await Ticket.findByIdAndDelete(req.params.id).exec();
        // const ticketDocId = ticketDoc.id;
        // const flightDoc = await Flight.findById(ticketDoc.flight).exec();
        // const flightDocId = flightDoc._id;
        // await Ticket.deleteOne({ _id: ticketDoc._id})
        
        // console.log('______________________________________________');
        // console.log( ticketDoc, '<--- ticketDoc');
        // console.log( ticketDocId, '<--- ticketDocId');
        // console.log( flightDoc, '<--- flightDoc');
        // console.log( flightDocId, '<--- flightDocId');
        // console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
        
        
        // Ticket.deleteOne(req.params.id);
        res.redirect(`/flights/${ticketDoc.flight}`)
    } catch(err) {
        console.log(err);
        res.send(' <=== TERMINAL ERROR ====== Check ticketCtrl - del')
    }
}

async function newTicket(req, res){
    try {
        const flightDoc = await Flight.findById(req.params.id);

        const seatOptionsExpression = new RegExp('/[A-F][1-9]\d?/');
        // const seatOptionsArray = [...seatOptionsExpression]
        // const ticketsDocs = await Ticket.find({ _id })
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        console.log(' ----- ', seatOptionsExpression)
      // Find the movie that I want to add the performer too
      const tickets = await Ticket.find({}).exec();

      // CREATE NEW TICKET HERE?
      const seatLetters = ['A', 'B', 'C', 'D', 'E', 'F']
      const seatNumbers = [];
      const seatOptions = [];
      for (let i = 1; i <=99 ; i++) {
        seatNumbers.push(i);
      }
      let seat;
      console.log(seatNumbers, ' <---- Seat NUMBERS')
      for (let l = 0; l < seatLetters.length; l++) {
        for (let n = 0; n < seatNumbers.length; n++) {
            seat = (`${seatLetters[l]}${seatNumbers[n]}`);
            seatOptions.push(seat)
        }
      }
      console.log(seatOptions, ' <----- seat OPTIONS');


        res.render('tickets/new', {
            tickets, 
            flight: flightDoc,
            seatLetters,
            seatNumbers,
            seatOptions
        });
    }catch(err){
      console.log(err)
      res.send('check terminal ---- **NEW** TICKET ERROR')
    }
  }


async function create(req, res) {
    try {

        // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
        // console.log(req.body, ' <--- req body in tickets ctrl')
        // console.log('------------------------------------------------');      
        // console.log(req.body.id, ' <----- req.body.id');
        // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
        // console.log(req.params, ' <---- req Params in tickets ctrl')
        // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
        // console.log(req.params.id, ' <----- req.params.id');
        // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
        
        const flightDoc = await Flight.findById(req.params.id);
        req.body.flight = flightDoc._id;
        console.log(req.body.flight, ' <======= REQ BODY FLIGHT======')
        const newTicket = await Ticket.create(req.body);
        console.log(newTicket, ' <------- NEW TICKET------')
     

    //   const ticketDoc = await Ticket.findById(req.params.id).populate("flight").exec();
    //   console.log(ticketDoc, ' <------- Ticket doc ticketsCtrl<create')

        // const ticketDoc = await Ticket.findById(req.params.id).populate("flight").exec();
        // const newTicket = await Ticket.create(req.body).populate("flight").exec();

    // const flightDoc = await Flight.findById(req.params.id);
    //     req.body.flight =  flightDoc._id;

        // const ticketDoc = await Ticket.create(req.body);
        res.redirect(`/flights/${flightDoc._id}`)


        

    // let newTicket = new Ticket(req.body);

    // newTicket.flight = flightDoc._id;
    // ticketDoc.save(function() {
    //     console.log('TICKET WAS SAVED')
    //     Ticket.findById(ticketDoc._id).populate('flight').then(function () {
    //         console.log(ticketDoc, '=============== NEW TICKET')
    //         res.redirect(`/flights/${flightDoc._id}`)
    //         })
    // })

    } catch(err) {
        console.log(err)
        res.send(' CHECK TERMINAL ---- ticket -> create ERROR')
    }
}

// async function show(req, res) {
//     try {
//         console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ SHOW')

//         // c
//         // const ticketDoc = await Ticket.findById(req.params).populate("flight").exec();
//         // console.log(ticketDoc, ' <----- ticketDoc == DOC') // NOTHING

//         res.render('flights/show', {
//             // ticket: ticketDoc, 
//         })
  
//     } catch (err) {
//       console.log(err);
//       res.send("error, check terminal");
//     }
//   }

// ======================================================================================

// async addTicket
// async function addTicket(req, res){
//     try {
//       // Find the movie that I want to add the performer too
//       const flightDoc = await Flight.findById(req.params.id); // talking to the database
  
//       // add the performer id to the flightDoc.cast array
//       flightDoc.cast.push(req.body.performerId);
  
//       await flightDoc.save(); // talking to the database
  
//       // after we save, respond to the client with the redirect
//       res.redirect(`/flights/${flightDoc._id}`)
      
//     }catch(err){
//       console.log(err)
//       res.send('check terminal ---- ADD TICKET ERROR')
//     }
//   }



// function newTicket(req, res) {
//     Flight.find({}, function(err, flightDoc){
//         // const flight3 = flightDoc.
//         console.log(flightDoc, ' <======== FLIGHTDOC')
        
//         const defaultDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
//         console.log(defaultDate, '<------------------------------------------------DEFAULT DATE')
//         const date = defaultDate.toISOString().slice(0, 16);
//         console.log(date, '===================== NEW DATE in FORMAT')
//         res.render('tickets/new', {departDefault: date, flight: flightDoc});

    

    // try {

    //     const flightDoc = await Ticket.findById(req.params.id);

    //     res.render('tickets/new');
    // } catch(err) {
    //     console.log(err);
    //     res.send('ERROR in tickets.newTicket *************')
    // }
// }
//     )}




        // let newTicket = new Ticket(req.body);
        // newTicket.save(function() {
        //     console.log('TICKET WAS SAVED')

        // })
        // Ticket.findById(newTicket._id).populate('flight').then(function () {
        //     console.log(newTicket, '=============== NEW TICKET')
        //     res.redirect(`/flights/${flightDoc._id}`)
        //   })
        // const flightDoc = await Flight.find(req.params.id);

        // res.redirect(`/flights/${flightDoc._id}`);
//}


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


