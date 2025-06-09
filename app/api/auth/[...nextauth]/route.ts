import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';
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
      if (user) {
        session.user.id = user.id;
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.role = user.role;
      }
      return session;
    },
    async redirect({ baseUrl }) {
      const stateToken = uuidv4();
      (await
        cookies()).set('redirect_state', stateToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 1, 
        });

      // Redirect ke halaman khusus role setelah login
      return `${baseUrl}/redirecting/${stateToken}`;
    }
  }

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
