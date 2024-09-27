import React from 'react';

const OngicarNama = () => {
    return (
        
            <div>
                <form >
                <div>
                    <div className="mb-5 pt-3">
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                                        এখানে রেজিষ্টিশন করছেন পরিবার জানে?
                                    </label>
                                    <select
                                        name="skinTone"
                                        id="skinTone"
                                        required
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">নির্বাচন করুন</option>
                                        <option value="হ্যাঁ">হ্যাঁ </option>
                                        <option value="না">না</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                                        আমাদের ফেইসবুক কমিউনিটিতে এড হয়েছেন?
                                    </label>
                                    <select
                                        name="skinTone"
                                        id="skinTone"
                                        required
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">নির্বাচন করুন</option>
                                        <option value="হ্যাঁ">হ্যাঁ </option>
                                        <option value="না">না</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                                       ভূল তথ্যের জন্য কর্তিপক্ষ আইনি পদক্ষেপ নিতে পারবে।
                                    </label>
                                    <select
                                        name="skinTone"
                                        id="skinTone"
                                        required
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">নির্বাচন করুন</option>
                                        <option value="হ্যাঁ">হ্যাঁ </option>
                                        
                                    </select>
                                    </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                                     বিয়ে সম্পাদিত হলে আমাদের কত টাকা দিবেন?
                                    </label>
                                    <input
                                        id="division"
                                        type='text'
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                    />
                                        </div>
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
       
    );
};

export default OngicarNama;