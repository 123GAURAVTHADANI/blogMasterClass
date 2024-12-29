const { Schema, default: mongoose } = require("mongoose");
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Kindly Input the first Name"],
    },
    lastName: {
      type: String,
      required: [true, "Kindly Input the second Name"],
    },
    email: {
      type: String,
      required: [true, "Kindly Input the email address"],
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    blog: [{ type: Schema.Types.ObjectId, ref: "Article" }],
    roles: {
      type: String,
      enum: ["SUPER ADMIN", "ADMIN", "USER"],
      default: "ADMIN",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = { User };
