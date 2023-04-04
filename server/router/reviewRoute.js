import express from "express";
import {
  addReview,
  updateReview,
  deleteReview,
} from "../controller/reviewController.js";
import Authenticator from "../middleware/AuthVerifier.middleware.js";
const router = express.Router();

// add a review
router.post("/add", Authenticator, addReview);
// amend a review
router.patch("/update", Authenticator, updateReview);
// @admin
// delete a review
router.delete("/delete", Authenticator, deleteReview);

export default router;
