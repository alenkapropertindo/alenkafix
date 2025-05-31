// File: types/next-auth.d.ts

import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    /** Pastikan nama properti persis sesuai nama field di Prisma */
    role?: string; 
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;   // ← tambahkan ke sini
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;     // ← tambahkan ke sini
  }
}


// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       role: string;
//     } & DefaultSession["user"];
//   }

//   interface User {
//     role: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     role: string;
//   }
// }