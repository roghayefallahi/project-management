const mongoose = require("mongoose");
const TeamSchema = new mongoose.Schema(
  {
    name: { type: string, required:true},
    description: { type: string },
    users: { type: [mongoose.Types.ObjectId] , default:[] },
    owner: { type: mongoose.Types.ObjectId , required:true},
  },
  {
    timestamps: true,
  }
);

const TeamModel = mongoose.model("team", TeamSchema);
module.exports = {
    TeamModel,
};
