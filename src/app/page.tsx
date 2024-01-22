"use client";
import Star from "@/components/common/star";
import { Button } from "@/components/ui/button";
import GetScrollY from "@/hooks/getScrollY";
import handleObserver from "@/hooks/intersectionObserver";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { abel } from "./fonts/fonts";
export default function HomePage() {
  const scrollY = GetScrollY();
  const [starRGB, setStarRGB] = useState(0);
  const starColor = `rgb(${255 - starRGB}, ${255 - starRGB}, ${255 - starRGB})`;
  const backgroundColor = `rgb(${starRGB}, ${starRGB}, ${starRGB})`;
  const [countUpVisible, setCountUpVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
  });
  const introVisible = handleObserver("#intro");
  const aboutVisible = handleObserver("#about");

  useEffect(() => {
    function useStarRGB() {
      if (starRGB > 255) {
        setStarRGB(255);
      } else {
        setStarRGB(scrollY / 2);
      }
    }
    function handleVisible() {
      if (aboutVisible !== undefined) {
        if (aboutVisible > 0.3) {
          setCountUpVisible((prevState) => ({
            ...prevState,
            section1: true,
          }));
        } else {
          setCountUpVisible((prevState) => ({
            ...prevState,
            section1: false,
          }));
        }
      }
    }

    useStarRGB();
    handleVisible();
  }, [scrollY]);

  return (
    <>
      <main
        className={`pt-16 mb-8 min-h-full h-fit transition-colors duration-500`}
        style={{ backgroundColor }}
      >
        <section className="h-screen w-full flex">
          <div className="star-group">
            <Star
              fillColor={starColor}
              className={"absolute top-48 right-12"}
            />
            <Star
              fillColor={starColor}
              className={"absolute top-80 right-20"}
            />
            <Star
              fillColor={starColor}
              className={"absolute bottom-32 right-0"}
            />
          </div>
          <div className="flex flex-col gap-12 justify-center items-center h-[calc(100%-60px)] md:basis-4/6 basis-full">
            <div className="md:text-6xl text-3xl font-bold whitespace-pre-line tracking-wide text-center flex flex-col gap-10 text-gray-50">
              <div className="flex flex-row gap-2">
                <TypeAnimation
                  wrapper="span"
                  preRenderFirstString={true}
                  sequence={[
                    2000,
                    "개발자",
                    2000,
                    "팀 프로젝트",
                    2000,
                    "새로운 경험",
                    2000,
                    "한양대생",
                    3000,
                  ]}
                  speed={8}
                  repeat={Infinity}
                  className="text-forif"
                />
                <span>위한</span>
              </div>
              <h1 className={abel.className} style={{ fontWeight: "bold" }}>
                F O R I F
              </h1>
            </div>
            <Button variant={"sensuous"} size={"lg"}>
              APPLY
            </Button>
          </div>
          <div className="star-group">
            <Star fillColor={starColor} className={"absolute top-40 left-20"} />
            <Star
              fillColor={starColor}
              className={"absolute bottom-80 left-0"}
            />
            <Star
              fillColor={starColor}
              className={"absolute bottom-40 left-10"}
            />
          </div>
        </section>

        <section
          id="intro"
          className="md:mt-32 mt-12 flex flex-col items-center h-screen"
        >
          <div className="flex flex-col justify-start gap-32 md:w-full w-5/6 max-w-4xl">
            <div className="flex flex-col ">
              <div className="star-group">
                <Star
                  fillColor={starColor}
                  className={"absolute top-48 left-36"}
                />
                <Star
                  fillColor={starColor}
                  className={"absolute top-80 left-32"}
                />
                <Star
                  fillColor={starColor}
                  className={"absolute bottom-20 left-10"}
                />
              </div>
              <h1
                className="md:text-5xl text-3xl font-bold text-black transition-all text-center md:basis-3/5 basis-full flex items-center justify-center"
                style={{ opacity: introVisible }}
              >
                FORIF는 2015년에 설립되었습니다.
              </h1>
              <div className="star-group">
                <Star
                  fillColor={starColor}
                  className={"absolute top-40 left-20"}
                />
                <Star
                  fillColor={starColor}
                  className={"absolute top-0 right-0"}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="md:mt-32 mt-12 flex flex-col items-center h-screen"
        >
          <div className="flex flex-col justify-start gap-32 md:w-full w-5/6 max-w-4xl">
            <div className="flex flex-col items-start">
              <h1 className="md:text-7xl text-3xl font-bold text-black mb-4">
                규모
              </h1>

              <div className="flex flex-row gap-8 mb-2">
                <div className="flex flex-col justify-center items-start relative">
                  <h2 className="md:text-9xl text-5xl font-bold text-blackx">
                    {countUpVisible.section1 ? (
                      <CountUp start={100} end={400} duration={5} />
                    ) : (
                      400
                    )}
                  </h2>
                  <p className="md:text-5xl text-3xl font-bold text-blackx absolute -top-4 -right-4">
                    +
                  </p>
                  <p className="md:text-xl text-lg text-blackx">지원자</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h2 className="md:text-9xl text-5xl font-bold text-blackx">
                    {countUpVisible.section1 ? (
                      <CountUp start={1} end={15} />
                    ) : (
                      15
                    )}
                  </h2>
                  <p className="md:text-xl text-lg text-blackx">스터디</p>
                </div>
              </div>
              <p className="text-sm text-blackx">* 1년 기준</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
  // //초기 로그인 시 다음 단계로 넘어가기 위한 local state
  // const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);

  // useEffect(() => {
  //   // 웹페이지 처음 로딩 시 Wallet 초기화
  //   initWallet();
  //   // 현재 로그인 상태인지 확인
  //   async function checkLoginStatus() {
  //     const idToken = Cookies.get("ramperIdToken");
  //     if (idToken) {
  //       try {
  //         // ID 토큰 검증
  //         const userId: string = await verifyRamperIdToken(
  //           idToken,
  //           process.env.NEXT_PUBLIC_RAMPER_API_SECRET!
  //         );
  //         setIsLoggedIn(true);
  //       } catch (error) {
  //         // 검증 실패 시 쿠키 삭제 및 로그인 상태를 false로 설정
  //         Cookies.remove("ramperIdToken");
  //         setIsLoggedIn(false);
  //       }
  //     }
  //   }
  //   checkLoginStatus();
  // }, []);

  // async function handleLogin() {
  //   const signInResult: SignInResult = await signIn();
  //   try {
  //     Cookies.set(
  //       "ramperIdToken",
  //       signInResult.user?.ramperCredential?.idToken!
  //     );
  //     setIsLoggedIn(true);
  //   } catch (err) {
  //     ToastEmitter({ type: "error", text: JSON.stringify(err) });
  //   }
  // }

  // return (
  //   <main className="h-full w-full">
  //     <Flex
  //       direction="column"
  //       gap="2"
  //       className="pt-16 px-6 bg-gray-100 h-full flex items-center"
  //     >
  //       <div className="bg-white p-0 w-7/12 shadow-sm rounded-md border-2 border-gray-200 overflow-hidden max-md:w-full relative">
  //         <div className="bg-slate-950 flex flex-col align-middle justify-start px-6 py-5 border-b-2 border-gray-200">
  //           <Text size="6" weight="bold" className="text-gray-50 mb-2">
  //             회원가입
  //           </Text>
  //           <Text size="2" weight="medium" className="text-gray-400">
  //             1/2
  //           </Text>
  //         </div>
  //         <div className="flex flex-col p-6 md:w-8/12 h-96">
  //           <div className="flex flex-col gap-5">
  //             <h1 className="text-3xl font-bold">FORIF</h1>
  //             <div className="text-base break-keep flex flex-col gap-2">
  //               <p>
  //                 포리프는 전공과 상관없이 프로그래밍을 배울 수 있게 하자는
  //                 신념을 바탕으로 2015년에 창설되었습니다.
  //               </p>

  //               <p>
  //                 전공, 학년, 나이, 성별, 그 어떤 것도 전혀 상관 없습니다.
  //                 포리프와 함께 프로그래밍을 향한 열정을 불태울 수 있다면
  //                 충분합니다 🔥
  //               </p>
  //               <p>
  //                 포리프에 대해 더 알고 싶으시다면,{" "}
  //                 <Link
  //                   href={"https://bit.ly/forif2023"}
  //                   target="_blank"
  //                   className="text-gray-600 font-bold"
  //                 >
  //                   여기를 클릭해주세요!
  //                 </Link>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //         <Star
  //           width={50}
  //           height={50}
  //           fillColor="#000"
  //           className={
  //             "absolute md:top-32 md:right-20 bottom-3 right-8 md:animate-slow-spin"
  //           }
  //         />
  //         <Star
  //           width={30}
  //           height={30}
  //           fillColor="#000"
  //           className={
  //             "absolute md:top-80 md:right-4 bottom-24 right-5 md:animate-slow-spin"
  //           }
  //         />
  //         <div className="flex flex-row p-6 w-full justify-between items-center">
  //           {isLoggedIn ? (
  //             <Button type="button">
  //               <Link href={"/auth/signup"}>다음</Link>
  //             </Button>
  //           ) : (
  //             <Button type="button" onClick={handleLogin}>
  //               RAMPER 회원가입
  //             </Button>
  //           )}
  //           <div className="flex-row gap-3 justify-start items-center md:flex hidden">
  //             <Link
  //               href={"https://www.instagram.com/forif_hyu/"}
  //               target="_blank"
  //             >
  //               <Image
  //                 src="/icons/instagram.svg"
  //                 alt="instagram icon"
  //                 width={40}
  //                 height={40}
  //               />
  //             </Link>
  //             <Link href={"https://bit.ly/forif2023"} target="_blank">
  //               <Image
  //                 src="/icons/notion.svg"
  //                 alt="notion icon"
  //                 width={40}
  //                 height={40}
  //               />
  //             </Link>
  //             <Link href={"https://github.com/h-forif"} target="_blank">
  //               <Image
  //                 src="/icons/github.svg"
  //                 alt="github icon"
  //                 width={40}
  //                 height={40}
  //               />
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </Flex>
  //   </main>
}
