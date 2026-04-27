import express from "express";
import {
    createProduct,
    fetchAllProducts,
    fetchProductsWithAvaragereview
} from "../controller/ProductController.js";
import upload from "../middleware/uploadProductImage.js";

const router = express.Router();

router.get("/fetchproducts", fetchAllProducts);
router.get("/fetchproductswithavaragereview", fetchProductsWithAvaragereview);
router.post("/createproduct", upload.single("prodImage"), createProduct);

export const productRoutes = router;
