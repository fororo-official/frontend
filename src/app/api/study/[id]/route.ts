import getYearAndSemester from "@/hooks/getYearAndSemester";
import { NextApiRequest, NextApiResponse } from "next";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { sid } = req.query;
  console.log(sid);

  const { year, semester } = getYearAndSemester();
  const URL = `${process.env.NEXT_PUBLIC_API_BASEURL}:${process.env.NEXT_PUBLIC_API_BASEPORT}`;

  const response: Response = await fetch(
    `${URL}/studies/?year=${year}&semester=${semester}&studyId=${sid}`,
    {
      method: "GET",
    }
  );
  if (response.ok) {
    const data = await response.json();
    return Response.json(data);
  } else {
    return Response.json({
      message: "응답이 올바르지 않습니다.",
      status: 200,
    });
  }
}
