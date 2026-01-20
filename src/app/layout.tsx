import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import "./media-queries.css";
import { LanguageContextProvider } from "@/_context/ContextLang";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Cruz Oroz - Jubilaciones",
  description: "Somos un Equipo de Profesionales que se ocupan de su futura Jubilacion",
  icons: {
    icon: "/logo-oroz1.svg"
  }
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
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </body>
    </html>
  );
}
