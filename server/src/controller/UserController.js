import { User } from "../models/UserSchema.js"

///create user
let createUser = async (req, res) => {
    let body = req.body
    console.log(body)
    try {
        let result = await User.create(body)
        res.status(200).json({
            message: "User Create Successfully.",
            data: result,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
            success: false
        })
    }
}

//find all users
let fetchAllUsers = async (req, res) => {

    try {
        let result  = await User.find()
        res.status(200).json({
            message: "User Fetched Successfully.",
            data: result,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
            success: false
        })
    }
}


//find user by ID
let fetchByUserId = (req, res) => { }


//update user
let updateUser = (req, res) => { }


//delete user
let deleteUser = (req, res) => { }


export {
    createUser
    , fetchAllUsers,
    fetchByUserId,
    deleteUser,
    updateUser
}