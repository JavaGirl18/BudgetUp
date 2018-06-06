
const Schema = require('mongoose').Schema

const budgetSchema = new Schema({
    expenses: {
        name: String,
        amount: Number
    },
    income: {
        type: String,
        amount: Number
        //misc?
    }
})

module.exports = budgetSchema