import bcrypt from "bcryptjs";

console.log("🔥 USERS DATA LOADED");

export const users = [
  {
    id: "stu1",
    email: "12410923@nitkkr.ac.in",
    password: bcrypt.hashSync("student123", 10),
    role: "student",
  },
  {
    id: "stu2",
    email: "12410924@nitkkr.ac.in",
    password: bcrypt.hashSync("student456", 10),
    role: "student",
  },
  {
    id: "admin1",
    email: "admin@nitkkr.ac.in",
    password: bcrypt.hashSync("admin123", 10),
    role: "admin",
  },
];
