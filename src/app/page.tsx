"use client";
import { Button } from "@/components/ui/button";
import initWallet from "@/hooks/ramper";
import verifyRamperIdToken from "@/hooks/verifyRamperIdToken";
import { Flex, Text } from "@radix-ui/themes";
import { SignInResult, signIn } from "@ramper/ethereum";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);

  useEffect(() => {
    // 웹페이지 처음 로딩 시 Wallet 초기화
    initWallet();
    async function checkLoginStatus() {
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
          console.log(userId);
        } catch (error) {
          // 검증 실패 시 쿠키 삭제 및 로그인 상태를 false로 설정
          Cookies.remove("ramperIdToken");
          setIsLoggedIn(false);
        }
      }
    }
    checkLoginStatus();
  }, []);

  async function handleLogin() {
    const signInResult: SignInResult = await signIn();
    try {
      Cookies.set(
        "ramperIdToken",
        signInResult.user?.ramperCredential?.idToken!
      );
      setIsLoggedIn(true);
    } catch (err) {
      console.error("로그인 실패", err);
    }
  }

  return (
    <main className="h-full w-full">
      <Flex
        direction="column"
        gap="2"
        className="pt-16 px-6 bg-gray-100 h-full flex items-center"
      >
        <div className="bg-white p-0 w-7/12 shadow-sm rounded-md border-2 border-gray-200 overflow-hidden max-md:w-full">
          <div className="bg-slate-950 flex flex-col align-middle justify-start px-6 py-5 border-b-2 border-gray-200">
            <Text size="6" weight="bold" className="text-gray-50 mb-2">
              회원가입
            </Text>
            <Text size="2" weight="medium" className="text-gray-400">
              1/2
            </Text>
          </div>
          <div className="flex flex-col justify-between p-6 md:w-8/12 h-96">
            <div className="flex flex-col gap-5">
              <Image
                src="/ramper_black.png"
                width={628}
                height={162}
                alt="램퍼 로고"
              />
              <p>{isLoggedIn ? "I'M LOGGED IN" : "LOG OUT"}</p>
            </div>
            <div>
              {isLoggedIn ? (
                <Button type="button">
                  <Link href={"/auth/signup"}>다음</Link>
                </Button>
              ) : (
                <Button type="button" onClick={handleLogin}>
                  로그인
                </Button>
              )}
            </div>
          </div>
        </div>
      </Flex>
    </main>
  );
}
