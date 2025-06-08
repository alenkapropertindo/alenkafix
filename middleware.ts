// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
// import type { NextRequest } from 'next/server'
export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  // const { pathname } = req.nextUrl;
  const pathname = req.nextUrl.pathname;
  // if (pathname.startsWith('/redirecting')) {
  //   // Periksa apakah token ada di session storage
  //   const tokenUrl = pathname.split('/')[2];
  //   // const cookieToken = req.cookies.get('next-auth.session-token')?.value;
  //   const cookieToken = req.cookies.get('redirect_state')?.value;
  //   const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  //   console.log(cookieToken)
  //   if (!tokenUrl || !uuidRegex.test(tokenUrl) || tokenUrl !== cookieToken) {
  //     return NextResponse.redirect(new URL('/auth/error?code=invalid_token', req.url));
  //   }
  //   // Hapus cookie setelah validasi
  //   const response = NextResponse.next();
  //   // response.cookies.delete('redirect_state');
  //   return response;
  // }
  // Proteksi semua rute dashboard
  // if (pathname.startsWith("/admin") || pathname.startsWith("/freelance")) {
  //   if (!token) {
  //     return NextResponse.redirect(new URL("/auth/signin", req.url));
  //   }

  //   // Verifikasi role
  //   const role = token.role;
  //   const isAdminPath = pathname.startsWith("/admin");

  //   if ((isAdminPath && role !== "ADMIN") || (!isAdminPath && role !== "FREELANCE")) {
  //     return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
  //   }
  // }

  return NextResponse.next();
}