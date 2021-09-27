const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
        day: {
            type: Date, 
            default: Date.now,
        },
        exercises: [
            {
            type: {
            type: String,
            trim: true,
            required: "Please enter the type of exercise you would like to submit!"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter in the name of the exercise!"
            },
            weight: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            duration: {
                type: Number,
                trim: true,
                required: "please input a duration length"
            }        
        },
        ]

})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout; 
