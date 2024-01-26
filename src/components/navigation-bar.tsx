"use client";
import GetScrollY from "@/hooks/getScrollY";
import initWallet from "@/hooks/initWallet";
import ToastEmitter from "@/hooks/toastEmitter";
import verifyRamperIdToken from "@/hooks/verifyRamperIdToken";
import { SignInResult, signIn } from "@ramper/ethereum";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "./ui/sheet";
export function NavigationBar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isCheckingLogin, setIsCheckingLogin] = useState<boolean>(true);
  const scrollY = GetScrollY();

  useEffect(() => {
    initWallet();
    async function checkLoginStatus() {
      setIsCheckingLogin(true);
      const idToken = Cookies.get("ramperIdToken");
      if (idToken) {
        try {
          // ID 토큰 검증
          const userId: string = await verifyRamperIdToken(
            idToken,
            process.env.NEXT_PUBLIC_RAMPER_API_SECRET!
          );

          // 검증 성공 시 로그인 상태를 true로 설정
          setIsLoggedIn(true);
        } catch (error) {
          // 검증 실패 시 쿠키 삭제 및 로그인 상태를 false로 설정
          Cookies.remove("ramperIdToken");
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
      setIsCheckingLogin(false);
    }
    checkLoginStatus();
  }, []);

  async function handleLogin() {
    const signInResult: SignInResult = await signIn();
    console.log(signInResult.user?.ramperCredential?.idToken);

    try {
      Cookies.set(
        "ramperIdToken",
        signInResult.user?.ramperCredential?.idToken!
      );

      //로그인 후 쿠키 새로고침
      if (signInResult.method === "cancel") {
        ToastEmitter({ type: "error", text: "로그인을 중단했어요." });
      } else {
        location.href = "/studies?status=SignInSuccess";
      }
    } catch (err) {
      ToastEmitter({ type: "error", text: "로그인을 중단했어요." });
      setIsLoggedIn(false);
    }
  }

  return (
    <header
      className={`flex items-center justify-between px-6 h-[60px] fixed left-0 right-0 top-0 bg-transparent bg-opacity-75 backdrop-blur z-10 ${
        scrollY !== 0 && "border-b border-gray-200"
      }`}
    >
      <Link href="/">
        <div className="flex items-center">
          <Image src={"/icons/forif.svg"} alt="Logo" width={88} height={36} />
        </div>
      </Link>
      {isCheckingLogin ? (
        <nav className="flex items-center space-x-6 max-md:hidden">
          <NavTab href="/">로딩 중..</NavTab>
        </nav>
      ) : (
        <nav className="flex items-center space-x-6 max-md:hidden">
          {!isLoggedIn && <NavTab href="#about_us">About us</NavTab>}
          {!isLoggedIn && <NavTab href="#howitworks">How it works</NavTab>}
          {!isLoggedIn && <NavTab href="#projects">Projects</NavTab>}
          {isLoggedIn && <NavTab href="/profile">프로필</NavTab>}
          {!isLoggedIn && (
            <Button variant="default" onClick={handleLogin}>
              로그인
            </Button>
          )}
        </nav>
      )}
      {/* dropdown menu */}
      <nav className="hidden max-md:flex items-center space-x-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <FiMenu size={24} color={"white"} />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-64">
            <SheetFooter>
              <SheetClose asChild>
                {isCheckingLogin ? (
                  <div className="flex flex-col space-y-2">
                    <NavTab href="/">로딩 중..</NavTab>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <NavTab href="/attendance">전자출결</NavTab>
                    <NavTab href="/board">게시판</NavTab>
                    <NavTab href="/profile">프로필</NavTab>
                    {!isLoggedIn && <NavTab href="/login">로그인</NavTab>}
                  </div>
                )}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

function NavTab({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-100"
    >
      {children}
    </Link>
  );
}
