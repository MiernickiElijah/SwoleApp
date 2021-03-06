const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: 
    [{ type: {type: String, trim : true},
      name: {type: String, trim: true}, 
      duration: {type: Number}, 
      weight: {type: Number},
      reps: {type: Number},
      sets: {type: Number}, 
      distance: {type: Number} }],
  day: {
    type: Date,
    default: () => new Date(),
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;