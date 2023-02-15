import mongoose from "mongoose";

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
  },
  { timestamp: true }
);

const user = mongoose.model("User", userSchema);
export default user;
