import { tiroBangla } from '@/app/layout';
import React from 'react';

const PrimaryForm = () => {
    return (
        <div className={tiroBangla.className}>
           <form>

           
            <div className="mb-5">
                <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    পুরো নাম 
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
                    {/* মোবাইল , বর্ণ */}
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                            মোবাইল নম্বর
                        </label>
                        <input type="number" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                           গাত্র বর্ণ
                        </label>
                       
                        {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                        <select
                            id="division"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            
                        >
                            <option value="">উজ্জল ফর্সা</option>
                            <option value="">ফর্সা</option>
                            <option value="">কালো</option>
                            <option value="">শ্যামলা</option>
                            <option value="">উজ্জল শ্যামলা</option>
                        </select>
                    
                        </div>
                </div>
            </div>

            {/* জন্ম সন বৈবাহিক অবস্থা */}
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                            জন্মসন
                        </label>
                        <input type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                           জাতীয়তা
                        </label>
                        <input type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                           বৈবাহিক অবস্থা
                        </label>
                       
                        {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                        <select
                            id="division"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            
                        >
                            <option value="">অবিবাহিত</option>
                            <option value="">বিবাহিত</option>
                            <option value="">ডিভোর্স</option>
                            <option value="">বিধবা</option>
                            <option value="">বিপত্নিক</option>
                        </select>
                    
                        </div>
                </div>
            </div>
            {/* ওজন */}
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                            ওজন 
                        </label>
                        <input type="number" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                
                <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                           উচ্চতা
                        </label>
                       
                        {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                        <select
                            id="division"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            
                        >
                            <option value="">উজ্জল ফর্সা</option>
                            <option value="">ফর্সা</option>
                            <option value="">কালো</option>
                            <option value="">শ্যামলা</option>
                            <option value="">উজ্জল শ্যামলা</option>
                        </select>
                    
                        </div>
                </div>
                <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                           রক্তের গ্রুপ
                        </label>
                       
                        {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                        <select
                            id="division"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            
                        >
                            <option value="">উজ্জল ফর্সা</option>
                            <option value="">ফর্সা</option>
                            <option value="">কালো</option>
                            <option value="">শ্যামলা</option>
                            <option value="">উজ্জল শ্যামলা</option>
                        </select>
                    
                        </div>
                </div>
            </div>
            
            <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl"> 
                    Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="area" id="area" placeholder="Enter area"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="city" id="city" placeholder="Enter city"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="state" id="state" placeholder="Enter state"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
            </div> 
            <div>
                <button
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    পরবর্তী
                </button>
            </div>
        </form>
        </div>
    );
};

export default PrimaryForm;