const mongoose = require('mongoose')
const finGoalsSchema = require('../db/schemas/finGoalsSchema')

const finGoals = mongoose.model('finGoals', finGoalsSchema)

module.exports = finGoals