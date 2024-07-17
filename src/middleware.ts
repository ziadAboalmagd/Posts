import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Check if the pathname starts with "/post"
  if (request.nextUrl.pathname.startsWith("/zpost")) {
    // Check if it's exactly "/post" without a trailing number
    if (request.nextUrl.pathname === "/zpost") {
      // Redirect /post to /post/0
      return NextResponse.redirect(new URL("/zpost/0", request.url));
    }
  }
  return;
}
