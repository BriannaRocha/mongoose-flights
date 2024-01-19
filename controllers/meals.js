import { Performer } from "../models/performer.js"

function newPerformer(req, res) {
  Performer.find({}).sort('name')
  .then(performers => {
    res.render('performers/new', {
      performers: performers,
      title: 'Add Performer'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function create(req, res) {
  Performer.create(req.body)
  .then(performer => {
    res.redirect('/performers/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/performers/new')
  })
}

export {
  newPerformer as new,
  create
}