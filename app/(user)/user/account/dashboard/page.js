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
        <MyProfilePage></MyProfilePage>
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
