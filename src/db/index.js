import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DBHOST : ${connectionInstance.connection.host}`)
    }
    catch (err) {
        console.log("MONGODB connection failed : ", err)
        process.exit();
    }
}

export default connectDB;