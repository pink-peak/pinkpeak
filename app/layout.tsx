import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { pretendard } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "PINKPEAK",
    template: "%s | PINKPEAK",
  },
  description: "Co-founder of unkey.dev and founder of planetfall.io",
  openGraph: {
    title: "PINKPEAK",
    description:
      "Co-founder of unkey.dev and founder of planetfall.io",
    url: "https://pinkpeak.art",
    siteName: "PINKPEAK",
    images: [
      {
        url: "/textlogo.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/textlogo.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
    <html lang="ko" className={[inter.variable, calSans.variable, pretendard.variable].join(" ")}>
      <head>
        <link
          rel="preload"
          href="/fonts/Pretendard-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <Analytics />
      </head>

      <body className="font-sans bg-[#ead7c4] text-black">
        {children}
      </body>
    </html>
  );
}
