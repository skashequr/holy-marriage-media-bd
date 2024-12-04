import { setFamily } from "@/redux/familySlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const FamilyDetails = ({ onPageChange }) => {
  const handleNext = () => {
    onPageChange(5); // Move to the next page (Step 2)
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fatherName: "",
    fatherAlive: "",
    fatherProfession: "",
    motherName: "",
    motherAlive: "",
    motherProfession: "",
    brothersCount: "",
    sistersCount: "",
    siblingsDetails: "",
    economicStatus: "",
    familyStatus: "",
    religiousEnvironment: "",
    relativesInfo: {
      maternalUncles: "",
      paternalUncles: "",
      guardianPhone: "",
      guardianRelation: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRelativesChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      relativesInfo: {
        ...prevState.relativesInfo,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    dispatch(setFamily(formData));
    handleNext();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Father's Information */}
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  পিতার নাম (শুধু কর্তিপক্ষের জন্য)
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="পিতার নাম"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fatherAlive"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  আপনার পিতা কি জীবিত?
                </label>
                <select
                  name="fatherAlive"
                  value={formData.fatherAlive}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="alive">জ্বি , জীবিত</option>
                  <option value="deceased">না , মৃত</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="fatherProfession"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              পিতার পেশার বিবরণ
            </label>
            <textarea
              name="fatherProfession"
              value={formData.fatherProfession}
              onChange={handleInputChange}
              placeholder="বিস্তারিত লিখুন"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          {/* Mother's Information */}
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="motherName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  মাতার নাম (শুধু কর্তিপক্ষের জন্য)
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="মাতার নাম"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="motherAlive"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  আপনার মাতা কি জীবিত?
                </label>
                <select
                  name="motherAlive"
                  value={formData.motherAlive}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="alive">জ্বি , জীবিত</option>
                  <option value="deceased">না , মৃত</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="motherProfession"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              মাতার পেশার বিবরণ
            </label>
            <textarea
              name="motherProfession"
              value={formData.motherProfession}
              onChange={handleInputChange}
              placeholder="বিস্তারিত লিখুন"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          {/* Siblings Information */}
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="brothersCount"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  আপনার ভাই এর সংখ্যা
                </label>
                <select
                  name="brothersCount"
                  value={formData.brothersCount}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">নির্বাচন করুন</option>
                  {[...Array(11).keys()].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="sistersCount"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  আপনার বোনের সংখ্যা
                </label>
                <select
                  name="sistersCount"
                  value={formData.sistersCount}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">নির্বাচন করুন</option>
                  {[...Array(11).keys()].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="siblingsDetails"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              ভাই বোনদের তথ্য বিস্তারিত লিখুন
            </label>
            <textarea
              name="siblingsDetails"
              value={formData.siblingsDetails}
              onChange={handleInputChange}
              placeholder="বিস্তারিত"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
            <p>
              শিক্ষাগত যোগ্যতা , বৈবাহিক অবস্থা ও পেশা লিখবেন। একাধিক ভাই থাকলে
              কমা দিয়ে নিচে লিখুন
            </p>
          </div>

          {/* Family Economic Status */}
          <div className="mb-5">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="economicStatus"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    পারিবারিক অর্থনৈতিক অবস্থা
                  </label>
                  <select
                    name="economicStatus"
                    value={formData.economicStatus}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">মধ্যবৃত্ত</option>
                    <option value="lowerMiddleClass">নিম্ন মধ্যবৃত্ত</option>
                    <option value="upperMiddleClass">উচ্চ মধ্যবৃত্ত</option>
                    <option value="upperClass">উচ্চবৃত্ত</option>
                    <option value="lowerClass">নিম্নবৃত্ত</option>
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="familyStatus"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    পারিবারিক অবস্থা বিবরণ
                  </label>
                  <textarea
                    name="familyStatus"
                    value={formData.familyStatus}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Religious Environment */}
          <div className="mb-5">
            <label
              htmlFor="religiousEnvironment"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              পারিবারিক ধর্মিয় পরিবেশ কেমন?
            </label>
            <textarea
              name="religiousEnvironment"
              value={formData.religiousEnvironment}
              onChange={handleInputChange}
              placeholder="বিস্তারিত"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          {/* Additional Information */}
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              অতিরিক্ত তথ্য
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="maternalUncles"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    খালা / মামাদের তথ্য
                  </label>
                  <input
                    type="text"
                    name="maternalUncles"
                    value={formData.relativesInfo.maternalUncles}
                    onChange={handleRelativesChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="paternalUncles"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    চাচা / ফুপুদের তথ্য
                  </label>
                  <input
                    type="text"
                    name="paternalUncles"
                    value={formData.relativesInfo.paternalUncles}
                    onChange={handleRelativesChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="guardianPhone"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    অভিভাবক এর নম্বর
                  </label>
                  <input
                    type="text"
                    name="guardianPhone"
                    value={formData.relativesInfo.guardianPhone}
                    onChange={handleRelativesChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="guardianRelation"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    অভিভাবক এর সাথে সম্পর্ক
                  </label>
                  <input
                    type="text"
                    name="guardianRelation"
                    value={formData.relativesInfo.guardianRelation}
                    onChange={handleRelativesChange}
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
        </div>
      </form>
    </div>
  );
};

export default FamilyDetails;
