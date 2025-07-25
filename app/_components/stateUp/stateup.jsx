"use client"
import { tiroBangla } from "@/layout";
import React from "react";
import CountUp from "react-countup";
import { FaMale, FaFemale, FaUsers, FaRing } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers className="text-4xl text-purple-700" />,
    title: "সর্বমোট পাত্র-পাত্রীর বায়োডাটা",
    count: 7961,
    suffix: "",
  },
  {
    id: 2,
    icon: <FaMale className="text-4xl text-purple-700" />,
    title: "সর্বমোট পাত্রের বায়োডাটা",
    count: 3375,
    suffix: "",
  },
  {
    id: 3,
    icon: <FaFemale className="text-4xl text-purple-700" />,
    title: "সর্বমোট পাত্রীর বায়োডাটা",
    count: 4577,
    suffix: "",
  },
  {
    id: 4,
    icon: <FaRing className="text-4xl text-purple-700" />,
    title: "সর্বমোট সফল বিবাহ",
    count: 2364,
    suffix: "+",
  },
];

const StatsSection = () => {
  return (
    <div className={tiroBangla.className}>
    <section className="py-12 bg-[#fbf9fa] text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-10">
        <span className="text-pink-600">আমাদের</span> সেবা গ্রহীতার পরিসংখ্যান
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white bg-gradient-to-r from-[#fef6fb] to-[#fbfafb] shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition"
          >
            {stat.icon}
            <p className="mt-4 text-lg text-gray-700">{stat.title}</p>
            <p className="text-3xl font-bold text-black mt-2">
              <CountUp end={stat.count} duration={2} separator="," suffix={stat.suffix} />
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default StatsSection;
