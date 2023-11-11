const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {type: String, required:true},
  lastName: {type: String,  required:true},
  email:{type: String, unique:true, required:true},
  password:{type: String,  required:true},
//   age: {type: Number},
//   height: {type: Number, default:0},
//   weight: {
//     startedWeight: {type: Number, default:0}, 
//     lastUpdate:{type: Date, default:Date.now},
//     lastWeight:{type: Number, default:0},
//     currentDate: {type: Date, default:Date.now},
//     lastWeight:{type: Number, default:0}
// },
//   BMI: { 
//     startedBMI:{type: Number, default:0},
//     lastUpdate:{type: Date, default:Date.now},
//     lastBMI:{type: Number, default:0},
//     currentDate: {type: Date, default:Date.now},
//     currentBMI:{type: Number, default:0}
// },
// goal: {type: String},
admin:{type:Boolean, default:false}
});

const User = mongoose.model('Users', userSchema);

const createNewUser = (userData)=>{
  let newUser = new User(userData)
  return newUser.save()
}

const findUserByID=(id)=>User.findById(id);

const findUserByEmail = (email)=>User.findOne({email});



module.exports = {
    User,
    createNewUser,
    findUserByID,
    findUserByEmail
}

