const User = require("../models/user");
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(200).json({ success: false, message: "Invalid Email" });
    }

    const isMatch = await User.comparePasswords(password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid password" });
    }
    res.json({ success: true, message: "Successful Login",username:user.name });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
