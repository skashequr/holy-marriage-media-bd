import localFont from "next/font/local";
import "./globals.css";
import { Tiro_Bangla } from "next/font/google";
import Navbar from "./_components/Navbar/Navbar";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./redux/provider";
import { Suspense } from "react";
import Loading from "./(user)/user/loading";
import ReduxInitializer from "./redux/reduxInitializer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"], // Change this line
  weight: ["400"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
   return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiroBangla.variable} antialiased`}
      >
        <Navbar />
        <Suspense fallback={<Loading />} />
        <ToastContainer />
        <AppProvider>
          <ReduxInitializer />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}






// app/layout.tsx বা app/layout.ts (Next.js 13+ App Router)





// ✅ ReduxInitializer Component



