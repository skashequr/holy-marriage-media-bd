import { setMarriageInfo } from "@/redux/marriageInfoSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MarageInfoForm = ({ onPageChange }) => {
  const handleNext = () => {
    onPageChange(7); // Move to the next page (Step 2)
  };
  const personalData = useSelector((state) => state.personalInfo);
  const bioDataType = personalData?.personalInfo?.bioDataType;
  const dispatch = useDispatch();

  // Initialize state to hold form data
  const [formData, setFormData] = useState({
    guardianConsent: "",
    jobAfterMarriage: "",
    workPreference: "",
    studyAfterMarriage: "",
    acceptStudent: "",
    livingArrangement: "",
    separateLiving: "",
    thoughtsOnMarriage: "",
    expectationsFromOppositeSide: "",
    reasonForMarriage: "",
    dowry: "",
    pastRelationship: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(setMarriageInfo(formData));
    handleNext();
    // You can submit the form data to an API or Redux store here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="guardianConsent"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                আপনার অভিভাবক আপনার বিয়েতে রাজি কি না?
              </label>
              <input
                id="guardianConsent"
                name="guardianConsent"
                value={formData.guardianConsent}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                placeholder="হ্যাঁ/না"
              />
            </div>
          </div>

          {bioDataType === "পাত্র" ? (
            <>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="jobAfterMarriage"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    বিয়ের পর স্ত্রিকে কাজ করতে দিবেন কি না?
                  </label>
                  <input
                    id="jobAfterMarriage"
                    name="jobAfterMarriage"
                    value={formData.jobAfterMarriage}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    placeholder="বিস্তারিত"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="workPreference"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    বিয়ের আপনি কি কাজ করতে ইচ্ছুক?
                  </label>
                  <input
                    id="workPreference"
                    name="workPreference"
                    value={formData.workPreference}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    placeholder="বিস্তারিত"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="-mx-3 flex flex-wrap">
          {bioDataType === "পাত্র" ? (
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="studyAfterMarriage"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  বিয়ের পর স্ত্রিকে পড়াশোনা করতে দিবেন কি না?
                </label>
                <input
                  id="studyAfterMarriage"
                  name="studyAfterMarriage"
                  value={formData.studyAfterMarriage}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="বিস্তারিত"
                />
              </div>
            </div>
          ) : (
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="acceptStudent"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  পাত্র হিসেবে কোনো ছাত্রকে গ্রহণ করবেন কিনা?
                </label>
                <input
                  id="acceptStudent"
                  name="acceptStudent"
                  value={formData.acceptStudent}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="বিস্তারিত"
                />
              </div>
            </div>
          )}

          {bioDataType === "পাত্র" ? (
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="livingArrangement"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  বিয়ের পর স্ত্রিকে নিয়ে কোথায় থাকবেন?
                </label>
                <input
                  id="livingArrangement"
                  name="livingArrangement"
                  value={formData.livingArrangement}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="বিস্তারিত"
                />
              </div>
            </div>
          ) : (
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="separateLiving"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  বিয়ের পর আলাদা থাকা পছন্দ কবেন?
                </label>
                <input
                  id="separateLiving"
                  name="separateLiving"
                  value={formData.separateLiving}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="বিস্তারিত"
                />
              </div>
            </div>
          )}
        </div>

        {/* Additional fields... */}
        <div className="mb-5">
          <label
            htmlFor="thoughtsOnMarriage"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            বিয়ে সম্পর্কে আপনার চিন্তাভাবনা লিখুন
          </label>
          <textarea
            name="thoughtsOnMarriage"
            id="thoughtsOnMarriage"
            value={formData.thoughtsOnMarriage}
            onChange={handleChange}
            placeholder="বিস্তারিত লিখুন"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>

        {/* Expectations */}
        <div className="mb-5 pt-3">
          <div className="-mx-3 flex flex-wrap">
            {bioDataType === "পাত্র" ? (
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="expectationsFromOppositeSide"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    আপনারা পাত্রি পক্ষের কাছে কিছু আশা করেন কি না?
                  </label>
                  <input
                    type="text"
                    name="expectationsFromOppositeSide"
                    id="expectationsFromOppositeSide"
                    value={formData.expectationsFromOppositeSide}
                    onChange={handleChange}
                    placeholder="বিস্তারিত"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="expectationsFromOppositeSide"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    আপনারা পাত্র পক্ষের কাছে কিছু আশা করেন কি না?
                  </label>
                  <input
                    type="text"
                    name="expectationsFromOppositeSide"
                    id="expectationsFromOppositeSide"
                    value={formData.expectationsFromOppositeSide}
                    onChange={handleChange}
                    placeholder="বিস্তারিত"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            )}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="reasonForMarriage"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  আপনি কেনো বিয়ে করছেন?
                </label>
                <input
                  type="text"
                  name="reasonForMarriage"
                  id="reasonForMarriage"
                  value={formData.reasonForMarriage}
                  onChange={handleChange}
                  placeholder="বিস্তারিত"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="dowry"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  দেনমোহর
                </label>
                <input
                  type="text"
                  name="dowry"
                  id="dowry"
                  value={formData.dowry}
                  onChange={handleChange}
                  placeholder="দেনমোহর"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="pastRelationship"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  কখনো জিনায় লিপ্ত ছিলেন বা আছেন কি না?
                </label>
                <input
                  type="text"
                  name="pastRelationship"
                  id="pastRelationship"
                  value={formData.pastRelationship}
                  onChange={handleChange}
                  placeholder="অভিভাবক এর সাথে সম্পর্ক"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
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

export default MarageInfoForm;
