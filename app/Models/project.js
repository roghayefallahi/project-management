const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    title: { type: string},
    text: { type: string },
    owner: { type: string , default: "/defaults/default.jpg"},
    owner: { type: mongoose.Types.ObjectId , required:true},
    team: { type: mongoose.Types.ObjectId, required:true },
    private: { type: Boolean , default: true},
   
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.model("project", projectSchema);
module.exports = {
    ProjectModel,
};
