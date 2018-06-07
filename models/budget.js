const mongoose = require('mongoose')
const budgetSchema = require('../db/schemas/budgetSchema')

const Budget = mongoose.model('budget', budgetSchema)

module.exports = Budget