
const Schema = require('mongoose').Schema

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    pic: Number,
    //will embed budget and fin goals 
})

module.exports = userSchema