import express from "express"
import { fetchOrdersByUserId } from "../controller/OrderController"

let router = express.Router()

router.get("fetchOrdersByUserId/:userId", fetchOrdersByUserId)

export const orderRoutes = router