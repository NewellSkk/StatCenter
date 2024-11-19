const { default: mongoose } = require("mongoose");
const User = require("./user");
const Player = require("./player");

module.exports = class Team {
  static schema = new mongoose.Schema({
    name: String,
    manager: {
      name: String,
      id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    badgeUrl: String,
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
    stats: [
      {
        matchId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Match",
          required: true,
        },
        events: [
          {
            type: {
              type: String,
              enum: [
                "goal",
                "penaltyCornerConverted",
                "penaltyCornerMissed",
                "penaltyStrokeConverted",
                "penaltyStrokeMissed",
                "circlePenetration",
              ],
              required: true,
            },
            quarter: {
              type: Number,
              required: true,
            },
            time: {
              type: String, // Format as needed, e.g., "10:45" for 10 minutes and 45 seconds
              required: true,
            },
            player: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Player",
            },
          },
        ],
      },
    ],
  });

  static model = mongoose.model("team", this.schema);

  static createTeam = async (name, manager, email, badgeUrl) => {
    const user = await User.createUser(email, manager, "Team Manager", "1234");
    if (user) {
      const team = new Team.model({ name, badgeUrl, manager: user._id });
      return await team.save();
    }
  };

  static addPlayer = async(name,dob,team)=>{
    return await Player.createPlayer(name,dob,team,'pending')
  }
  
};
