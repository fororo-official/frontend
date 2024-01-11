import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation-bar";
import MyToastContainer from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { Theme } from "@radix-ui/themes";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
});
const url = "https://frontend-fororo.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fororo",
    description: "FORIF Integration Management Website",
    url: url,
    siteName: "Fororo",
    images: [
      {
        url: "https://imgur.com/RCuyB05.png",
        alt: "포리프 블랙 로고",
      },
      {
        url: "https://i.imgur.com/bLWTCII.png",
        alt: "글자 있는 포리프 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
    alternateLocale: "en_US",
    countryName: "Seoul",
    emails: ["forif.contact@gmail.com", "standardstar@hanyang.ac.kr"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>FORIF</title>
      </head>
      <body className={cn("h-full scrollbar-hide", pretendard.className)}>
        <Theme accentColor="iris" className="h-full">
          <NavigationBar />
          {children}
          <Footer />
          <MyToastContainer
            autoClose={2000}
            position="bottom-left"
            theme="dark"
          />
        </Theme>
      </body>
    </html>
  );
}
