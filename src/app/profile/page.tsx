"use client";
import Summary from "@/components/pages/profile/summary";
import CertificateCardContainer from "@/containers/profile/certificate-card-container";
import StudyCardContainer from "@/containers/profile/study-card-container";
import getNFTs from "@/hooks/getNFT";
import { Text } from "@radix-ui/themes";
import Cookies from "js-cookie";
import { useEffect } from "react";
function ProfilePage() {
  useEffect(() => {
    const publicKey = Cookies.get("publicKey");
    if (publicKey) {
      console.log(publicKey);

      getNFTs(publicKey);
    }
  });
  return (
    <>
      <Summary />
      {/* divider */}
      <div className="w-10/12 max-w-4xl h-px bg-gray-200 my-4"></div>
      <div className="flex flex-col w-10/12 max-w-4xl py-2">
        <Text size="5" weight="bold" className="text-gray-900">
          참여 중 스터디
        </Text>
        <Text size="2" weight="medium" className="text-gray-400 pb-3">
          3개의 스터디가 진행중입니다.
        </Text>
        <StudyCardContainer showAttendance />
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
    </>
  );
}

export default ProfilePage;
