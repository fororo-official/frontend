"use client";
import { Button } from "@/components/ui/button";
import { Flex, Text } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-full w-full">
      <Flex
        direction="column"
        gap="2"
        className="pt-16 px-6 bg-gray-100 h-full flex items-center"
      >
        <div className="bg-white p-0 w-7/12 shadow-sm rounded-md border-2 border-gray-200 overflow-hidden max-md:w-full relative">
          <div className="bg-slate-950 flex flex-col align-middle justify-start px-6 py-5 border-b-2 border-gray-200">
            <Text size="6" weight="bold" className="text-gray-50 mb-2">
              로그인/회원가입
            </Text>
          </div>
          <div className="flex flex-col p-6 md:w-8/12 h-96">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">HELLO FORIF</h1>
              <div className="text-base break-keep flex flex-col gap-2">
                <p>
                  포리프는 전공과 상관없이 프로그래밍을 배울 수 있게 하자는
                  신념을 바탕으로 2015년에 창설되었습니다.
                </p>
                <p>
                  전공, 학년, 나이 그 어떤 것도 전혀 상관 없습니다. 포리프와
                  함께 프로그래밍을 향한 열정을 불태울 수 있다면 충분합니다 🔥
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
          <div className="flex flex-row p-6 w-full justify-between items-center">
            <Button variant={"outline"} onClick={() => signIn("google")}>
              <div className="flex flex-row items-center gap-5">
                <Image
                  src={"/icons/google.png"}
                  width={20}
                  height={20}
                  alt="Google Logo"
                />
                <h1>학교 계정으로 로그인</h1>
              </div>
            </Button>
            <div className="flex-row gap-3 justify-start items-center md:flex hidden">
              <Link
                href={"https://www.instagram.com/forif_hyu/"}
                target="_blank"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="instagram icon"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href={"https://bit.ly/forif2023"} target="_blank">
                <Image
                  src="/icons/notion.svg"
                  alt="notion icon"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href={"https://github.com/h-forif"} target="_blank">
                <Image
                  src="/icons/github.svg"
                  alt="github icon"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </Flex>
    </main>
  );
}
