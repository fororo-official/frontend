"use client";
import Star from "@/components/common/star";
import { Button } from "@/components/ui/button";
import initWallet from "@/hooks/initWallet";
import ToastEmitter from "@/hooks/toastEmitter";
import verifyRamperIdToken from "@/hooks/verifyRamperIdToken";
import { Flex, Text } from "@radix-ui/themes";
import { SignInResult, signIn } from "@ramper/ethereum";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  //초기 로그인 시 다음 단계로 넘어가기 위한 local state
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);

  useEffect(() => {
    // 웹페이지 처음 로딩 시 Wallet 초기화
    initWallet();
    // 현재 로그인 상태인지 확인
    async function checkLoginStatus() {
      const idToken = Cookies.get("ramperIdToken");
      if (idToken) {
        try {
          // ID 토큰 검증
          const userId: string = await verifyRamperIdToken(
            idToken,
            process.env.NEXT_PUBLIC_RAMPER_API_SECRET!
          );
          setIsLoggedIn(true);
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
      ToastEmitter({ type: "error", text: JSON.stringify(err) });
    }
  }

  return (
    <main className="h-full w-full">
      <Flex
        direction="column"
        gap="2"
        className="pt-16 px-6 bg-gray-100 h-full flex items-center"
        <div className="bg-white p-0 w-7/12 shadow-sm rounded-md border-2 border-gray-200 overflow-hidden max-md:w-full relative">
          <div className="bg-slate-950 flex flex-col align-middle justify-start px-6 py-5 border-b-2 border-gray-200">
            <Text size="6" weight="bold" className="text-gray-50 mb-2">
              회원가입
            </Text>
            <Text size="2" weight="medium" className="text-gray-400">
              1/2
            </Text>
          </div>
          <div className="flex flex-col p-6 md:w-8/12 h-96">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">FORIF</h1>
              <div className="text-base break-keep flex flex-col gap-2">
                <p>
                  포리프는 전공과 상관없이 프로그래밍을 배울 수 있게 하자는
                  신념을 바탕으로 2015년에 창설되었습니다.
                </p>

                <p>
                  전공, 학년, 나이, 성별, 그 어떤 것도 전혀 상관 없습니다.
                  포리프와 함께 프로그래밍을 향한 열정을 불태울 수 있다면
                  충분합니다 🔥
                </p>
                <p>
                  포리프에 대해 더 알고 싶으시다면,{" "}
                  <Link
                    href={"https://bit.ly/forif2023"}
                    target="_blank"
                    className="text-gray-600 font-bold"
                  >
                    여기를 클릭해주세요!
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <Star
            width={50}
            height={50}
            fillColor="#000"
            className={
              "absolute md:top-32 md:right-20 bottom-3 right-8 md:animate-slow-spin"
            }
          />
          <Star
            width={30}
            height={30}
            fillColor="#000"
            className={
              "absolute md:top-80 md:right-4 bottom-24 right-5 md:animate-slow-spin"
            }
          />
          <div className="flex flex-row p-6 w-full justify-between items-center">
            {result ? (
              <Button type="button">
                <Link href={"/auth/signup"}>다음</Link>
              </Button>
            ) : (
              <Button type="button" onClick={initWallet}>
                RAMPER 회원가입
              </Button>
            )}
            <div className="flex-row gap-3 justify-start items-center md:flex hidden">
              <Link
                href={"https://www.instagram.com/forif_hyu/"}
                target="_blank"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="instagram icon"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href={"https://bit.ly/forif2023"} target="_blank">
                <Image
                  src="/icons/notion.svg"
                  alt="notion icon"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href={"https://github.com/h-forif"} target="_blank">
                <Image
                  src="/icons/github.svg"
                  alt="github icon"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </Flex>
    </main>
  );
}
