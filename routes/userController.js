
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

// EDIT Route
router.get('/:id/edit', (req, res) => {
  User
    .findById(req.params.id)
    .then((showUser) => {
      res.render('users/edit', { showUser })
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/users/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Deleted User Profile ')
      res.redirect('/users')
    })
})

module.exports = router