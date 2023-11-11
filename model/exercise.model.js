const mongoose = require("mongoose")
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  muscleGroup:[String],
  exercise:Number,
  instructions:String,
  img:String,
  video:String,
});

const exercise = mongoose.model('Exercises', exerciseSchema);


module.exports = exercise

