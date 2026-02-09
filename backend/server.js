import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";

dotenv.config();

const app = express(); // ✅ FIRST create app

// middlewares
app.use(cors());
app.use(express.json());

// database
connectDB();
console.log("🔥 SERVER FILE LOADED");

// routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
