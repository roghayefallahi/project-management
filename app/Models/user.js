const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    first_name: { type: String},
    last_name: { type: String },
    username: { type: String , required:true , unique:true},
    mobile: { type: String, required:true , unique:true },
    email: { type: String ,  required:true , unique:true},
    skills: { type: [String], default:[] },
    password: { type: String,  required:true},
    roles: { type: [String], default: ["USER"] },
    teams: { type: [mongoose.Types.ObjectId] , default:[]},
    token: {type: String, default: ""}
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = {
    UserModel
};
