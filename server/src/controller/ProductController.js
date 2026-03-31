import { Product } from "../models/ProductSchema.js";

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

export { createProduct, fetchAllProducts };
