
const Schema = require('mongoose').Schema
const commentSchema = require('./budgetSchema')
const commentSchema = require('./finGoalSchema')

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    pic: Number,
    budget: [budgetSchema],
    financialGoals: [finGoalSchema] 
})

module.exports = userSchema