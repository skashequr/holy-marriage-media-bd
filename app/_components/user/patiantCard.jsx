"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHeartCirclePlus, FaHeartCircleCheck } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";

const PatientCard = ({ user }) => {
 
  const bioDataType = user?.general_information_id?.bioDataType;
  const mobileNumber = user?.personal_information_id?.mobileNumber;
  const email = user?.general_information_id?.email;
  const userId = user?._id;
  const name = user?.general_information_id?.name || "N/A";
  const localKey = "favouriteUsers";
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem(localKey)) || [];
    if (savedUsers.includes(userId)) {
      setIsFavourite(true);
    }
  }, [userId]);

  const handleToggle = () => {
    const savedUsers = JSON.parse(localStorage.getItem(localKey)) || [];
    if (savedUsers.includes(userId)) {
      const updated = savedUsers.filter((id) => id !== userId);
      localStorage.setItem(localKey, JSON.stringify(updated));
      setIsFavourite(false);
    } else {
      savedUsers.push(userId);
      localStorage.setItem(localKey, JSON.stringify(savedUsers));
      setIsFavourite(true);
    }
  };

 const handleBuy = async () => {
  console.log('rtth');
  
    try {
      const res = await fetch("http://localhost:5000/api/v1/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          email: email,
          mobileNumber: mobileNumber,
          amount: 20,
          name: name,
          success_url: "http://localhost:3000/payment/success",
          fail_url: "http://localhost:3000/payment/fail",
          cancel_url: "http://localhost:3000/payment/cancel",
        }),
      });
      const data = await res.json();
      console.log(data);
      
      if (data?.payment_url) {
        window.location.href = data.payment_url;
      }
    } catch (err) {
      console.error("AamarPay error:", err);
    }
  };


  return (
    <div className="rounded-xl hover:shadow-sm shadow-md border border-l-4 hover:border-black relative w-60 border-gray-200 pb-1 transition duration-200 hover:scale-105">
      <div className="p-2">
        <div className="relative w-52 h-40 mx-auto">
          {bioDataType === "পাত্র" ? (
            <img
              className="w-full h-full mt-4 rounded-lg object-cover"
              src="https://i.ibb.co/W4tS2h3W/Chat-GPT-Image-Jun-1-2025-02-40-29-PM.png"
              alt="Groom"
            />
          ) : bioDataType === "পাত্রি" ? (
            <img
              className="w-full h-full mt-4 rounded-lg object-cover"
              src="https://i.ibb.co/4gZ0FX0K/Chat-GPT-Image-Jun-1-2025-10-32-26-AM.png"
              alt="Bride"
            />
          ) : null}
          <div className="absolute left-0 -bottom-5  p-2 rounded-full cursor-pointer  ">
            < MdShoppingCart   onClick={handleBuy}  className="text-3xl hover:text-blue-800" />
          </div>

          <div
            onClick={handleToggle}
            className="w-9 h-9 p-2 absolute right-2 -bottom-3 rounded-full cursor-pointer"
          >
            {isFavourite ? (
              <FaHeartCircleCheck className="text-3xl text-red-500 hover:text-blue-800" />
            ) : (
              <FaHeartCirclePlus className="text-3xl hover:text-blue-800" />
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="p-1.5 bg-black w-44 rounded-tr-full rounded-br-full mt-2">
          <div className="text-center">
            <p className="text-white text-sm font-medium tracking-wide">
              {user?.general_information_id?.name || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-4">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            গাত্রবর্ণ:
          </p>
          <p className="text-black text-sm font-semibold tracking-wide">
            {user?.general_information_id?.skinTone || "N/A"}
          </p>
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            রক্ত:
          </p>
          <p className="text-black text-sm font-semibold tracking-wide">
            {user?.general_information_id?.bloodGroup || "N/A"}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mt-4">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            জন্ম সাল:
          </p>
          <p className="text-black text-sm font-semibold tracking-wide">
            {user?.general_information_id?.birthYear || "N/A"}
          </p>
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            ধরন:
          </p>
          <p className="text-black text-sm font-semibold tracking-wide">
            {bioDataType || "N/A"}
          </p>
        </div>

        <div className="w-full text-center mt-3">
          <Link href={`/find/${user?._id}`}>
            <button className="border-indigo-500 bg-cyan-500 text-white rounded-md px-4 py-1.5 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline text-xs font-medium">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
