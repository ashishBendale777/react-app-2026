import express from "express"

//create server
const Server = express()

Server.get("/", (req, res) => {
    res.send("Hello Fron Server")
})

Server.listen(5000, () => {
    console.log("Server Started...")
})