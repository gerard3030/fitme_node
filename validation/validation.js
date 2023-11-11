const errorHandler = require ("../helpFunctions/errorHandler")

const validateSchema = (userInput, schema) =>
  new Promise((resolve, reject) => {
    schema
      .validateAsync(userInput, { abortEarly: false })
      .then((validatedValue) => {
        resolve(validatedValue);
      })
      .catch((err) => {
        // let origin = "Joi validation error";
        // let filed = err.details[0].path[0];
        let details = err.details.map((error) =>
          error.message.replaceAll('"', "")
        );
        // reject({sourceError:"DB Error",details});
        reject(new errorHandler("Joi Validation Error", details));
      });
  });

module.exports = validateSchema;
