import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import sendToken from "../utils/TokenHandler.js";
import response from "../utils/Response.js";
import jwt from "jsonwebtoken";
// sign up
export const signUp = async (req, res) => {
  const { name, email, password, age, gender, mobile } = req.body;
  if (!name || !email || !password || !age || !gender || !mobile) {
    response(res, 401, false, "all fields are required!");
  }
  try {
    const checkUser = await User.findOne({ email });

    if (checkUser) {
      response(res, 400, false, "user already exist try login");
    }
    const hashPWD = await bcrypt.hash(password, 10);
    const user = new User({
      ...req.body,
      password: hashPWD,
    });
    await user.save();
    response(res, 200, true, "user created successfully");
  } catch (error) {
    console.log(error);
  }
};
// sign in
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    response(res, 400, false, "all fields are required");
  }
  try {
    const user = await User.findOne({ email: email }).select("+password");

    if (!user) {
      response(res, 401, false, "user not exist try sign up");
    }

    const PWD = await bcrypt.compare(password, user.password);
    if (user.email === email && PWD) {
      sendToken(user, 200, res);
    } else response(res, 401, false, "email or password incorrect!");
  } catch (error) {
    console.log(error);
  }
};
// sign out
export const signOut = (req, res) => {
  res.clearcookie("accessToken", { sameSite: "none", secure: true });
  response(res, 200, true, "Logged out successfully");
};
