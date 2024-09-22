import React from 'react';
import Head from 'next/head';
import { FaBookOpen } from "react-icons/fa";
import { tiroBangla } from '@/app/layout';

const Hero = () => {
    return (
        <div className={tiroBangla.className}>
           

            <section className="relative bg-blueGray-50">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
                        backgroundImage: "url('https://i.ibb.co.com/87mq9v3/freepik-export-20240918183532lr-AY.jpg')"
                    }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        হলি ম্যারেজ মিডিয়া
                                    </h1>
                                 
                                    <figure className="mt-5">
      <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p>“ তোমরা নারীদের মধ্য হতে নিজেদের পছন্দ মত বিয়ে কর। ”</p>
      </blockquote>
      <figcaption className="mt-5">
        <FaBookOpen className="mx-auto p-1 text-[#22c55e] font-semibold text-5xl m-3 h-10 w-10 rounded"></FaBookOpen>
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          
        
          <div className="text-white font-semibold text-xl">(আন-নিসা ৪:৩)</div>
        </div>
      </figcaption>
    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section className="pb-10 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">বিশেষ পরামর্শ</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                        আমরা গ্রাহকদের আরও সুন্দরভাবে কিভাবে প্রোফাইলটি উপস্থাপন করতে পারে সে ব্যাপারে পরামর্শ দিয়ে থাকি। 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">ফেসবুক পেইজের মাধ্যমে সহযোগীতা</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                        আমাদের ফেসবুক পেইজের মাধ্যমে গ্রাহক আমাদের সাথে সরাসরি যোগাযোগ করতে পারবেন। যেকোনো ধরণের সমস্যা অথবা যেকোনো ধরনের প্রশ্নের উত্তর আমরা দিয়ে থাকি। এছাড়াও আমরা ফেসবুক পেইজে কিছু পাত্র বা পাত্রীর নিজের সম্পর্কে কিছু কথা পোস্ট করে থাকি।
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">গোপনীয়তা ও বিশ্বস্ততা</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                        আপনার অনুমতি ছাড়া ছবি, আসল নাম ও পূর্ণ প্রোফাইল কেউ দেখতে পারবে না। দুই ধাপে অনুমতি দেয়ার পরে গ্রাহক আপনার যোগাযোগের তথ্য পাবে। 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Hero;
