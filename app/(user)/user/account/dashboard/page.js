"use client";
import Sidebar from "@/_components/sidebar/sidebar";
import React from "react";
import MyProfilePage from "@/_components/user/userProfile";
import Profile from "@/_components/user/userDateails";
import ProfileCard2 from "@/_components/user/profileCard";
import PatientCard from "@/_components/user/patiantCard";
const UserDashboard = () => {
  return (
    <div>
      <div>
        {/* <div className="flex "> */}
        {/* <!-- sidebar --> */}

        {/* <div className="lg:grid lg:grid-cols-12  w-full gap-3"> */}
        {/* <div className="lg:col-span-3 sm:col-span-0">
              <Sidebar></Sidebar>
            </div> */}
        {/* <!-- Main content --> */}
        {/* <div className="lg:col-span-9 sm:col-span-12"> */}
        {/* <MyProfilePage></MyProfilePage> */}
        <div className="m-16">
          {/* First Warning */}
          <div className="relative mb-16">
            <button className="absolute py-1 px-3 -left-8 -top-2 -rotate-[10deg] border border-black shadow-[4px_4px_1px_rgb(126,34,206)] bg-[#7e22ce] text-white font-bold">
              WARNING!
            </button>

            <div className="shadow-[4px_4px_1px_rgb(126,34,206)] p-8 border border-black">
              The
              <span className="font-mono text-purple-700 font-bold">
                message
              </span>
              variable is a Laravel reserved word within this email context, so
              you should avoid using that as a field handle if you intend on
              using the email feature.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 justify-center items-center">
          <ProfileCard2 />
          <ProfileCard2 />
          <ProfileCard2 />
          <ProfileCard2 />
        </div>
        <div className="grid grid-cols-4 gap-4 justify-center items-center">
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
        </div>
        {/* <Profile></Profile> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default UserDashboard;
