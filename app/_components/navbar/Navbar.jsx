"use client";
import React, { useState } from "react";
import Link from "next/link";
import { tiroBangla } from "../../layout";
import NavigateLoginPage from "../auth/navigateLoginPage";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";
import DrawerComponent from "@/_components/Drawer/drawer"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={tiroBangla.className}>
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-4 md:px-8 py-2 z-50">
        {/* logo */}
        <h1 className="w-6/12 md:w-3/12">
          <Link href="">
            <svg
              viewBox="0 0 248 31"
              className="h-6 w-auto hover:text-green-500 duration-200"
            >
              <path
                d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                fill="#22C55E"
              />
            </svg>
          </Link>
        </h1>

        {/* Hamburger menu button */}
        <button
          className="md:hidden flex items-center text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* navigation */}
        <nav
          className={`nav font-semibold text-lg fixed md:static top-0 left-0 h-full w-2/3 max-w-xs bg-white shadow-lg md:shadow-none z-40 transform ${
            menuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          } transition-transform duration-200 md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:flex`}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center pt-20 md:pt-0 px-6 md:px-0 gap-2 md:gap-0 h-full">
            <li className="p-4 border-b-2 border-green-500  border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <Link href="/" onClick={() => setMenuOpen(false)}>হোম</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <Link href="/find" prefetch={true} onClick={() => setMenuOpen(false)}>খুঁজুন</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link href="/about-us" onClick={() => setMenuOpen(false)}> সম্পর্কে</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link href="" onClick={() => setMenuOpen(false)}>জিজ্ঞাসা</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link href="" onClick={() => setMenuOpen(false)}>যোগাযোগ</Link>
            </li>
            <NavigateLoginPage />
          </ul>
        </nav>

        {/* Overlay for mobile menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* buttons */}
        <div className="w-6/12 md:w-3/12 flex justify-end items-center gap-2">
          <Link href="">
            




            <DrawerComponent></DrawerComponent>
          </Link>
          <Link href="/user/profileDetails">
            <CgProfile className="h-9 w-9 p-1 hover:text-green-500 duration-200" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
