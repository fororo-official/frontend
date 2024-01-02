import { NextRequest, NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  const idToken = request.cookies.get("ramperIdToken");
  const userId = request.cookies.get("userId");
  const pathname = request.nextUrl.pathname;

  //유저가 최초 회원가입 절차를 거치려고 할때
  if (pathname == "/" || pathname == "/auth/signup") {
    if (userId) return NextResponse.rewrite(new URL("/home", request.url));
  }
  //프로필 페이지 접근
  else if (pathname == "/profile" || pathname.startsWith("/setting")) {
    //로그아웃 기능을 통해 로그아웃했을 때
    if (!idToken) {
      return NextResponse.redirect(
        new URL(`/home?status=needLogin`, request.url)
      );
    }
  }
}
