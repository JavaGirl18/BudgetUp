
const Schema = require('mongoose').Schema

const commentSchema = new Schema({
  body: String,
  submittedOn: new Date
})

module.exports = commentSchema