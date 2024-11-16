import React, { useState } from "react";

const OngicarNama = () => {
  // Initialize the state for each input field
  const [formData, setFormData] = useState({
    familyConsent: "",
    addedToCommunity: "",
    legalActionWarning: "",
    dowryAmount: "",
  });

  // Handle change for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the respective field in the state
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Output the collected form data
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mb-5 pt-3">
            <div className="-mx-3 flex flex-wrap">
              {/* Family Consent */}
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    এখানে রেজিষ্টিশন করছেন পরিবার জানে?
                  </label>
                  <select
                    name="familyConsent"
                    value={formData.familyConsent}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="হ্যাঁ">হ্যাঁ</option>
                    <option value="না">না</option>
                  </select>
                </div>
              </div>

              {/* Added to Facebook Community */}
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    আমাদের ফেইসবুক কমিউনিটিতে এড হয়েছেন?
                  </label>
                  <select
                    name="addedToCommunity"
                    value={formData.addedToCommunity}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="হ্যাঁ">হ্যাঁ</option>
                    <option value="না">না</option>
                  </select>
                </div>
              </div>

              {/* Legal Action Warning */}
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    ভূল তথ্যের জন্য কর্তিপক্ষ আইনি পদক্ষেপ নিতে পারবে।
                  </label>
                  <select
                    name="legalActionWarning"
                    value={formData.legalActionWarning}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="হ্যাঁ">হ্যাঁ</option>
                  </select>
                </div>
              </div>

              {/* Dowry Amount */}
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    বিয়ে সম্পাদিত হলে আমাদের কত টাকা দিবেন?
                  </label>
                  <input
                    type="text"
                    name="dowryAmount"
                    value={formData.dowryAmount}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    placeholder="টাকা"
                  />
                </div>
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

export default OngicarNama;
