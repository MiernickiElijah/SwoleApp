const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: 
    [{ type: String, name: String, duration: Number, weight: Number, reps: Number, sets: Number, distance: Number }],
  day: {
    type: Date,
    default: () => new Date(),
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;