import type { Metadata } from "next";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { metaData } from "./data";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./styles.scss";

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
      <body className="antialiased pb-container">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
