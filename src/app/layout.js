'use client'
import "./globals.css";
import Header from "./_components/Header/Header.jsx";
import Navbar from "./_components/Navbar/Navbar";
import RandomNews from "./_components/RandomNews/RandomNews";
import { useState } from "react";

// className={`${geistSans.variable} ${geistMono.variable}`}

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "The hint",
//   description: "We give our best to deliver the latest news to the peoples for free, so that that can stay updated",
// };

export default function RootLayout({ children }) {
  const [dropMenu, setDropMenu] = useState(false)
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.ico" sizes="any" />
        <title>The hint</title>
      </head>
      <body>
        <main className="nav-head">
          {/* Header */}
          <Header dropMenu={dropMenu} setDropMenu={setDropMenu} />
          {/* Navbar */}
          <Navbar setDropMenu={setDropMenu} dropMenu={dropMenu} />
          <section className="news-section">
            {children}
            <RandomNews />
          </section>
        </main>
      </body>
    </html>
  );
}
