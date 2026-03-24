import mongoose from "mongoose"

let UserSchema = mongoose.Schema({
    userName: String,
    userEmail: String,
    userMobile: Number,
    userRole: String
})

export const User = mongoose.model('User', UserSchema)