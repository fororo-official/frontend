"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ToastEmitter from "./toastEmitter";
export type QueryType =
  | "NeedLogin"
  | "SignOut"
  | "SignInSuccess"
  | "SignInCancel"
  | "SignUpSuccess"
  | null;
function handleQueryAndToast() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { status } = {
    status: searchParams.get("status") as QueryType,
  };
  useEffect(() => {
    switch (status) {
      case "NeedLogin":
        ToastEmitter({ type: "error", text: "로그인 후 이용가능해요." });
        router.push("/studies");
        break;
      case "SignOut":
        ToastEmitter({ type: "info", text: "로그아웃했어요." });
        router.push("/");
        break;
      case "SignUpSuccess":
        ToastEmitter({ type: "success", text: "회원가입에 성공했어요!" });
        router.push("/studies");
        break;
      case "SignInSuccess":
        ToastEmitter({ type: "success", text: "돌아오신 걸 환영해요!" });
        router.push("/studies");
        break;
      case "SignInCancel":
        ToastEmitter({ type: "error", text: "로그인을 중단했어요." });
        break;
      case null:
        router.push("/studies");
        break;
      default:
        ToastEmitter({ type: "error", text: "올바르지 않은 파라미터에요." });
        router.push("/studies");
    }
  }, [status]);
}

export default handleQueryAndToast;
