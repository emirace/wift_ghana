import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./_components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const berthold = localFont({
  src: [
    {
      path: "./fonts/berthold/Berthold-akzidenz-grotesk-be-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/berthold/Berthold-akzidenz-grotesk-be-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/berthold/Berthold-akzidenz-grotesk-be-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-berthold",
});

export const metadata: Metadata = {
  title: "WIFT Ghana",
  description:
    "A network of women called Women in Film and Television Ghana (WIFT Ghana) is working to create a more diverse film, television, and digital media landscape. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${berthold.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
