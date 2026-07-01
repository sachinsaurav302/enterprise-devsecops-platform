const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  res.status(201).json({
    success: true,
    message: "User registration API created successfully",
    data: {
      firstName,
      lastName,
      email,
    },
  });
};

module.exports = {
  register,
};