import React, { useState } from "react";
import Slider from "react-slider";

export default function SidebarFilters() {
  const [ageRange, setAgeRange] = useState([18, 60]);

  return (
    <div className="p-4 bg-white shadow-lg rounded-md w-80">
      {/* প্রথমিক */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-4">প্রাথমিক</h2>
        {/* আমি খুঁজছি */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">আমি খুঁজছি</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>সবাই</option>
            <option>পাত্র</option>
            <option>পাত্রী</option>
          </select>
        </div>
        {/* বৈবাহিক অবস্থা */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">বৈবাহিক অবস্থা</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>সবাই</option>
            <option>অবিবাহিত</option>
            <option>বিবাহিত</option>
            <option>ডিভোর্সড</option>
          </select>
        </div>
        {/* বয়স */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">বয়স</label>
          <Slider
            className="slider"
            thumbClassName="thumb"
            trackClassName="track"
            defaultValue={[18, 60]}
            min={18}
            max={60}
            step={1}
            onChange={(value) => setAgeRange(value)}
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{ageRange[0]}</span>
            <span>{ageRange[1]}</span>
          </div>
        </div>
      </div>

      {/* ঠিকানা */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-4">ঠিকানা</h2>
        {/* স্থায়ী ঠিকানা */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">স্থায়ী ঠিকানা</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>ঠিকানা নির্বাচন করুন</option>
            <option>ঢাকা</option>
            <option>চট্টগ্রাম</option>
            <option>খুলনা</option>
            <option>রাজশাহী</option>
          </select>
        </div>
        {/* বর্তমান ঠিকানা */}
        <div>
          <label className="block text-gray-600 mb-2">বর্তমান ঠিকানা</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>ঠিকানা নির্বাচন করুন</option>
            <option>ঢাকা</option>
            <option>চট্টগ্রাম</option>
            <option>খুলনা</option>
            <option>রাজশাহী</option>
          </select>
        </div>
      </div>
    </div>
  );
}
