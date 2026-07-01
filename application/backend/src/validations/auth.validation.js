const validator = require("validator");

const validateRegisterInput = (data) => {
  const errors = [];

  // First Name
  if (!data.firstName || validator.isEmpty(data.firstName.trim())) {
    errors.push("First name is required.");
  }

  // Last Name
  if (!data.lastName || validator.isEmpty(data.lastName.trim())) {
    errors.push("Last name is required.");
  }

  // Email
  if (!data.email || !validator.isEmail(data.email)) {
    errors.push("Please provide a valid email address.");
  }

  // Password
  if (!data.password || data.password.length < 8) {
    errors.push("Password must be at least 8 characters.");
  }

  return errors;
};

module.exports = {
  validateRegisterInput,
};