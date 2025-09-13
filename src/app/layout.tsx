import localFont from "next/font/local";

import { MSWComponent, QueryClientProvider, Toaster } from "@/shared";
import type { Metadata } from "next";

import "./globals.css";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const benviitLasik = localFont({
  src: "../../public/fonts/BnviitLasik.ttf",
  display: "swap",
  variable: "--font-benviitLasik",
});

export const metadata: Metadata = {
  title: "CLIP",
  description: "콘텐츠를 요약하고 메모해 친구와 함께 지식을 큐레이션하는 웹앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} ${benviitLasik.variable} antialiased`}>
        <QueryClientProvider>
          <MSWComponent />
          {children}
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
