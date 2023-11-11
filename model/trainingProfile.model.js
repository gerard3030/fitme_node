const mongoose = require("mongoose")
const { Schema } = mongoose;

const trainingSchema = new Schema({ 
  userID: String,

  ex: [{ 
    exID:String,
    setNumber:Number,
    repNumber: Number,
    prevW:Number,
    currentW:Number,
  }],
});

const Traning = mongoose.model('Training', trainingSchema);

const createNewTrain = (userData)=>{
    let newTrain = new Traning(userData)
    return newTrain.save()
}


module.exports = {
  Traning,
  createNewTrain
}

