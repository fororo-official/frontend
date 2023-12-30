"use client";
import Summary from "@/components/pages/profile/summary";
import { Button } from "@/components/ui/button";
import CertificateCardContainer from "@/containers/profile/certificate-card-container";
import StudyCardContainer from "@/containers/profile/study-card-container";
import MyToastContainer from "@/containers/toast/toast";
import ToastEmitter from "@/hooks/toastEmitter";
import { Text } from "@radix-ui/themes";
import { signOut } from "@ramper/ethereum";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ExampleStudyCards from "../home/mockup";
function ProfilePage() {
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const alertMessageFromUrl = urlParams.get("alert");
    console.log("URL에서 가져온 알림 메시지:", alertMessageFromUrl);

    if (alertMessageFromUrl) {
      setAlertMessage(alertMessageFromUrl);
    }
  }, []);

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
      // 경고 메시지를 띄웠으므로 다시 빈 문자열로 초기화
      setAlertMessage("");
    }
  }, [alertMessage]);

  const router = useRouter();
  function handleSignOut() {
    signOut();
    Cookies.remove("ramperIdToken");
    ToastEmitter({ type: "info", text: "로그아웃하였습니다!" });
    router.push("/");
  }

  const StudyCards = ExampleStudyCards;
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
      <div className="flex flex-col w-10/12 max-w-4xl py-2 gap-4">
        <Text size="5" weight="bold" className="text-gray-900">
          로그아웃
        </Text>
        <Button onClick={handleSignOut}>로그아웃 버튼</Button>
      </div>
      <MyToastContainer position="bottom-left" autoClose={2000} theme="light" />
    </>
  );
}

export default ProfilePage;
