
const Schema = require('mongoose').Schema
const commentSchema = require('./budgetSchema')
const commentSchema = require('./finGoalsSchema')

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    pic: Number,
    budget: [budgetSchema],
    financialGoals: [finGoalsSchema] 
})

module.exports = userSchema