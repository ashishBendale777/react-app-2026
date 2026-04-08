import { Order } from "../models/OrderSchema";

let fetchOrdersByUserId = async (req, res) => {

    let { userId } = req.params
    try {
        let result = await Order.find({
            userId
        })
    } catch (error) {

    }
}

export { fetchOrdersByUserId }