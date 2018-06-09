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
    res.render('budget/new', {
      userId: req.params.userId
    })
  })



// CREATE Route
router.post('/', (req, res) => {

  // make budget req.body
  const budget = new Budget(req.body)

  // get budget by the id
  User.findById(req.params.userId)
    .then((newBudget) => {


      // push new budget into budget
      newBudget.budget.push(budget)
console.log(userId)
      // save new budget
      return newBudget.save()
    })
    .then(() => {

      // redirect to budget page
      res.redirect(`user/${req.params.userId}/budget`)
    })
})



// router.put('/:id', (req,res)=>{
//  User
//   .findByIdAndUpdate(req.params._id,req.body, {new:true})
//   .then(()=>{
//     res.redirect(`/budget/${req.params.id}`)
//   })
// })

module.exports = router