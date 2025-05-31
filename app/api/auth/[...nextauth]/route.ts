import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 hari
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user }) {
      if (session.user && user.id) {
        session.user.id = user.id;
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.role = user.role ?? "WAITING";
      }
      return session;
    },
    async signIn({ user }) {
      // Ambil role dari `user.role` (alias Prisma)
      const role = user.role;
      if (role === "ADMIN") {
        return "/admin/dashboard";
      }
      // Jika role lain (misalnya "member"), pakai route sesuai nama role:
      return "/";
    },
  }

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
