const { default: mongoose } = require("mongoose");
const User = require("./user");

module.exports = class Team {
  static schema = new mongoose.Schema({
    name: String,
    manager: {
      name: String,
      id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    badge: {data:Buffer,contentType:String},
    players:[{type:mongoose.Schema.Types.ObjectId,ref:"Player"}]
  });

  static model = mongoose.model("team", this.schema);

  static createTeam = async (name, manager, email, badge) => {
    const user = await User.createUser(email, manager, "Team Manager", "1234");
  };
};
