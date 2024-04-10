/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar-Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kutubhane-i dijital",
  description: "A book social media and shelf app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="brown"
          grayColor="auto"
          panelBackground="solid"
          radius="small"
          scaling="95%"
          style={{
            color: "var(--black )",
          }}
        >
          <Navbar />
          {children}
          {/* <Footer /> */}
        </Theme>
      </body>
    </html>
  );
}
