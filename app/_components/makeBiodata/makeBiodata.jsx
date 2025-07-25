import { tiroBangla } from "@/layout";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "keep-react";

const MakeBiodata = () => {
  return (
    <div className={tiroBangla.className}>
      <div className="min-h-screen bg-[#fbf9fa]">
        <h1 className="text-center text-2xl md:text-4xl antialiased font-black tracking-tight pt-24 md:pt-56 flex flex-col md:flex-row justify-center items-center align-middle gap-2">
          হলি ম্যারেজ মিডিয়াতে -
          <p>- সম্পূর্ণ বিনামূল্যে বায়োডাটা করুন</p>
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-16 gap-6 md:gap-16 px-4">
          <div className="w-full md:w-auto">
            <Card className="w-full max-w-md border rounded-3xl bg-gradient-to-r from-[#fef6fb] to-[#fbfafb]">
              <CardContent>
                <CardTitle>Our Contributors</CardTitle>
                <CardDescription>
                  They help us to grow up the keep react component library
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-auto">
            <Card className="w-full max-w-md border bg-gradient-to-r from-[#fef6fb] to-[#fbfafb] rounded-3xl">
              <CardContent>
                <CardTitle>Our Contributors</CardTitle>
                <CardDescription>
                  They help us to grow up the keep react component library
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeBiodata;
