import mongoose from "mongoose";

let ReviewSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reviewDate: { type: Date, default: Date.now },
    prodId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    ratings: { type: Number, required: true },
    comment: { type: String, required: true }
})