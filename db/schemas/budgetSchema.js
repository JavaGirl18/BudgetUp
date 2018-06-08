
const Schema = require('mongoose').Schema

const budgetSchema = new Schema({
    budgetName:{
        name: String,
    },
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