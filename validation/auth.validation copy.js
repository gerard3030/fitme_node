const Joi = require("joi");
const validateSchema = require("./validation")

const authValidationSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  age: Joi.number(),
  height: Joi.number(),
  weight: {
    startedWeight: Joi.number(),
    lastUpdate: { type: Date, default: Date.now },
    lastWeight: Joi.number(),
    currentDate: { type: Date, default: Date.now },
    lastWeight: Joi.number(),
  },
  BMI: {
    startedBMI: Joi.number(),
    lastUpdate: Joi.number().integer().min(1900).max(2013),
    lastBMI: Joi.number(),
    currentDate: Joi.number().integer().min(1900).max(2013),
    currentBMI: Joi.number(),
  },
  //   goal: { type: String },
  admin: Joi.boolean(),
});

// const validateAuthSchema = (userInput) =>authValidationSchema.validateAsync(userInput, {abortEarly:false});
const validateAuthSchema = (userInput)=>validateSchema(userInput,authValidationSchema)


  
module.exports = {
  validateAuthSchema,
};
