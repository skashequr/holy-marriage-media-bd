import { tiroBangla } from "@/layout";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "keep-react";

const MakeBiodata = () => {
  return (
    <div className={tiroBangla.className}>
      <div className="h-screen bg-slate-600 ">
        <h1 className="text-center text-4xl antialiased font-black tracking-tight pt-56 flex justify-center items-center align-middle ">
          হলি ম্যারেজ মিডিয়াতে -<p>- সম্পূর্ণ বিনামূল্যে বায়োডাটা করুন</p>
        </h1>
        <div className="flex justify-center items-center mt-16 gap-16">
          <div>
            <Card className="max-w-md border rounded-3xl">
              <CardContent>
                <CardTitle>Our Contributors</CardTitle>
                <CardDescription>
                  They help us to grow up the keep react component library
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="max-w-md border rounded-3xl">
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
