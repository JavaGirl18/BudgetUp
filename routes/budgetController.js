const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/user')
const Budget = require('../models/budget')


router.get('/', (req, res, next) => {
    console.log('im here')
    User.findById(req.params.userId)
    .then((user) => {
        console.log(user)
      res.render('budget/index', 
      { user: user,
        budget: user.budget
     })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
    res.render('budget/new')
  })

module.exports = router