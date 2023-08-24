"use client";
import Header from "@/components/header/Header";
import "./globals.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/header/Footer";
import HeaderSm from "@/components/header/HeaderSm";
import { windowSize } from "@/hooks";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  const windowWidth = windowSize().width;
  const isMobile = windowWidth <= 576;

  return (
    <html lang="en">
      <body>
        {isMobile ? <HeaderSm /> : <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
