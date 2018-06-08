
const express = require('express')
const router = express.Router()
const User = require('../models/user')

//user
router.get('/', (req, res, next) => {
    User
    .find()
    .then((users) => {
      res.render('users/index', { users: users })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('users/new')
})


// CREATE Route
router.post('/', (req, res) => {
  const newUser = req.body
  User
    .create(newUser)
    .then(() => {
      res.redirect('users/')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  User
    .findById(req.params.id)
    .then((showUser) => {
      res.render('users/show', {showUser})
    })
})

// // EDIT Route
// router.get('/:id/edit', (req, res) => {
//   Homework
//     .findById(req.params.id)
//     .then((banana) => {
//       res.render('homework/edit', { homeworkAssignment: banana })
//     })
// })

// // UPDATE Route
// router.put('/:id', (req, res) => {
//   Homework.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
//     res.redirect(`/homework/${req.params.id}`)
//   })
// })

// // DELETE Route
// router.delete('/:id', (req, res) => {
//   Homework.findByIdAndRemove(req.params.id)
//     .then(() => {
//       console.log('Successfully Delete ')
//       res.redirect('/homework')
//     })
// })

module.exports = router