const Joi = require('joi');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });
    if (error) {
      return res.status(400).json({
        errors: error.details.map(err => ({
          message: err.message,
          path: err.path
        }))
      });
    }
    next();
  };
}

module.exports = validatorHandler;