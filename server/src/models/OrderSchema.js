import mongoose from "mongoose";

let OrderSchema = mongoose.Schema({
    orderAmount: { type: Number, requred: true },
    oderDate: { type: Date, default: Date.now },
    orderStatus: {
        type: String,
        enum: ["Pending", "Approve", "Intransit", "Delivered", "Cancel"],
        default: "Pending"
    },
    paymentType: { type: String, default: "COD" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ordersItems: [
        {
            prodId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            Qty: Number
        }
    ]
})

export const Order = mongoose.model("Order", OrderSchema)