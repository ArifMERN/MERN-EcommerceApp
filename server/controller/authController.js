import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
// sign up
export const signUp = async (req, res) => {
  const { name, email, password, age, gender, mobile } = req.body;
  if (!name || !email || !password || !age || !gender || !mobile) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  try {
    const checkUser = await User.findOne({ email });
    // console.log(checkUser?.name);
    if (checkUser) {
      return res
        .status(400)
        .json({ success: false, message: "user already exist try login" });
    }
    const hashPWD = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashPWD,
      age,
      gender,
      mobile,
    });
    const response = await user.save();
    res.status(200).json({
      success: true,
      message: `User created successfully ${response.name}`,
    });
  } catch (error) {
    console.log(error);
  }
};
// sign in
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "all fields are required" });
  }
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "email or password are invalid" });
    }

    const PWD = await bcrypt.compare(password, user.password);
    if (user.email === email && PWD) {
      jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: "3h" },
        (err, token) => {
          if (err) {
            res.status(400).json(err);
          } else {
            res.status(200).json({
              success: true,
              Token: token,
              name: user.name,
            });
          }
        }
      );
    } else
      return res
        .status(401)
        .json({ success: false, message: "email or password incorrect" });
  } catch (error) {
    console.log(error);
  }
};
// sign out
export const signOut = (req, res) => {
  const { name } = req.body;
};
