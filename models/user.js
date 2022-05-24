const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserShema = new Schema(
  {
    name: { type: String, require: true },
    lastname: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserShema);
