import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";

// 둥글고 두툼한 한글 폰트(배달의민족 주아체). 굵은 한 가지 굵기만 있어 그 자체로 볼드체처럼 보입니다.
const jua = Jua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jua",
  // 한글 글꼴 파일은 커서 미리 불러오지 않음
  preload: false,
});

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${jua.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
