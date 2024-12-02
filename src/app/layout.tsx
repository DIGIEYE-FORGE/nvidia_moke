import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { twMerge } from "tailwind-merge";
// import Upbar from "./components/upbar";
import CopyRightComponent from "./components/copy-right";
import NvidiaFooter from "./components/nvidia-footer";
import MiniUpbar from "./components/mini-upbar";

const BeVietnamPro = localFont({
  src: [
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Be_Vietnam_Pro/BeVietnamPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Nvidia",
  description: "Nvidia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          "min-h-[100dvh] pt-upbar antialiased",
          BeVietnamPro.className,
        )}
      >
        {/* <Upbar /> */}
        <MiniUpbar />
        {children}
        <NvidiaFooter />
        <CopyRightComponent />
      </body>
    </html>
  );
}
