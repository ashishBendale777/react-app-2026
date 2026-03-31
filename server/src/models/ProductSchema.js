import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        prodName: {
            type: String,
            required: true
        },
        prodPrice: {
            type: Number,
            required: true
        },
        prodCategory: {
            type: String,
            required: true
        },
        prodBrand: {
            type: String,
            required: true
        },
        prodDescription: {
            type: String,
            required: true
        },
        prodImage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model("Product", productSchema);
