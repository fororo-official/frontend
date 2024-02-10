import getYearAndSemester from "@/hooks/getYearAndSemester";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
  const { year, semester } = getYearAndSemester();
  const URL = `${process.env.NEXT_PUBLIC_API_BASEURL}:${process.env.NEXT_PUBLIC_API_BASEPORT}`;
  const response: Response = await fetch(
    `${URL}/studies/all?year=${year}&semester=${semester}`,
    {
      method: "GET",
    }
  );
  if (response.ok) {
    const data = await response.json();
    return NextResponse.json(data);
  } else {
    return NextResponse.json({
      message: "응답이 올바르지 않습니다.",
      status: 200,
    });
  }
}
