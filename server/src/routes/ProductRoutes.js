import express from "express";
import { createProduct, fetchAllProducts } from "../controller/ProductController.js";
import upload from "../middleware/uploadProductImage.js";

const router = express.Router();

router.get("/fetchproducts", fetchAllProducts);
router.post("/createproduct", upload.single("prodImage"), createProduct);

export const productRoutes = router;
