import localFont from "next/font/local";
import "./globals.css";
import { Tiro_Bangla } from "next/font/google";
import Navbar from "./_components/navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],  // Change this line
  weight: [ "400"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${tiroBangla.variable} antialiased`}>
       <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
