const bcrypt = require("bcryptjs");

const {
  validateRegisterInput,
} = require("../validations/auth.validation");

const register = async (req, res) => {
  const errors = validateRegisterInput(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  const { firstName, lastName, email, password } = req.body;

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);

  res.status(201).json({
    success: true,
    message: "Validation successful",
    data: {
      firstName,
      lastName,
      email,
      hashedPassword,
    },
  });
};

module.exports = {
  register,
};