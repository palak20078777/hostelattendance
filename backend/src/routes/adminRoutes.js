import express from "express";
import {
  createStudent,
  deleteStudent,
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-student", protect, adminOnly, createStudent);
router.delete("/delete-student/:id", protect, adminOnly, deleteStudent);

export default router;
