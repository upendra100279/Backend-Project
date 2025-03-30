
// Method 1
import mongoose  from "mongoose";
import {DB_NAME} from "./constants.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

import connectDB from "./db/index.js";

connectDB();


//This connectDB function has been defined and declared in a folder called
// src/db and only thoing we are doing is importing the function




/*

// Method 2
import mongoose  from "mongoose";
import {DB_NAME} from "./constants.js";

import express from "express";
const app=express()

( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error"
            , (error)=>{
            console.log("ERROR: ",error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.log("ERRor: ",error)
        throw err
    }
})()

*/
