import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import dotenv from 'dotenv' 
dotenv.config();


const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`)
        console.log(`\n\n\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("db/index.js connection failed: ", error)
        process.exit(1)
    }
}

export default connectDB;