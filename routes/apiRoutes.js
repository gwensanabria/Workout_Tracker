const router = require("express").Router();
const Workout = require("../models/workout");
// const { Mongoose } = require("mongoose");


    // Post a workout
    router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Get all workouts
  router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //Set a 1 week limit
  router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({'day': 1}).limit(7)
      .then(dbWorkout => {
        //   console.log(dbWorkout)
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //Update a workout
  router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
  });

//   TRING TO SOLVE CORS ISSUE
// router.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*')
//     res.header("Access-Control-Allow-Origin", 'Origin, X-Requested-With, Content-Type, Accept')
//     next()
// })


module.exports = router;
