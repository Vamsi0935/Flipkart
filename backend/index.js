import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "../backend/routes/user.route.js";

dotenv.config();
const app = express();

mongoose
  .connect(
    "mongodb+srv://dvkrishna142000:c4fPPNYqxoNzg7bz@cluster0.xvftr3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", userRoutes);

app.listen(5000, () => console.log("Server is running...."));
