import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/checkout")) {
    if (!request.cookies.get("auth")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
