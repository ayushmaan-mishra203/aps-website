import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APraSak Technologies",
  description: "Innovative Software Development & Digital Marketing Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{
        minHeight: "100vh",
        background: 'linear-gradient(90deg, #F7FAFF 0%, #EAF4FB 100%)',
        }}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
