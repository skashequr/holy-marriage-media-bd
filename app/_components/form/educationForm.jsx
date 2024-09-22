import React from 'react';

const EducationForm = () => {
    return (
        <div>
             
            <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                           আপনার শিক্ষাগত মাধ্যম
                        </label>
                       
                        {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                        <select
                            id="division"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            
                        >
                            <option value="">জেনারেল</option>
                            <option value="">ইংরেজি মাধ্যম</option>
                            <option value="">আলিয়া</option>
                            <option value="">ক্বওমি</option>
                            <option value="">অননান্য</option>
                        </select>
                    
                        </div>
                        
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                           সর্বচ্চ শিক্ষ গত যোগ্যতা
                        </label>
                       
                        {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                        <select
                            id="division"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            
                        >
                            <option value="">এস এস সির নিচে</option>
                            <option value="">এস এস সি চলমান</option>
                            <option value="">এইচ এস সি চলমান</option>
                            <option value="">এইচ এস সি</option>
                            <option value="">অনার্স চলমান</option>

                            <option value="">ডিগ্রি চলমান</option>
                            <option value="">ডিগ্রি</option>
                            <option value="">অনার্স</option>
                            <option value="">স্নাকতর চলমান</option>
                            <option value="">স্নাকতর</option>
                            <option value="">ডক্টরেট</option>
                            <option value="">অষ্টম শ্রেণির নিচে</option>
                            <option value="">পঞ্চম শ্রেনির নিচে</option>
                           
                            
                        </select>
                    
                        </div>
                </div>
                
            </div>
            <div className="mb-5">
                <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    অননান্য শিক্ষাগত যোগ্যতা
                </label>
              
             <textarea type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
            </div>
            <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl"> 
                    যদি না থাকে ০ দিন
                </label>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <input type="text" name="area" id="area" placeholder="এস এস সি/দাখিল/সমমান"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <input type="number" name="area" id="area" placeholder="পাশের সন"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                        <select
                            id="division"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            
                        >
                            <option value="">বিজ্ঞান</option>
                            <option value="">মানবিক</option>
                            <option value="">ব্যাবসায়ে শিক্ষা</option>
                            <option value="">ভোকেশনাল</option>
                        </select></div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <input type="text" name="state" id="state" placeholder="এইচ এস সি/ডিপ্লোমা/সমমান"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <input type="number" name="state" id="state" placeholder="পাশের সন"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <select
                            id="division"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            
                        >
                            <option value="">বিজ্ঞান</option>
                            <option value="">মানবিক</option>
                            <option value="">ব্যাবসায়ে শিক্ষা</option>
                            <option value="">ভোকেশনাল</option>
                        </select></div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <input type="text" name="area" id="area" placeholder="বিশ্ববিদ্যালয়"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <input type="number" name="area" id="area" placeholder="পাশের সন"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                        <input type="text" name="area" id="area" placeholder="ডিপার্টমেন্ট এর নাম"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                
                
                
        
            </div>
        </div>
    );
};

export default EducationForm;









