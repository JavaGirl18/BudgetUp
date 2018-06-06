
const Schema = require('mongoose').Schema

const finGoalSchema = new Schema({
    name: String,
    goalAmount: Number,
    currentAmount: Number,
    dueDate: Date,
    budgetBar: Number
    //will embed comments
})

module.exports = finGoalSchema