import { Product } from "../models/ProductSchema.js";
import { Review } from "../models/ReviewShcema.js";

const createProduct = async (req, res) => {
    try {
        const { prodName, prodPrice, prodCategory, prodBrand, prodDescription } = req.body;

        const product = await Product.create({
            prodName,
            prodPrice,
            prodCategory,
            prodBrand,
            prodDescription,
            prodImage: req.file ? req.file.filename : ""
        });

        res.status(201).json({
            message: "Product created successfully.",
            data: product,
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

const fetchAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });

        res.status(200).json({
            message: "Products fetched successfully.",
            data: products,
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

const fetchProductsWithAvaragereview = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $lookup: {
                    from: Review.collection.name,
                    localField: "_id",
                    foreignField: "prodId",
                    as: "reviews"
                }
            },

            {
                $addFields: {
                    averageRating: {
                        $ifNull: [{ $avg: "$reviews.ratings" }, 0]
                    },
                    reviewCount: {
                        $size: "$reviews"
                    }
                }
            },
            
            {
                $sort: {
                    createdAt: -1
                }
            }
        ]);

        res.status(200).json({
            message: "Products with average review fetched successfully.",
            data: products,
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

export { createProduct, fetchAllProducts, fetchProductsWithAvaragereview };
