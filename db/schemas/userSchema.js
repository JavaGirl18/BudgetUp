
const Schema = require('mongoose').Schema
const commentSchema = require('./commentSchema')
const finGoalsSchema = require('./finGoalsSchema')
const budgetSchema = require('./budgetSchema')

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    pic: String,
    budget: [budgetSchema],
    financialGoals: [finGoalsSchema] 
})

module.exports = userSchema