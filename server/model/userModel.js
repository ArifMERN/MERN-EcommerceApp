import mongoose from "mongoose";
import jwt from "jsonwebtoken";

// schema for users of ecommerce application.

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide the user name"],
    },
    email: {
      type: String,
      required: [true, "please provide the user email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please provide the password"],
      max: 8,
      select: false,
    },
    age: {
      type: Number,

      required: [true, "please provide  age"],
    },
    gender: {
      type: String,
      required: [true, "please provide gender"],
    },
    mobile: {
      type: Number,
      required: [true, "please provide mobile number"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true }
);
userSchema.methods.getJWT = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};
const User = mongoose.model("User", userSchema);
export default User;
