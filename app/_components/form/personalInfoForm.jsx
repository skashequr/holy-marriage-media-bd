import React from 'react';

const PersonalInfoForm = () => {
    return (
        <div>
            <div>
                <form>
                <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                    ভোটার আইডি / জন্মনিবন্ধন নম্বর
                                </label>

                                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                                <input
                                    id="division"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    placeholder="পিতার নাম"
                                />

                            </div>

                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                    ভোটার আইডি / জন্মনিবন্ধন নম্বর ছবি
                                </label>

                                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}


                                <label
                                    className="flex cursor-pointer appearance-none justify-center py-3 px-6 rounded-md border border-dashed border-gray-300 bg-white text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                                    tabIndex="0"
                                >
                                    <span className="flex items-center space-x-2">
                                        <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                                            <path
                                                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                            <path
                                                d="M80,128a80,80,0,1,1,144,48"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                            <polyline
                                                points="118.1 161.9 152 128 185.9 161.9"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                            <line
                                                x1="152"
                                                y1="208"
                                                x2="152"
                                                y2="128"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                        </svg>
                                        <span className="text-xs font-medium text-gray-600">
                                            Drop files to Attach, or
                                            <span className="text-blue-600 underline"> browse</span>
                                        </span>
                                    </span>
                                    <input id="photo-dropbox" type="file" accept="image/*"
                                        className="sr-only" />
                                </label>


                            </div>
                        </div>

                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                    পাত্রের মোবাইল নম্বর
                                </label>

                                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                                <input
                                    id="division"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    placeholder="মোবাইল নম্বর"
                                />

                            </div>

                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                    পাত্রের/পাত্রির বর্তমান ছবি
                                </label>

                                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}


                                <label
                                    className="flex cursor-pointer appearance-none justify-center py-3 px-6 rounded-md border border-dashed border-gray-300 bg-white text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                                    tabIndex="0"
                                >
                                    <span className="flex items-center space-x-2">
                                        <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                                            <path
                                                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                            <path
                                                d="M80,128a80,80,0,1,1,144,48"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                            <polyline
                                                points="118.1 161.9 152 128 185.9 161.9"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                            <line
                                                x1="152"
                                                y1="208"
                                                x2="152"
                                                y2="128"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                        </svg>
                                        <span className="text-xs font-medium text-gray-600">
                                            Drop files to Attach, or
                                            <span className="text-blue-600 underline"> browse</span>
                                        </span>
                                    </span>
                                    <input id="photo-dropbox" type="file" accept="image/*"
                                        className="sr-only" />
                                </label>


                            </div>
                        </div>

                    </div>
                    <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                            নিজের শখ,পছন্দ-অপছন্দ,রুচিবোধ,স্বপ্ন ইত্যাদি বিষয়ে লিখুন
                        </label>

                        <textarea type="text" name="name" id="name" placeholder="বিস্তারিত লিখুন"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
                    </div>
                    <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                            নিজের ধর্মিয় দৃষ্টিভঙ্গি সম্পর্ক বিস্তারিত লিখুন
                        </label>

                        <textarea type="text" name="name" id="name" placeholder="বিস্তারিত লিখুন"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
                    </div>
                    {/* ফাও */}
                    <div className="mb-5 pt-3">
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            অতিরিক্ত তথ্য
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                <label htmlFor="height" className="mb-3 block text-base font-medium text-[#07074D]">
                                আপনার কি কোনো প্রতিবন্ধকাতা আছে?
                            </label>
                            <select
                                name="height"
                                id="height"
                                required
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                                <option value="">নির্বাচন করুন</option>
                                <option value="কোনো প্রতিবন্ধকাতা নেই">কোনো প্রতিবন্ধকাতা নেই</option>
                                <option value="সামান্য প্রতিবন্ধকাতা আছে">সামান্য প্রতিবন্ধকাতা আছে</option>
                                <option value="প্রতিবন্ধকাতা আছে">প্রতিবন্ধকাতা আছে</option>
                                <option value="অটিজম">অটিজম</option>
                                <option value="মানুষিক প্রতিবন্ধকাতা">মানুষিক প্রতিবন্ধকাতা</option>
                               
                            </select>
                            </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                       একাধিক বিয়ে নিয়ে আপনার চিন্তাভাবনা
                                    </label>
                                    <input type="text" name="city" id="city" placeholder="চিন্তাভাবনা"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                       আপনার আর্থিক সোর্স
                                    </label>
                                    <input type="text" name="state" id="state" placeholder="বিস্তারিত লিখুন"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                    পিতার ভোটার আইডি ছবি
                                </label>

                                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}


                                <label
                                    className="flex cursor-pointer appearance-none justify-center py-3 px-6 rounded-md border border-dashed border-gray-300 bg-white text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                                    tabIndex="0"
                                >
                                    <span className="flex items-center space-x-2">
                                        <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                                            <path
                                                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                            <path
                                                d="M80,128a80,80,0,1,1,144,48"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                            <polyline
                                                points="118.1 161.9 152 128 185.9 161.9"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                            <line
                                                x1="152"
                                                y1="208"
                                                x2="152"
                                                y2="128"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"
                                            />
                                        </svg>
                                        <span className="text-xs font-medium text-gray-600">
                                            Drop files to Attach, or
                                            <span className="text-blue-600 underline"> browse</span>
                                        </span>
                                    </span>
                                    <input id="photo-dropbox" type="file" accept="image/*"
                                        className="sr-only" />
                                </label>


                            </div>
                            </div>
                        </div>
                    </div>
                <button
                    type='submit'
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                    পরবর্তী
                </button>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfoForm;