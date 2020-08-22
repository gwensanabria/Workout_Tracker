const router = require('express').Router()
const Workout = require('../models/workout')

module.exports = function(app) {

router.post('/api/workouts', (req, res) => {
Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/api/workouts', (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/api/workouts.range', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { workouts: body } },
        { $push: true, runValidators: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

}

// module.exports = router