"use client";
import { Button } from "@/components/ui/button";
import { Flex, Text } from "@radix-ui/themes";
import {
  AUTH_PROVIDER,
  CHAIN,
  SUPPORTED_ETHEREUM_NETWORKS,
  SignInResult,
  THEME,
  WALLET_PROVIDER,
  getUser,
  getWalletModel,
  init,
  signIn,
} from "@ramper/ethereum";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
export default function Home() {
  const [result, setResult] = useState<SignInResult>();
  const wallet = useMemo(() => {
    return result ? getWalletModel(window.localStorage, CHAIN.ETHEREUM) : null;
  }, [result]);

  // if user logged in, redirect to /home
  useEffect(() => {
    const user = getUser();
  });

  useEffect(() => {
    init({
      appId: "hrbpivofet",
      appName: "포로로",
      authProviders: [
        AUTH_PROVIDER.GOOGLE,
        AUTH_PROVIDER.FACEBOOK,
        AUTH_PROVIDER.TWITTER,
        AUTH_PROVIDER.APPLE,
        AUTH_PROVIDER.EMAIL,
      ],
      walletProviders: [WALLET_PROVIDER.METAMASK],
      network: SUPPORTED_ETHEREUM_NETWORKS.MATICMUM,
      theme: THEME.DARK,
      issueIdToken: true,
    });

    if (result?.user) {
      Cookies.set("userId", result.user.UID);
      Cookies.set("publicKey", result.user.wallets.ethereum.publicKey);
    }
    console.log(result);
  }, [result]);

  async function initWallet() {
    const signInResult: SignInResult = await signIn();
    setResult(signInResult);
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
              <p>
                Ramper는 복잡한 단계와 Private Key를 필요로 하지 않고 암호화폐
                지갑에 접근할 수 있도록 합니다.
              </p>
            </div>
            <div>
              {result ? (
                <Button type="button">
                  <Link href={"/auth/signup"}>다음</Link>
                </Button>
              ) : (
                <Button type="button" onClick={initWallet}>
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
