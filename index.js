import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./api/routes/auth.js";
import hotelsRoute from "./api/routes/hotels.js";
import usersRoute from "./api/routes/users.js";
import roomsRoute from "./api/routes/rooms.js";
const port = process.env.port || 5000
dotenv.config({path: './config.env'})


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(
    process.env.MONGO,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to db")
  );
  
//Middleware
app.get("/", (req, res) => {
  res.status(200).json({message: "welcome to Api"})
})

 


app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);



app.listen(port, () => {
  console.log(`running on http://localhost:${port}.`);
  });