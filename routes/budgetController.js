const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/user')
const Budget = require('../models/budget')


router.get('/', (req, res, next) => {
    console.log('im here')
    User.findById(req.params.userId)
    .then((user) => {
      // console.log(user)
        
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
console.log('trying to create')
  // make budget req.body
  const budget = new Budget(req.body)

  // get budget by the id
  User.findById(req.params.userId)
    .then((user) => {
console.log(user)

      // push new budget into budget
      user.budget.push(budget)
console.log(budget)
      // save new budget
      return user.save()
    })
    .then(() => {

      // redirect to budget page
      res.redirect(`/users/${req.params.userId}/budget`)
    })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  console.log(req.params.userId)
  //find user by id by grabing it from the req params
  User.findById(req.params.userId)
    .then((user) => {
      //once id is obtained call it user
      user.budget.id(req.params.id).remove()
    //take user and match it with the associated budget
    //by finding the budget id which is grabbed from req params
      return user.save()
      //after info is gathered save it to user
    })
    .then(() => res.redirect(`/users/${req.params.userId}/budget`))
    //once user info is saved redirect to users budget page
    .catch(err => console.log(err))
})

// router.put('/:id', (req,res)=>{
//  User
//   .findByIdAndUpdate(req.params._id,req.body, {new:true})
//   .then(()=>{
//     res.redirect(`/budget/${req.params.id}`)
//   })
// })

module.exports = router