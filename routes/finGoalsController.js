const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/user')
const Budget = require('../models/budget')
const FinGoals = require('../models/finGoals')


router.get('/', (req, res, next) => {
    console.log('im here')
    User.findById(req.params.userId)
    .then((user) => {
       
      res.render('finGoals/index', 
      { user: user,
        fingoals: user.finGoals
     })
    })
    .catch((err) => res.send(err))

})

module.exports = router