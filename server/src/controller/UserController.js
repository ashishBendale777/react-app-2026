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
        let result = await User.find()
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
let fetchByUserId = async (req, res) => {
    //destructuring of params ovject
    let { id } = req.params
    console.log(id)
    try {
        let result = await User.findOne({ _id: id })
        res.status(200).json({
            message: "User Found..",
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

//update user
let updateUser = async (req, res) => {
    let { _id, userMobile } = req.body
    try {
        let result = await User.updateOne({ _id }, { userMobile })
        res.status(200).json({
            message: "User Updated..",
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


//delete user
let deleteUser = async (req, res) => {
    let { id } = req.params

    try {
        let result = await User.deleteOne({ _id: id })
        res.status(200).json({
            message: "User Deleted..",
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


export {
    createUser
    , fetchAllUsers,
    fetchByUserId,
    deleteUser,
    updateUser
}