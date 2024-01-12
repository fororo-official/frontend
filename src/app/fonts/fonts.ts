import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default pretendard;
