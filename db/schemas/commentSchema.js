
const Schema = require('mongoose').Schema

const commentSchema = new Schema({
    body: String,
    date: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    }
})

module.exports = commentSchema