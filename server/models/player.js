const mongoose = require("mongoose");
module.exports = class Player {
  static schema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Active", "Suspended"],
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
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
                "fieldGoal",
                "pcGoal",
                "psGoal",
                "psMissed",
                "greenCard",
                "yellowCard",
                "redCard",
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
          },
        ],
      },
    ],
  });

  static model = mongoose.model("player", this.schema);

  static createPlayer = async (name, dob, team, status) => {
    const player = new Player.model({ name, dob, team, status });
    return await player.save();
  };
};
