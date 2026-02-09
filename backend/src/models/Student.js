import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  rollNumber: String,
  roomNumber: String,

  photo: { type: String }, // 👈 photo path
  role: { type: String, default: "student" },
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
