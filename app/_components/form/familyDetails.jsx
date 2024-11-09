import React from "react";

const FamilyDetails = () => {
  return (
    <div>
      <form>
        <div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  পিতার নাম (শুধু কর্তিপক্ষের জন্য)
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
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  আপনার পিতা কি জীবিত?
                </label>

                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                <select
                  id="division"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="">জ্বি , জীবিত</option>
                  <option value="">না , মৃত</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              পিতার পেশার বিবরণ
            </label>

            <textarea
              type="text"
              name="name"
              id="name"
              placeholder="বিস্তারিত লিখুন"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          {/* মাতার বিবরণ */}
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  মাতার নাম (শুধু কর্তিপক্ষের জন্য)
                </label>

                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                <input
                  id="division"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  আপনার মাতা কি জীবিত?
                </label>

                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                <select
                  id="division"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="মাতার নাম"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="">জ্বি , জীবিত</option>
                  <option value="">না , মৃত</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              মাতার পেশার বিবরণ
            </label>

            <textarea
              type="text"
              name="name"
              id="name"
              placeholder="বিস্তারিত লিখুন"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          {/* ভাই বোন  */}
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  আপনার ভাই এর সংখ্যা
                </label>

                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                <select
                  id="division"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="">০</option>
                  <option value="">১</option>
                  <option value="">২</option>
                  <option value="">৩</option>
                  <option value="">৪</option>
                  <option value="">৫</option>

                  <option value="">৬</option>
                  <option value="">৭</option>
                  <option value="">৮</option>
                  <option value="">৯</option>
                  <option value="">১০</option>
                </select>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  আপনার বোনের
                </label>

                {/* <label htmlFor="division" className="block text-sm mb-2">Division</label> */}
                <select
                  id="division"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="">০</option>
                  <option value="">১</option>
                  <option value="">২</option>
                  <option value="">৩</option>
                  <option value="">৪</option>
                  <option value="">৫</option>

                  <option value="">৬</option>
                  <option value="">৭</option>
                  <option value="">৮</option>
                  <option value="">৯</option>
                  <option value="">১০</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              ভাই বোনদের তথ্য বিস্তারিত লিখুন
            </label>

            <textarea
              type="text"
              name="name"
              id="name"
              placeholder="বিস্তারিত"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
            <p>
              শিক্ষাগত যোগ্যতা , বৈবাহিক অবস্থা ও পেশা লিখবেন। একাধিক ভাই থাকলে
              কমা দিয়ে নিচে লিখুন
            </p>
          </div>

          {/* চাচা মামাদের পেশা  */}

          {/* পারিবারিক অবস্থা */}
          <div className="mb-5 ">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
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
                  </select>
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    পারিবারিক অবস্থা বিবরণ
                  </label>
                  <textarea
                    type="text"
                    name="name"
                    id="name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white   px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* পারিবারিক দ্বিনি পরিবেশ */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              পারিবারিক ধর্মিয় পরিবেশ কেমন?
            </label>

            <textarea
              type="text"
              name="name"
              id="name"
              placeholder="বিস্তারিত"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          {/* ফাও */}
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              অতিরিক্ত তথ্য
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    খালা / মামাদের তথ্য
                  </label>
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder=" খালা / মামাদের তথ্য"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    চাচা / ফুপুদের তথ্য
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="চাচা / ফুপুদের তথ্য"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    অভিভাবক এর নম্বর
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="অভিভাবক এর নম্বর"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    অভিভাবক এর সাথে সম্পর্ক
                  </label>
                  <input
                    type="text"
                    name="post-code"
                    id="post-code"
                    placeholder="অভিভাবক এর সাথে সম্পর্ক"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          পরবর্তী
        </button>
      </form>
    </div>
  );
};

export default FamilyDetails;
