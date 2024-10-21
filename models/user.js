const  { Schema } = require('mongoose')

const User = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        rating_preference: { type: String }
    },
    { timestamps: true },
)

module.exports = User