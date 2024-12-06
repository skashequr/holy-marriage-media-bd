import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { TbShoppingCartCopy } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import ProfileHeader from "@/_components/user/profileHeader";
const Sidebar = () => {
  return (
    <div className="hidden   shadow-lg md:hidden lg:flex flex-col bg-gray-800 ">
      <div className="flex items-center w-full justify-center h-16 bg-gray-800">
        <span className="text-white font-bold uppercase">
          Daystar Dashboard
        </span>
      </div>
      <ProfileHeader></ProfileHeader>
      <div className="flex min-h-screen flex-col w-full flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
          >
            <MdDashboard className="h-8 w-8 mx-2"></MdDashboard>
            ড্যাসবোর্ড
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <FaEdit className="h-8 w-8 mx-2"></FaEdit>
            বায়োডাটা এডিট করুন
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <GiSelfLove className="h-8 w-8 mx-2"></GiSelfLove>
            পছন্দের তালিকা
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <TbShoppingCartCopy className="h-8 w-8 mx-2" />
            আমার ক্রয়
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <BiSupport className="h-8 w-8 mx-2" />
            সাপোর্ট & রিপোর্ট
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <IoSettingsSharp className="h-8 w-8 mx-2" />
            সেটিংস
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <RiLogoutCircleLine className="h-8 w-8 mx-2" />
            লগ আউট
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
