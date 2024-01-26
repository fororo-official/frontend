"use client";
import Gallery from "@/components/common/gallery";
import Star from "@/components/common/star";
import { Button } from "@/components/ui/button";
import handleObserver from "@/hooks/intersectionObserver";
import { galleryImages, milestone } from "@/mockup/mockup";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { abel } from "./fonts/fonts";

export default function HomePage() {
  const [countUpVisible, setCountUpVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const introVisible = handleObserver("#intro");
  const scaleVisible = handleObserver("#scale");

  useEffect(() => {
    function handleVisible() {
      if (scaleVisible !== undefined) {
        if (scaleVisible > 0.3) {
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
    handleVisible();
  }, [scaleVisible]);

  return (
    <>
      <main
        className={`pt-16 mb-8 min-h-full h-fit transition-colors duration-500`}
      >
        <section className="h-screen w-full flex">
          <div className="star-group">
            <Star fillColor={"#000"} className={"absolute top-48 right-12"} />
            <Star fillColor={"#000"} className={"absolute top-80 right-20"} />
            <Star fillColor={"#000"} className={"absolute bottom-32 right-0"} />
          </div>
          <div className="flex flex-col gap-12 justify-center items-center h-[calc(100%-60px)] md:basis-4/6 basis-full">
            <div className="md:text-6xl text-3xl font-bold whitespace-pre-line tracking-wide text-center flex flex-col gap-10 text-gray-900">
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
            <Star fillColor={"#000"} className={"absolute top-40 left-20"} />
            <Star fillColor={"#000"} className={"absolute bottom-80 left-0"} />
            <Star fillColor={"#000"} className={"absolute bottom-40 left-10"} />
          </div>
        </section>
        <section className="md:mt-52 mt-12 flex flex-col items-center min-h-fit w-full">
          <div className="flex flex-col w-10/12 max-w-8xl h-full">
            <h1
              id="intro"
              className="md:text-4xl text-3xl font-bold text-black transition-all flex items-center justify-start"
              style={{ opacity: introVisible }}
            >
              변화를 열망하는 사람들이 모여,
              <br />
              역사에 남을만한 변화를 만듭니다.
            </h1>
          </div>
        </section>
        <section
          id="about_us"
          className="mt-12 flex flex-col items-center min-h-fit w-full relative"
        >
          <div className="flex md:flex-row flex-col gap-10 justify-between w-10/12 max-w-8xl h-[calc(100%-60px)]">
            <div className="flex flex-col gap-4 w-full">
              <ul className="list_milestones">
                {milestone.data.map((val) => (
                  <li key={val.year}>
                    <div className="wrap_cont">
                      <strong>{val.year}</strong>
                      <div className="inner_cont">
                        {val.events.map((event) => (
                          <div
                            key={`${val.year}-${event.month}`}
                            className="flex justify-start"
                          >
                            <em>{event.month}월</em>
                            <div className="ml-9">
                              <ul className="list_link">
                                {event.details.map((detail, idx) => (
                                  <li key={`${val.year}-${event.month}-${idx}`}>
                                    {detail.event}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Gallery images={galleryImages} />
          </div>
        </section>
        <section
          id="scale"
          className="md:mt-52 mt-12 flex flex-col items-center h-screen"
        >
          <div className="flex flex-col justify-start gap-32 w-10/12 max-w-8xl">
            <div className="flex flex-col items-start">
              <h1 className="md:text-7xl text-3xl font-bold text-black mb-4">
                규모
              </h1>

              <div className="flex flex-row gap-8 mb-2">
                <div className="flex flex-col justify-center items-start relative">
                  <h2 className="md:text-9xl text-5xl font-bold text-black">
                    {countUpVisible.section1 ? (
                      <CountUp start={100} end={400} duration={4} />
                    ) : (
                      400
                    )}
                  </h2>
                  <p className="md:text-5xl text-3xl font-bold text-black absolute -top-4 -right-4">
                    +
                  </p>
                  <p className="md:text-xl text-lg text-black">지원자</p>
                </div>
                <div className="flex flex-col justify-center items-start relative">
                  <h2 className="md:text-9xl text-5xl font-bold text-black">
                    {countUpVisible.section1 ? (
                      <CountUp start={1} end={15} />
                    ) : (
                      15
                    )}
                  </h2>
                  <p className="md:text-5xl text-3xl font-bold text-black absolute -top-4 -right-4">
                    +
                  </p>
                  <p className="md:text-xl text-lg text-black">스터디</p>
                </div>
              </div>
              <p className="text-sm text-black">* 1년 기준</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
