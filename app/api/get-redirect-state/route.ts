// app/api/get-redirect-state/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('redirect_state')?.value;

  if (!token) {
    return NextResponse.json({ error: 'No redirect_state' }, { status: 404 });
  }

  // const res = NextResponse.json({ state: token });
  // res.cookies.set('redirect_state', '', { maxAge: 0, path: '/' });
  // return res;

  return NextResponse.json({ state: token });
}
