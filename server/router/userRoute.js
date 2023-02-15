import express from "express";
import { signIn, signOut, signUp } from "../controller/authController.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("hi");
});
// create a user /sing up user
router.post("/signup", signUp);
// singin the user
router.post("/signin", signIn);
// delete a user
router.post("/signout", signOut);
// update the details of user

export default router;
