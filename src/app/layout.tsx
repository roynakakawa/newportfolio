import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { metaData } from "./data";
import "./globals.css";
import "./styles.scss";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${metaData.title}`,
    default: metaData.title,
  },
  description: metaData.description,
  metadataBase: new URL(metaData.baseUrl),
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    images: "/opengraph-image.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased pb-container`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
