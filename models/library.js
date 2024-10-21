const  { Schema } = require('mongoose')

const Library = new Schema(
    {
        name: { type: String, required: true },
        owner: { type: Schema.Types.ObjectId, ref: 'user_id', required: true},
        total_games: { type: Number, required: true}
    },
    { timestamps: true },
)

module.exports = Library