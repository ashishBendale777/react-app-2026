import express from "express"
import connectToDb from "./src/config/dbconfig.js"
import { userRoutes } from "./src/routes/UsserRoutes.js"

//create server
const Server = express()

Server.get("/", (req, res) => {
    res.send("Hello Fron Server")
})

connectToDb()

Server.use("/api",userRoutes)

Server.listen(5000, () => {
    console.log("Server Started...")
})