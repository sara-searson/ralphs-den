const { type } = require('express/lib/response')
const  { Schema } = require('mongoose')

const Entry = new Schema(
    {
        game: { type: Schema.Types.ObjectId, ref: 'game_id', required: true },
        library: { type: Schema.Types.ObjectId, ref: 'library_id', required: true},
        owned: { type: Boolean, required: true },
        played: { type: String, required: true },
        play_time_hrs: { type: Number },
        star_rating: { type: Number, min: 1, max: 5},
        review: { type: String }
    },
    { timestamps: true },
)

module.exports = Entry