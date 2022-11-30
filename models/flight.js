const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: { type: String, enum: ['American', 'Delta', 'Southwest', 'United'] },
    airport: { type: String, default: 'DEN', enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'] },
    flightNo: {type: Number, min: 10, max: 9999, required: 'Must have know flight number to submit' },
    departs: {
        type: Date,
        default: function() {
            const today = new Date();
            const todayPlusOneYear =today.setFullYear(date.getFullYear() + 1);
            console.log(todayPlusOneYear, " <--------- NEW DATE=============");
            todayPlusOneYear = todayPlusOneYear.toISOString().slice(0,16)
            return todayPlusOneYear;
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);