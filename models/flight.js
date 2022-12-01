const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
    arrival: { type: Date}
})



const flightSchema = new Schema({
    airline: { type: String, enum: ['American', 'Delta', 'Southwest', 'United'] },
    airport: { type: String, default: 'DEN', enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'] },
    flightNo: {type: Number, min: 10, max: 9999, required: 'Must have know flight number to submit' },
    departs: { type: Date, default: function() {
            const defaultDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
            return defaultDate.toISOString().slice(0, 16);  
    }},
    destinations:[destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);
