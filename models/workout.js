const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercise: 
    [{ type: String, name: String, duration: Number, weight: Number, Reps: Number, Sets: Number }],
  day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;