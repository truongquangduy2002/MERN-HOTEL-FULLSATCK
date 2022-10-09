import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
// import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
dotenv.config();

//MMqkBRNGT9cAhYiP

mongoose.connect("mongodb+srv://adminhotels:MMqkBRNGT9cAhYiP@cluster0.szb3din.mongodb.net/hotel?retryWrites=true&w=majority", () => {
    console.log("Connected to MongoDB server.");
});

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(express.json());

app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

const port = 8000;

app.listen(port, () => {
    console.log(`Serveer running on port ${port}`);
});