const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()


//determine the environment
const isProduction = process.env.NODE_ENV === "production"

// set the connection string based on environment
const uri = isProduction
    ? process.env.DB_CONNECTION
    : process.env.LOCAL_DB_CONNECTION

const mongoConnection = uri

mongoose.set("strictQuery", true)

