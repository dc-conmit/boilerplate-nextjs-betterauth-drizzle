import { NextRequest, NextResponse } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

export async function middleware(request: NextRequest) {
  // Skip middleware for static files and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/static') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Skip middleware for auth routes
  if (request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.next();
  }

  // Allow unauthenticated access to home page
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  const sessionCookie = getSessionCookie(request);
  if (!sessionCookie) {
    const callbackUrl = encodeURIComponent(request.nextUrl.pathname);
    return NextResponse.redirect(new URL(`/?callbackUrl=${callbackUrl}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 