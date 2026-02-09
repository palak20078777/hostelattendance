import express from "express";
import { login } from "../controllers/authController.js";

console.log("🔥 AUTH ROUTES FILE LOADED");

const router = express.Router();

router.post("/login", login);

export default router;
