const  { Schema } = require('mongoose')

const Game = new Schema(
    {
        title: { type: String, required: true },
        esrb: { type: String, required: true },
        genre: [{
            type: String
        }],
        released: { type: Date, required: true },
        systems: [{
            type: String
        }],
        avg_rating: [{ 
            type: Number 
        }],
        libraries_added: { type: Number, required: true },
        est_play_time_hrs: { type: Number },
        approved: { type: Boolean, required: true }
    },
    { timestamps: true },
)

module.exports = Game