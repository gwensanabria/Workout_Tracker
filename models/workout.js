const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter the type of workout."
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the name of the workout."
            },
            duration: {
                type: Number,
                required: "Enter workout duration in minutes."
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            weight: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
})

workoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.duration
    }, 0)
})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout