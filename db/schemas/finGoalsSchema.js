
const Schema = require('mongoose').Schema
const commentSchema = require('./commentSchema')

const finGoalsSchema = new Schema({
    name: String,
    goalAmount: Number,
    currentAmount: Number,
    dueDate: Date,
    budgetBar: Number,
    comment: [commentSchema]
})

module.exports = finGoalsSchema