
const Schema = require('mongoose').Schema
const finGoalsSchema = require('./finGoalsSchema')

const finGoalsSchema = new Schema({
    name: String,
    goalAmount: Number,
    currentAmount: Number,
    dueDate: Date,
    budgetBar: Number
    //will embed comments
})

module.exports = finGoalsSchema