import mongoose from "mongoose"

//connection  string
let BASE_URL = "mongodb://localhost:27017/sample-db-26"

let connectToDb = async () => {
    try {
        let conn = await mongoose.connect(BASE_URL)
        console.log(`Connected To :${conn.connection.name}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb