import mongoose from "mongoose";

const connectDB = async () => {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/curd")
    if (connect) {
        console.log("Connection Successfull....")
    } else {
        console.log("Connection failed....")
    }
}

export default connectDB;