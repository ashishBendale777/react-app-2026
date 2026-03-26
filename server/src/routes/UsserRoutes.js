import express from "express"
import { createUser, deleteUser, fetchAllUsers, fetchByUserId, updateUser } from "../controller/UserController.js"

let router  = express.Router()

router.get("/fetchusers",fetchAllUsers)
router.get("/fetchusers/:id",fetchByUserId)
router.post("/createuser",createUser)
router.put("/updateuser",updateUser)
router.delete("/deleteuser/:id",deleteUser)

export const userRoutes = router