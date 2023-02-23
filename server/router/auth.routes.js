import { signIn, signOut, signUp } from "../controller/authController.js";
import express from "express";
const router = express.Router();
// create a user /sing up user
router.post("/signup", signUp);
// singin the user
router.post("/signin", signIn);
// signout user
router.post("/signout", signOut);
export default router;
