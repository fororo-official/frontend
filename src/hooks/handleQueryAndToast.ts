"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ToastEmitter from "./toastEmitter";
export type QueryType = {
  status:
    | "needLogin"
    | "signOut"
    | "signUpSuccess"
    | "signInSuccess"
    | "signInCancel"
    | null;
};
function handleQueryAndToast() {
  const searchParams = useSearchParams();
  const { status } = {
    status: searchParams.get("status") as QueryType["status"],
  };
  const router = useRouter();
  useEffect(() => {
    switch (status) {
      case "needLogin":
        ToastEmitter({ type: "error", text: "로그인 후 이용가능해요." });
        break;
      case "signOut":
        ToastEmitter({ type: "error", text: "로그아웃했어요." });
        break;
      case "signUpSuccess":
        ToastEmitter({ type: "success", text: "회원가입에 성공했어요!" });
        break;
      case "signInSuccess":
        ToastEmitter({ type: "success", text: "돌아오신 걸 환영해요!" });
        break;
      case "signInCancel":
        ToastEmitter({ type: "error", text: "로그인을 중단했어요." });
        break;

      case null:
        break;
      default:
        ToastEmitter({ type: "error", text: "올바르지 않은 파라미터입니다." });
    }
    router.push("/home");
  }, [status]);
}

export default handleQueryAndToast;
