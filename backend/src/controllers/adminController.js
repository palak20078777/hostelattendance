// import User from "../models/User.js";
// import bcrypt from "bcryptjs";

// /**
//  * CREATE STUDENT
//  */
// export const createStudent = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const exists = await User.findOne({ email });
//     if (exists) {
//       return res.status(400).json({ message: "Student already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const student = await User.create({
//       email,
//       password: hashedPassword,
//       role: "student",
//     });

//     res.status(201).json({
//       message: "Student created successfully",
//       student,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// /**
//  * DELETE STUDENT
//  */
// export const deleteStudent = async (req, res) => {
//   try {
//     const student = await User.findByIdAndDelete(req.params.id);
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     res.json({ message: "Student deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
import bcrypt from "bcryptjs";
import Student from "../models/Student.js";

export const addStudent = async (req, res) => {
  try {
    const { name, email, password, rollNumber, roomNumber } = req.body;

    const exists = await Student.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      email,
      password: hashedPassword,
      rollNumber,
      roomNumber,
      photo: req.file ? `/uploads/students/${req.file.filename}` : "",
      role: "student",
    });

    res.status(201).json({
      message: "Student added successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


