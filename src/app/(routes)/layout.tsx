import { NavbarContextProvider } from "@/app/_context/NavbarContext";
import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "block",
});

export const metadata: Metadata = {
  title: "Sean Fong | The Showcase",
  description: "Developer portfolio site, constructed by Sean Fong.",
  openGraph: {
    type: "website",
    url: "https://seancfong.com",
    title: "Sean Fong | The Showcase",
    description: "Developer portfolio site, constructed by Sean Fong.",
    siteName: "Sean Fong | The Showcase",
    images: [
      {
        url: "https://seancfong.com/images/og.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavbarContextProvider>
        <body className={`${outfit.variable} font-sans`}>{children}</body>
      </NavbarContextProvider>
    </html>
  );
}
