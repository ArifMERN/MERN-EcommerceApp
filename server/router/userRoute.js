import express from "express";
import {
  deleteUser,
  updateUser,
  changePassword,
} from "../controller/userController.js";
import Authenticator from "../middleware/AuthVerifier.middleware.js";
const router = express.Router();
router.get("/", Authenticator, (req, res) => {
  res.send("hi");
});

// delete a user
router.delete("/:id", Authenticator, deleteUser);
// update the details of user
router.patch("/:id", Authenticator, updateUser);

// Password handling
// change password
router.patch("/changePassword/:id", Authenticator, changePassword);
export default router;
