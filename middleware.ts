import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL("/oyunlar", request.url));
}

export const config = {
  matcher: "/",
};
