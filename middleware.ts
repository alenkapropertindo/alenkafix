// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
// import type { NextRequest } from 'next/server'
export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;
if (pathname.startsWith('/redirect-handler')) {
    // Periksa apakah token ada di session storage
    const redirectToken = req.nextUrl.pathname.split('/')[2];
    const cookieToken = req.cookies.get('next-auth.session-token')?.value;

    if (!redirectToken || !cookieToken) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
  }
  // Proteksi semua rute dashboard
  if (pathname.startsWith("/admin") || pathname.startsWith("/freelance")) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    // Verifikasi role
    const role = token.role;
    const isAdminPath = pathname.startsWith("/admin");
    
    if ((isAdminPath && role !== "admin") || (!isAdminPath && role !== "freelance")) {
      return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
    }
  }

  return NextResponse.next();
}