import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import authRoute from "./api/routes/auth.js";
import hotelsRoute from "./api/routes/hotels.js";
import usersRoute from "./api/routes/users.js";
import roomsRoute from "./api/routes/rooms.js";



const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(
    process.env.MONGO,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (c) => console.log("Connected to db")
  );
  
//Middleware


app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);



app.listen(8800, () => {
    console.log("Connected to backend.");
  });