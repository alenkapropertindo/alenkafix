// import { withAccelerate } from "@prisma/extension-accelerate";
// import { PrismaClient } from "./generated/prisma";

// import { PrismaClient } from "@/app/generated/prisma";

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient;
// };

// const db =
//   globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

// export default db;
// File: /lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // Ini agar saat development hot‐reload, PrismaClient tidak terbuat ganda
  // @ts-ignore
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient =
  // @ts-ignore
  global.prisma ??
  // @ts-ignore
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  // @ts-ignore
  global.prisma = prisma;
}

