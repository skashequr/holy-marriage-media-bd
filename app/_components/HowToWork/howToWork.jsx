import { tiroBangla } from "@/layout";
import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { TfiSearch } from "react-icons/tfi";
import { IoIosCall } from "react-icons/io";
import { GiBigDiamondRing } from "react-icons/gi";

const HowToWork = () => {
  return (
    <div className={tiroBangla.className}>
      <div>
        <section className="text-gray-200 bg-gray-900">
          <div className="max-w-6xl mx-auto px-5 py-24">
            <div className="text-center mb-20">
              <h1 className="title-font mb-4 text-3xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                হলি ম্যারেজ মিডিয়া যেভাবে কাজ করে
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                L'informatique est vaste et les langages naissent presque à tout
                moment, je fais tout mon possible pour être à la hauteur afin de
                répondre au besoin de mes clients et d'apporter de l'aide aux
                nouveaux développeurs.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-2 md:w-1/4 md:mb-0 mb-6 flex flex-col">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                      <AiOutlineUsergroupAdd />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl title-font font-medium mb-3">
                        বায়োডাটা তৈরি করুন
                      </h2>
                      <p className="leading-relaxed text-sm text-justify"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/4 md:mb-0 mb-6 flex flex-col">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                      <TfiSearch></TfiSearch>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl title-font font-medium mb-3">
                        বায়োডাটা খুঁজুন
                      </h2>
                      <p className="leading-relaxed text-sm text-justify"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/4 md:mb-0  mb-6 flex flex-col">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                      <IoIosCall></IoIosCall>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl title-font font-medium mb-3">
                        যোগাযোগ করুন
                      </h2>
                      <p className="leading-relaxed text-sm text-justify"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/4 md:mb-0 mb-6 flex flex-col">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-gray-500 mb-5 flex-shrink-0">
                      <GiBigDiamondRing></GiBigDiamondRing>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl title-font font-medium mb-3">
                        বিবাহ সম্পন্ন করুন
                      </h2>
                      <p className="leading-relaxed text-sm text-justify"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowToWork;
