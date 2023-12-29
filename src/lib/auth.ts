// utils/auth.js

import verifyRamperIdToken from "@/hooks/verifyRamperIdToken";
import Cookies from "js-cookie";

async function setLoginStatus() {
  const idToken = Cookies.get("ramperIdToken");

  if (idToken) {
    try {
      // ID 토큰 검증
      const userId = await verifyRamperIdToken(
        idToken,
        process.env.NEXT_PUBLIC_RAMPER_API_SECRET!
      );
      return { isLoggedIn: true, userId };
    } catch (error) {
      // 검증 실패 시 쿠키 삭제
      Cookies.remove("ramperIdToken");
    }
  }

  return { isLoggedIn: false, userId: null };
}

export default setLoginStatus;
