import { setExpectedPatner } from "@/redux/expectedPatnerSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ExpectedPatnerForm = () => {
  const [formData, setFormData] = useState({
    ageRange: "",
    skinTone: "",
    height: "",
    education: "",
    district: "",
    expectedQualities: "",
    maritalStatus: "",
    profession: "",
    religiosity: "",
    familyEconomicStatus: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the formData to your backend or process it as needed
    console.log(formData);
    dispatch(setExpectedPatner(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Age Range */}
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="ageRange"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                বয়স
              </label>
              <input
                id="ageRange"
                name="ageRange"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                placeholder="উদাহরণ  (১৪-২২)"
                value={formData.ageRange}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Skin Tone */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="skinTone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                গাত্র বর্ণ
              </label>
              <select
                name="skinTone"
                id="skinTone"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.skinTone}
                onChange={handleChange}
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

        {/* Height */}
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="height"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                উচ্চতা
              </label>
              <input
                id="height"
                name="height"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                placeholder="উদাহরণ - (৫'১ - ৫'৬)"
                value={formData.height}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Education */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="education"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                শিক্ষাগত যোগ্যতা
              </label>
              <input
                id="education"
                name="education"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                placeholder="শিক্ষাগত যোগ্যতা"
                value={formData.education}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* District */}
        <div className="mb-5">
          <label
            htmlFor="district"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            জেলা
          </label>
          <input
            type="text"
            name="district"
            id="district"
            placeholder="পরিবারের সাথে আলোচনা করে লিখুন"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={formData.district}
            onChange={handleChange}
          />
        </div>

        {/* Expected Qualities */}
        <div className="mb-5">
          <label
            htmlFor="expectedQualities"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            জীবন সঙ্গীর মধ্যে যেমন গুনাবলি প্রত্যাশা করেন
          </label>
          <textarea
            name="expectedQualities"
            id="expectedQualities"
            placeholder="বিস্তারিত লিখুন"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={formData.expectedQualities}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Marital Status */}
        <div className="mb-5 pt-3">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="maritalStatus"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  বৈবাহিক অবস্থা
                </label>
                <select
                  name="maritalStatus"
                  id="maritalStatus"
                  required
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="অবিবাহিত">অবিবাহিত</option>
                  <option value="বিবাহিত">বিবাহিত</option>
                  <option value="ডিভোর্স">ডিভোর্স</option>
                  <option value="বিধবা">বিধবা</option>
                  <option value="বিপত্নিক">বিপত্নিক</option>
                </select>
              </div>
            </div>

            {/* Profession */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="profession"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  পেশা
                </label>
                <input
                  type="text"
                  name="profession"
                  id="profession"
                  placeholder="পেশার নাম"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.profession}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Religiosity */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="religiosity"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  ধর্মপরায়নতা
                </label>
                <input
                  type="text"
                  name="religiosity"
                  id="religiosity"
                  placeholder="ধর্মপরায়নতা"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.religiosity}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Family Economic Status */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="familyEconomicStatus"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  পারিবারিক অর্থনৈতিক অবস্থা
                </label>
                <select
                  id="familyEconomicStatus"
                  name="familyEconomicStatus"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.familyEconomicStatus}
                  onChange={handleChange}
                >
                  <option value="">মধ্যবৃত্ত</option>
                  <option value="নিম্ন মধ্যবৃত্ত">নিম্ন মধ্যবৃত্ত</option>
                  <option value="উচ্চবৃত্ত">উচ্চবৃত্ত</option>
                  <option value="উচ্চ মধ্যবৃত্ত">উচ্চ মধ্যবৃত্ত</option>
                  <option value="নিম্নবৃত্ত">নিম্নবৃত্ত</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
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

export default ExpectedPatnerForm;
