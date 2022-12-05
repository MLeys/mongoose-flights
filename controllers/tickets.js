
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket,
    delete: deleteTicket
};

async function deleteTicket(req, res) {
    try {
        const ticketDoc = await Ticket.findByIdAndDelete(req.params.id).exec();

        res.redirect(`/flights/${ticketDoc.flight}`)
    } catch(err) {
        console.log(err);
        res.send(' <=== TERMINAL ERROR ====== Check ticketCtrl - del')
    }
}

async function newTicket(req, res){
    try {
        const flightDoc = await Flight.findById(req.params.id);
        const tickets = await Ticket.find({}).exec();

      const seatLetters = ['A', 'B', 'C', 'D', 'E', 'F']
      const seatNumbers = [];
      const seatOptions = [];
      for (let i = 1; i <=99 ; i++) {
        seatNumbers.push(i);
      }
      let seat;
      for (let l = 0; l < seatLetters.length; l++) {
        for (let n = 0; n < seatNumbers.length; n++) {
            seat = (`${seatLetters[l]}${seatNumbers[n]}`);
            seatOptions.push(seat)
        }
      }
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
        const flightDoc = await Flight.findById(req.params.id);
        req.body.flight = flightDoc._id;
        const newTicket = await Ticket.create(req.body);
     
        res.redirect(`/flights/${flightDoc._id}`)
    } catch(err) {
        console.log(err)
        res.send(' CHECK TERMINAL ---- ticket -> create ERROR')
    }
}

