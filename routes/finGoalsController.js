const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/user')
const Budget = require('../models/budget')
const FinGoals = require('../models/finGoals')
const Comment = require('../models/comment')


router.get('/', (req, res, next) => {
    // console.log('im here')
    User.findById(req.params.userId)
    .then((user) => {
       
      res.render('finGoals/index', 
      { user: user,
        financialGoals: user.financialGoals
     })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
    res.render('finGoals/new', {
      userId: req.params.userId
    })
  })



// CREATE Route
router.post('/', (req, res) => {
console.log('trying to create')
  // make goals req.body
  const financialGoals = new FinGoals(req.body)
console.log(financialGoals)
  // get goals by the id
  User.findById(req.params.userId)
    .then((user) => {
        console.log(user)
       
      // push new goal
      user.financialGoals.push(financialGoals)
      // save new goal
      return user.save()
    //   console.log(user)
    })
    .then(() => {

      // redirect to goals page
      res.redirect(`/users/${req.params.userId}/finGoals`)
    })
})





// EDIT Route
router.get('/:id/edit', (req, res) => {
  User
    .findById(req.params.userId)
    .then((showUser) => {
      const userId = req.params.userId
      const id = req.params.id
      const finGoal = showUser.financialGoals.id(id)
      res.render('finGoals/edit', { userId, id, finGoal })
    })
})


// update
router.put('/:id', (req, res) => {
  console.log(req.params.userId)

  User.findById(req.params.userId)
    .then((user) => {
     
     const finGoal= user.financialGoals.id(req.params.id)
    finGoal.name=req.body.name
    finGoal.goalAmount=req.body.goalAmount
    finGoal.currentAmount=req.body.currentAmount
    finGoal.dueDate=req.body.dueDate
      return user.save()
    })
    .then(() => res.redirect(`/users/${req.params.userId}/finGoals`))
    .catch(err => console.log(err))
})



// DELETE Route
router.delete('/:id', (req, res) => {
  console.log(req.params.userId)
  //find user by id by grabing it from the req params
  User.findById(req.params.userId)
    .then((user) => {
      //once id is obtained call it user
      user.financialGoals.id(req.params.id).remove()
    //take user and match it with the associated goal
    //by finding the goal id which is grabbed from req params
      return user.save()
      //after info is gathered save it to user
    })
    .then(() => res.redirect(`/users/${req.params.userId}/finGoals`))
    //once user info is saved redirect to users finGoals page
    .catch(err => console.log(err))
})




module.exports = router
