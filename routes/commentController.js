const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/user')
const FinGoals = require('../models/finGoals')
const Comment = require('../models/comment')



router.get('/new', (req, res, next) => {
   
      res.render('comment/new',{
    userId: req.params.userId,
    finGoalsId:req.params.finGoalsId
      })
})



// CREATE Route
router.post('/', (req, res) => {
   const userId = req.params.userId
   const finGoalId = req.params.finGoalsId
      const comment = new Comment(req.body)
      User.findById(userId)
        .then((user) => {
          user.financialGoals.id(finGoalId).comment.push(comment)
          return user.save()
  
        })
        .then(() => {
    
          // redirect to goals page
          res.redirect(`/users/${req.params.userId}/finGoals`)
        })
    })



module.exports = router
