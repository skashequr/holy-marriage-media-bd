import React from 'react';

const ExpectedPatnerForm = () => {
    return (
        <div>
            <form>
            <div>
              <div>
             
             <div className="-mx-3 flex flex-wrap">
             <div className="w-full px-3 sm:w-1/2">
                     <div className="mb-5">
                         <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                         বয়স
                         </label>
                        
                         {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                         <input
                             id="division"
                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="উদাহরণ  (১৪-২২)"
                         />
                     
                         </div>
                         
                 </div>
                 <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="skinTone" className="mb-3 block text-base font-medium text-[#07074D]">
                                গাত্র বর্ণ
                            </label>
                            <select
                                name="skinTone"
                                id="skinTone"
                                required
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                                <option value="">নির্বাচন করুন</option>
                                <option value="উজ্জল ফর্সা">উজ্জল ফর্সা</option>
                                <option value="ফর্সা">ফর্সা</option>
                                <option value="কালো">কালো</option>
                                <option value="শ্যামলা">শ্যামলা</option>
                                <option value="উজ্জল শ্যামলা">উজ্জল শ্যামলা</option>
                            </select>
                        </div>
                    </div>
                 
             </div>

             <div className="-mx-3 flex flex-wrap">
             <div className="w-full px-3 sm:w-1/2">
                     <div className="mb-5">
                         <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                         উচ্চতা
                         </label>
                        
                         {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                         <input
                             id="division"
                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="উদাহরণ - (৫'১ - ৫'৬)"
                         />
                     
                         </div>
                         
                 </div>
                 <div className="w-full px-3 sm:w-1/2">
                     <div className="mb-5">
                         <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                            শিক্ষাগত যোগ্যতা
                         </label>
                        
                         {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                        
                         <input
                             id="division"
                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="শিক্ষাগত যোগ্যতা"
                         />
                         </div>
                 </div>
                 
             </div>
             <div className="mb-5">
                 <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                     জেলা
                 </label>
               
              <input type="text" name="name" id="name" placeholder="পরিবারের সাথে আলোচনা করে লিখুন"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
             </div>

             
           
             <div className="mb-5">
                 <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                     জীবন সঙ্গীর মধ্যে যেমন গুনাবলি প্রত্যাশা করেন
                 </label>
               
              <textarea type="text" name="name" id="name" placeholder="বিস্তারিত লিখুন"
                     className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
             </div>

             {/* ফাও */}
             <div className="mb-5 pt-3">
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                       বৈবাহিক অবস্থা
                 </label>
                 <select
                                name="maritalStatus"
                                id="maritalStatus"
                                required
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                                <option value="">নির্বাচন করুন</option>=
                                <option value="অবিবাহিত">অবিবাহিত</option>
                                <option value="বিবাহিত">বিবাহিত</option>
                                <option value="ডিভোর্স">ডিভোর্স</option>
                                <option value="বিধবা">বিধবা</option>
                                <option value="বিপত্নিক">বিপত্নিক</option>
                            </select>  </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    পেশা
                 </label>
                            <input type="text" name="city" id="city" placeholder="পেশার নাম"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                     ধর্মপরায়নতা
                 </label>
                            <input type="text" name="state" id="state" placeholder="ধর্মপরায়নতা"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                         <div className="mb-5">
                         <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                     পারিবারিক অর্থনৈতিক অবস্থা
                 </label>
                         <select
                             id="division"
                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                             
                         >
                             <option value="">মধ্যবৃত্ত</option>
                             <option value="">নিম্ন মধ্যবৃত্ত</option>
                             <option value="">উচ্চবৃত্ত</option>
                             <option value="">উচ্চ মধ্যবৃত্ত</option>
                             <option value="">নিম্নবৃত্ত</option>
                             <option value="">নিম্ন মধ্যবৃত্ত</option>
                         </select></div>
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

export default ExpectedPatnerForm;
