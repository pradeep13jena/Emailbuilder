// Importing packages
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Importng routes
import { template } from "./Routes/template.router.js";

// Accessing packages
dotenv.config();
const PORT = 5000;
const app = express();

// Setting up middlewares
app.use(express.json());
app.set("view engine", "ejs");
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static('node_modules'));

// Setting up mongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);
mongoose.connection.on("connected", () => console.log("Database connected"));
mongoose.connection.on("error", (err) =>
  console.error("Database connection error:", err)
);

// Initializing server
app.listen(PORT, () => {
  console.log("Backend, up and running");
});

// Accessing routes
template(app);
