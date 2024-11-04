const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

module.exports = class User {
  static schema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: String,
    rank: String,
    password: { type: String, required: true },
  });

  static model = mongoose.model("user", this.schema);

  static createUser = async (email, name, rank, password) => {
    const hashedPassword = await bcrypt.hash(password, 5);
    const emailExists = await User.findByEmail(email);
    if (emailExists) {
      return null;
    } else {
      const user = new User.model({
        email,
        name,
        rank,
        password: hashedPassword,
      });
      return await user.save();
    }
  };

  static findByEmail = async (email) => {
    return await User.model.findOne({ email });
  };

  static comparePasswords = async (entered, stored) => {
    return await bcrypt.compare(entered, stored);
  };

  static editPassword = async (userID, oldPassword, newPassword) => {
    try {
      const user = await User.model.findById(userID);
      if (!user) {
        return { success: false, message: "UserNotFound" };
      }
      const a = await User.comparePasswords(oldPassword, user.password);
      if (!a) {
        return { success: false, message: "Wrong Password!" };
      }
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 5);
      user.password = hashedPassword;
      const updatedUser = user.save();
      if (updatedUser) return { success: true, message: "Successful" };
    } catch (error) {
      console.error("Error updating password:", error);
      throw error;
    }
  };
};
