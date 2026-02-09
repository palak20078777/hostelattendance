// import React, { createContext, useContext, useState } from "react";

// interface AuthContextType {
//   login: (email: string, password: string, type: "student" | "admin") => Promise<boolean>;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const login = async (email: string, password: string, type: "student" | "admin") => {
//     try {
//       console.log("🌐 SENDING API REQUEST...");

//       const res = await fetch("http://localhost:5000/api/auth/login", {
        
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });
//         console.log("🚀 AUTH LOGIN CALLED");
// console.log("EMAIL:", email);
// console.log("PASSWORD:", password);
// console.log("TYPE:", type);
// console.log("✅ RESPONSE:", res);

//       const data = await res.json();

//       if (!res.ok) {
//         return false;
//       }

//       // Optional: role check
//       if (data.role !== type) {
//         return false;
//       }

//       // Save token
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("role", data.role);
//       localStorage.setItem("email", data.email);

//       return true;
//     } catch (err) {
//       console.error("Login error:", err);
//       return false;
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
//   return ctx;
// };

const login = async (
  email: string,
  password: string,
  type: "student" | "admin"
) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password, // ✅ plain password
        type,
      }),
    });

    const data = await res.json();

    if (!res.ok) return false;

    localStorage.setItem("token", data.token);
    return true;
  } catch (err) {
    console.error("LOGIN ERROR", err);
    return false;
  }
};
