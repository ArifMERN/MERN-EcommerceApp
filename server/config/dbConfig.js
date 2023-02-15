import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(process.env.DATABASE, () => {
    console.log("connect to DB");
  });
};

export default connectDB;
