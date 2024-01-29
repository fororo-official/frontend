"use client";
import Summary from "@/components/pages/profile/summary";
import { Button } from "@/components/ui/button";
import CertificateCardContainer from "@/containers/profile/certificate-card-container";
import StudyCardContainer from "@/containers/profile/study-card-container";
import { Text } from "@radix-ui/themes";
import { signOut } from "@ramper/ethereum";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ExampleStudyCards } from "../../mockup/mockup";
function ProfilePage() {
  const router = useRouter();
  function handleSignOut() {
    signOut();
    Cookies.remove("ramperIdToken");
    //로그아웃 후 쿠키 새로고침
    location.href = "/";
  }

  const StudyCards = ExampleStudyCards;
  return (
    <>
      <Summary name="표준성" info="정보시스템학과 23학번" />
      {/* divider */}
      <div className="w-10/12 max-w-4xl h-px bg-gray-200 my-4"></div>
      <div className="flex flex-col w-10/12 max-w-4xl py-2">
        <Text size="5" weight="bold" className="text-gray-900">
          참여 중 스터디
        </Text>
        <Text size="2" weight="medium" className="text-gray-400 pb-3">
          3개의 스터디가 진행중입니다.
        </Text>
        <StudyCardContainer
          studyValue={StudyCards.studyValue}
          attendance={StudyCards.attendance}
        />
      </div>
      <div className="flex flex-col w-10/12 max-w-4xl py-2">
        <Text size="5" weight="bold" className="text-gray-900">
          수료한 스터디
        </Text>
        <Text size="2" weight="medium" className="text-gray-400 pb-3">
          3개의 스터디를 수료했습니다.
        </Text>
        <CertificateCardContainer />
      </div>
      <div className="flex flex-col w-10/12 max-w-4xl py-2 gap-4 flex-wrap">
        <Text size="5" weight="bold" className="text-gray-900">
          계정
        </Text>
        <div className="flex flex-row gap-3 justify-start">
          <Link href={"/setting"}>
            <Button className="w-32">설정</Button>
          </Link>
          <Button
            variant={"destructive"}
            onClick={handleSignOut}
            className="w-32"
          >
            로그아웃
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
