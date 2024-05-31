const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("DB connected successfully");
    console.log("HOST => ", connect.connection.host);
    console.log("NAME => ", connect.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
