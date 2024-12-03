"use client";
import React, { useState } from "react";
import Slider from "react-slider";
import CheckboxForm from "../search/cheickBox";
import PersonalFilter from "../search/prrsonalFilter";
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from "keep-react";
import { Envelope, Lock } from "phosphor-react";
import { Button, InputIcon, Input, Label } from "keep-react";
import MyProfilePage from "@/_components/user/userProfile";
export default function SearchPage() {
  const [ageRange, setAgeRange] = useState([18, 60]);

  const profiles = [
    {
      id: "ODF-18364",
      birthDate: "January, 2003",
      height: "4'11\"",
      education: "Fazil",
    },
    {
      id: "ODF-18316",
      birthDate: "February, 2003",
      height: "5'",
      education: "Undergraduate",
    },
    {
      id: "ODF-18288",
      birthDate: "June, 2002",
      height: "4'8\"",
      education: "Fazil",
    },
  ];

  const filters = [
    { name: "প্রাথমিক", options: ["অপশন ১", "অপশন ২"] },
    { name: "ঠিকানা", options: ["অপশন ১", "অপশন ২"] },
    { name: "শিক্ষা", options: ["অপশন ১", "অপশন ২"] },
    { name: "ব্যক্তিত্ব", options: ["অপশন ১", "অপশন ২"] },
    { name: "পেশা", options: ["অপশন ১", "অপশন ২"] },
    { name: "অন্যান্য", options: ["অপশন ১", "অপশন ২"] },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          ফিল্টার সমূহ
        </h2>
        {/* প্রাথমিক */}

        {/* ডাইনামিক ফিল্টার */}

        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionAction>
              <AccordionTitle className="first-letter:text-primary-500">
                Q. What is the purpose of the Keep React?
              </AccordionTitle>
              <AccordionIcon />
            </AccordionAction>
            <AccordionContent>
              <div className="mb-6">
                <h3 className="text-purple-700 font-semibold mb-4">প্রাথমিক</h3>
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
                  <label className="block text-gray-600 mb-2">
                    বৈবাহিক অবস্থা
                  </label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>সবাই</option>
                    <option>অবিবাহিত</option>
                    <option>বিবাহিত</option>
                    <option>ডিভোর্সড</option>
                  </select>
                </div>
                {/* বয়স */}
                <div>
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionAction>
              <AccordionTitle className="first-letter:text-primary-500">
                ১। ঠিকানা
              </AccordionTitle>
              <AccordionIcon />
            </AccordionAction>
            <AccordionContent>
              <form className="mx-auto max-w-md space-y-2 rounded-lg">
                <fieldset className="space-y-1">
                  <Label htmlFor="name">Email</Label>
                  <div className="relative">
                    <Input placeholder="Enter email" className="ps-11" />
                    <InputIcon>
                      <Envelope size={19} color="#AFBACA" />
                    </InputIcon>
                  </div>
                </fieldset>
                <fieldset className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      placeholder="Enter password"
                      type="password"
                      className="ps-11"
                    />
                    <InputIcon>
                      <Lock size={19} color="#AFBACA" />
                    </InputIcon>
                  </div>
                </fieldset>
              </form>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionAction>
              <AccordionTitle className="first-letter:text-primary-500">
                ৩. শিক্ষা
              </AccordionTitle>
              <AccordionIcon />
            </AccordionAction>
            <AccordionContent>
              <CheckboxForm></CheckboxForm>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionAction>
              <AccordionTitle className="first-letter:text-primary-500">
                ৩. শিক্ষা
              </AccordionTitle>
              <AccordionIcon />
            </AccordionAction>
            <AccordionContent>
              <PersonalFilter></PersonalFilter>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionAction>
              <AccordionTitle className="first-letter:text-primary-500">
                ৩. শিক্ষা
              </AccordionTitle>
              <AccordionIcon />
            </AccordionAction>
            <AccordionContent>
              <div className="p-6 max-w-lg mx-auto  rounded-xl  space-y-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    ইমাম
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    মাদ্রাসা শিক্ষক
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    শিক্ষক
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    ইঞ্জিনিয়ার
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    ব্যবসায়ী
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    সরকারি চাকুরি
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    বেসরকারি চাকুরি
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    ফ্রিল্যান্সার
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    ডাক্তার
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    MBBS/BDS শিক্ষার্থী
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    শিক্ষার্থী
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    প্রবাসী
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    অন্যান্য
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    পেশা নেই
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionAction>
              <AccordionTitle className="first-letter:text-primary-500">
                ৩. অন্যান্য
              </AccordionTitle>
              <AccordionIcon />
            </AccordionAction>
            <AccordionContent>
              <div className="p-6 max-w-lg mx-auto rounded-xl space-y-6">
                {/* অর্থনৈতিক অবস্থা */}
                <div>
                  <h3 className="text-lg font-semibold">অর্থনৈতিক অবস্থা</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      উচ্চবিত্ত
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      উচ্চ মধ্যবিত্ত
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      মধ্যবিত্ত
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      নিম্ন মধ্যবিত্ত
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      নিম্নবিত্ত
                    </label>
                  </div>
                </div>

                {/* ক্যাটাগরি */}
                <div>
                  <h3 className="text-lg font-semibold">ক্যাটাগরি</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      প্রতিবন্ধী
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      বয়স্ক
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      নবমুসলিম
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      এতিম
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      মাসনা হতে আগ্রহী
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      তাবলীগ
                    </label>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <button className="w-full py-2 mt-4 bg-pink-500 text-white rounded hover:bg-pink-600">
          ফিল্টার মুছুন
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <MyProfilePage></MyProfilePage>
      </main>
    </div>
  );
}
