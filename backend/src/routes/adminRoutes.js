// import express from "express";
// import {
//   createStudent,
//   deleteStudent,
// } from "../controllers/adminController.js";
// import { protect, adminOnly } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/create-student", protect, adminOnly, createStudent);
// router.delete("/delete-student/:id", protect, adminOnly, deleteStudent);

// export default router;
// import express from "express";
// import { addStudent } from "../controllers/adminController.js";
// import { protect, adminOnly } from "../middleware/authMiddleware.js";
// import { uploadStudentPhoto } from "../middleware/upload.js";

// const router = express.Router();

// router.post(
//   "/students",
//   protect,
//   adminOnly,
//   uploadStudentPhoto.single("photo"),
//   addStudent
// );

// export default router;


import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import upload from "../middleware/upload.js";
import {protect} from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminOnly.js";

const router = express.Router();

router.post(
  "/students",
  protect,
  adminOnly,
  upload.single("photo"),
  async (req, res) => {
    try {
      const { name, email, password, rollNumber, roomNumber } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: "Missing fields" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const student = await User.create({
        name,
        email,
        password: hashedPassword,
        rollNumber,
        roomNumber,
        role: "student",
        photo: req.file ? `/uploads/students/${req.file.filename}` : "",
      });

      res.status(201).json(student);
    } catch (err) {
      console.error("ADD STUDENT ERROR 👉", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

export default router;
