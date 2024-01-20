const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    role: {
      type: String,
      enum: ["admin", "user", "super_admin"],
      default: "user",
    },
  },
  {
    versionKey: false,
  }
);
const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
};
