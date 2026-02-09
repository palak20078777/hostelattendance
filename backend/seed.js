// import bcrypt from "bcryptjs";
// import dotenv from "dotenv";
// import connectDB from "./src/config/db.js";
// import User from "./s/models/User.js";

// dotenv.config();
// await connectDB();

// await User.deleteMany(); // optional (clean start)

// await User.insertMany([
//   {
//     email: "12410923@nitkkr.ac.in",
//     password: bcrypt.hashSync("student123", 10),
//     role: "student",
//   },
//   {
//     email: "12410924@nitkkr.ac.in",
//     password: bcrypt.hashSync("student456", 10),
//     role: "student",
//   },
//   {
//     email: "admin@nitkkr.ac.in",
//     password: bcrypt.hashSync("admin123", 10),
//     role: "admin",
//   },
// ]);

// console.log("✅ College users seeded");
// process.exit();
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./src/models/User.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const seedUsers = async () => {
  try {
    await connectDB();

    await User.deleteMany(); // optional: clean start

    await User.insertMany([
      {
        email: "12410923@nitkkr.ac.in",
        password: bcrypt.hashSync("student123", 10),
        role: "student",
      },
      {
        email: "12410924@nitkkr.ac.in",
        password: bcrypt.hashSync("student456", 10),
        role: "student",
      },
      {
        email: "admin@nitkkr.ac.in",
        password: bcrypt.hashSync("admin123", 10),
        role: "admin",
      },
    ]);

    console.log("✅ Users seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed", err);
    process.exit(1);
  }
};

seedUsers();
