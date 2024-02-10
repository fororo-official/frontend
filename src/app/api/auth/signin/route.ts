import getToken from "@/hooks/api/getToken";
import { NextApiRequest, NextApiResponse } from "next";
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const URL = `${process.env.NEXT_PUBLIC_API_BASEURL}:${process.env.NEXT_PUBLIC_API_BASEPORT}`;
  const idToken = await getToken({ req });

  if (idToken) {
    const res: Response = await fetch(`${URL}/signin`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return Response.json(data);
    } else {
      return Response.json({
        message: "응답이 올바르지 않습니다.",
        status: 200,
      });
    }
  } else {
    return Response.json({
      message: "로그인하지 않았거나 토큰이 존재하지 않습니다.",
      status: 405,
    });
  }
}
