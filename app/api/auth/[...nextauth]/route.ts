import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../../lib/prisma"

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string
        })
    ],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "database",
        maxAge: 30 * 24 * 60 * 60
    },
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.role = user.role
            } else if (token.sub) {
                const freshUser = await prisma.user.findUnique({
                    where: { id: token.sub as string },
                    select: { role: true },
                });
                token.role = freshUser?.role;
            }
            return token
        },
        async session({ session, token }) {
            if (session.user && token.sub) {
                session.user.id = token.sub as string
                session.user.role = token.role as string
            }
            return session;
        }
    }
}
export default NextAuth(authOptions)