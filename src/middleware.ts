import { NextRequest, NextResponse } from 'next/server';
import { authClient } from './lib/auth/auth-client';

export async function middleware(request: NextRequest) {
  const { data: session } = await authClient.getSession({
    fetchOptions: {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    }
  });

  if (!session) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}
	return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 