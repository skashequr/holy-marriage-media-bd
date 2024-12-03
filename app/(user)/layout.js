import localFont from "next/font/local";
import { Tiro_Bangla } from "next/font/google";
import Sidebar from "@/_components/sidebar/sidebar";
import { AppProvider } from "@/redux/provider";

// Corrected font paths
// const geistSans = localFont({
//   src: "/fonts/GeistVF.woff", // Corrected path (should start with '/')
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"],
});

// const geistMono = localFont({
//   src: "/fonts/GeistMonoVF.woff", // Corrected path
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function UserLayout({ children }) {
  return (
    <div>
      <div className={` ${tiroBangla.variable} antialiased`}>
        <div>
          <div>
            <div className="flex ">
              {/* <!-- sidebar --> */}

              <div className="lg:grid lg:grid-cols-12  w-full gap-3">
                <div className="lg:col-span-3 sm:col-span-0">
                  <Sidebar></Sidebar>
                </div>
                {/* <!-- Main content --> */}
                <div className="lg:col-span-9 sm:col-span-12">
                  <AppProvider>{children}</AppProvider>
                  {/* <Profile></Profile> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
