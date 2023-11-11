const mongoose = require("mongoose")
const { Schema } = mongoose;

const userPhysicSchema = new Schema({
  age: {type: Number},
  height: {type: Number, default:0},
  weight: {
    startedWeight: {type: Number, default:0}, 
    lastUpdate:{type: Date, default:Date.now},
    lastWeight:{type: Number, default:0},
    currentDate: {type: Date, default:Date.now},
    lastWeight:{type: Number, default:0}
},
  BMI: { 
    startedBMI:{type: Number, default:0},
    lastUpdate:{type: Date, default:Date.now},
    lastBMI:{type: Number, default:0},
    currentDate: {type: Date, default:Date.now},
    currentBMI:{type: Number, default:0}
},
goal: {type: String},
});

const UsersPhysic = mongoose.model('UsersPhysic', userPhysicSchema);

const createNewUser = (userData)=>{
  let newUser = new User(userData)
  return newUser.save()
}

const findUserByID=(id)=>User.findById(id);



module.exports = {
    createNewUser,
    findUserByID,
}

