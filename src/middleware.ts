import { NextRequest, NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname == "/" ||
    request.nextUrl.pathname == "/auth/signup"
  ) {
    const idToken = request.cookies.get("ramperIdToken");
    const userId = request.cookies.get("userId");

    if (idToken && userId) {
      return NextResponse.rewrite(new URL("/home", request.url));
    } else if (idToken && !userId) {
      alert("회원가입 절차를 마무리해주세요.");
      return NextResponse.rewrite(new URL("/auth/signup", request.url));
    }
  }
}
