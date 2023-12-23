import { NextRequest, NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/")) {
    if (typeof window !== "undefined") {
      const isBorn = localStorage.getItem("born");
      if (isBorn) {
        return NextResponse.rewrite(new URL("/studies", request.url));
      }
    }
  }
}
