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
    hashedPassword = await bcrypt.hash(password, 5);
    const user = new User.model({
      email,
      name,
      rank,
      password: hashedPassword,
    });
    return await user.save()
  };

  static findByEmail=async (email)=>{
    return await User.model.findOne({email});
  }
 
  static comparePasswords= async(entered,stored)=>{
    return await bcrypt.compare(entered,stored)
  }
};
