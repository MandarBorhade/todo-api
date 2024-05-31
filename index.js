const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("./config/dbConnection");
require("dotenv").config();

const app = express();
app.use(express.json());

// check DB connection
connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`App is running on port" ${process.env.PORT}`);
  });
});

// Routes
app.use("/api/tasks", taskRoutes);
