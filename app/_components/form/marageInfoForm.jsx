import React from 'react';

const MarageInfoForm = () => {
    return (


        <div>
            <form>
            <div className="-mx-3 flex flex-wrap">
             <div className="w-full px-3 sm:w-1/2">
                     <div className="mb-5">
                         <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                         আপনার অভিভাবক আপনার বিয়েতে রাজি কি না?
                         </label>
                        
                         {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                         <input
                             id="division"
                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="হ্যাঁ/না"
                         />
                     
                         </div>
                         
                 </div>
                 <div className="w-full px-3 sm:w-1/2">
                     <div className="mb-5">
                         <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                            বিয়ের পর স্ত্রিকে কাজ করতে দিবেন কি না?
                         </label>
                        
                         {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                        
                         <input
                             id="division"
                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="বিস্তারিত"
                         />
                         </div>
                 </div>
                 
             </div>

             <div className="-mx-3 flex flex-wrap">
             <div className="w-full px-3 sm:w-1/2">
                     <div className="mb-5">
                         <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                         বিয়ের পর স্ত্রিকে পড়াশোনা করতে দিবেন কি না?
                         </label>
                        
                         {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                         <input
                             id="division"
                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="বিস্তারিত"
                         />
                     
                         </div>
                         
                 </div>
                 <div className="w-full px-3 sm:w-1/2">
                     <div className="mb-5">
                         <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                            বিয়ের পর স্ত্রিকে নিয়ে কোথায় থাকবেন?
                         </label>
                        
                         {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                        
                         <input
                             id="division"
                             className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="বিস্তারিত"
                         />
                         </div>
                 </div>
                 
             </div>
             <div className="mb-5">
                 <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                     বিয়ে সম্পর্কে আপনার চিন্তাভাবনা লিখুন
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
                       আপনারা পাত্রি পক্ষের কাছে কিছু আশা করেন কি না?
                 </label>
                            <input type="text" name="area" id="area" placeholder="বিস্তারিত"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                     আপনি কেনো বিয়ে করছেন?
                 </label>
                            <input type="text" name="city" id="city" placeholder="বিস্তারিত"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                     দেনমোহর
                 </label>
                            <input type="text" name="state" id="state" placeholder="দেনমোহর"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                        কখনো জিনায় লিপ্ত ছিলেন বা আছেন কি না?
                 </label>
                            <input type="text" name="post-code" id="post-code" placeholder="অভিভাবক এর সাথে সম্পর্ক"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
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

export default MarageInfoForm;