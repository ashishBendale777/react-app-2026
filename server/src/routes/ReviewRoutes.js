import express from "express";
import { postReview } from "../controller/ReviewController.js";

const router = express.Router();

router.post("/postreview", postReview);

export const reviewRoutes = router;
