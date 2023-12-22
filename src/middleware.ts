import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/")) {
    // 만약 쿠키에 UID가 존재한다면 /studies로 바로 연결
  }
}
