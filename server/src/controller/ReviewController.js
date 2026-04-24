import { Review } from "../models/ReviewShcema.js";

const postReview = async (req, res) => {
    try {
        const { userId, prodId, ratings, comment } = req.body;

        if (!userId || !prodId || !ratings || !comment?.trim()) {
            return res.status(400).json({
                message: "userId, prodId, ratings and comment are required.",
                data: null,
                success: false
            });
        }

        const review = await Review.create({
            userId,
            prodId,
            ratings,
            comment: comment.trim()
        });

        res.status(201).json({
            message: "Review posted successfully.",
            data: review,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
            success: false
        });
    }
};

export { postReview };
