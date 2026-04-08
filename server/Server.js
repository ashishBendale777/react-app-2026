import express from "express"
import connectToDb from "./src/config/dbconfig.js"
import { userRoutes } from "./src/routes/UsserRoutes.js"
import { productRoutes } from "./src/routes/ProductRoutes.js"
import { authRoutes } from "./src/routes/AuthRoutes.js"
import bodyParser from "body-parser"

//create server
const Server = express()

Server.use(bodyParser.json())
Server.use("/uploads", express.static("uploads"))

Server.get("/", (req, res) => {
    res.send("Hello Fron Server")
})

connectToDb()

Server.use("/api",userRoutes)
Server.use("/api",productRoutes)
Server.use("/api/auth",authRoutes)

Server.listen(5000, () => {
    console.log("Server Started...")
})
