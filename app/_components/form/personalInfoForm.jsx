import { setPersonalData } from "@/redux/personalDataSlice";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const PersonalInfoForm = ({ onPageChange }) => {
  const handleNext = () => {
    onPageChange(6); // Move to the next page (Step 2)
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    voterOrBirthRegistrationNo: "",
    voterOrBirthRegistrationPhoto: null,
    mobileNumber: "",
    currentPhoto: null,
    hobbies: "",
    religiousView: "",
    disabilityStatus: "",
    secondMarriageThoughts: "",
    financialSource: "",
    fatherVoterIdPhoto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // If the file is not null, upload it and get the URL
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        // Replace with your image upload URL
        const response = await axios.post(
          "https://api.imgix.com/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              // Add any necessary headers like API keys
            },
          }
        );
        const imageUrl = response.data.url; // Get image URL from response

        // Update formData with the image URL
        setFormData((prevData) => ({
          ...prevData,
          [name]: imageUrl, // Store the URL in state
        }));
      } catch (error) {
        console.error("Error uploading file", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    dispatch(setPersonalData(formData));
    // You can handle the form submission here, like sending data to an API.
    handleNext();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="voterOrBirthRegistrationNo"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  ভোটার আইডি / জন্মনিবন্ধন নম্বর
                </label>
                <input
                  id="voterOrBirthRegistrationNo"
                  name="voterOrBirthRegistrationNo"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="পিতার নাম"
                  value={formData.voterOrBirthRegistrationNo}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="voterOrBirthRegistrationPhoto"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  ভোটার আইডি / জন্মনিবন্ধন নম্বর ছবি
                </label>
                <label
                  className="flex cursor-pointer appearance-none justify-center py-3 px-6 rounded-md border border-dashed border-gray-300 bg-white text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                  tabIndex="0"
                >
                  <span className="flex items-center space-x-2">
                    <svg
                      className="h-6 w-6 stroke-gray-400"
                      viewBox="0 0 256 256"
                    >
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
                  <input
                    id="voterOrBirthRegistrationPhoto"
                    name="voterOrBirthRegistrationPhoto"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="mobileNumber"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  পাত্রের মোবাইল নম্বর
                </label>
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="মোবাইল নম্বর"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="currentPhoto"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  পাত্রের/পাত্রির বর্তমান ছবি
                </label>
                <label
                  className="flex cursor-pointer appearance-none justify-center py-3 px-6 rounded-md border border-dashed border-gray-300 bg-white text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                  tabIndex="0"
                >
                  <span className="flex items-center space-x-2">
                    <svg
                      className="h-6 w-6 stroke-gray-400"
                      viewBox="0 0 256 256"
                    >
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
                  <input
                    id="currentPhoto"
                    name="currentPhoto"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="hobbies"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              নিজের শখ,পছন্দ-অপছন্দ,রুচিবোধ,স্বপ্ন ইত্যাদি বিষয়ে লিখুন
            </label>
            <textarea
              name="hobbies"
              id="hobbies"
              placeholder="বিস্তারিত লিখুন"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.hobbies}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              htmlFor="religiousView"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              নিজের ধর্মীয় দৃষ্টিভঙ্গি সম্পর্ক বিস্তারিত লিখুন
            </label>
            <textarea
              name="religiousView"
              id="religiousView"
              placeholder="বিস্তারিত লিখুন"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.religiousView}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              অতিরিক্ত তথ্য
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="disabilityStatus"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    আপনার কি কোনো প্রতিবন্ধকাতা আছে?
                  </label>
                  <select
                    name="disabilityStatus"
                    id="disabilityStatus"
                    value={formData.disabilityStatus}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="কোনো প্রতিবন্ধকাতা নেই">
                      কোনো প্রতিবন্ধকাতা নেই
                    </option>
                    <option value="সামান্য প্রতিবন্ধকাতা আছে">
                      সামান্য প্রতিবন্ধকাতা আছে
                    </option>
                    <option value="প্রতিবন্ধকাতা আছে">প্রতিবন্ধকাতা আছে</option>
                    <option value="অটিজম">অটিজম</option>
                    <option value="মানুষিক প্রতিবন্ধকাতা">
                      মানুষিক প্রতিবন্ধকাতা
                    </option>
                  </select>
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="secondMarriageThoughts"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    একাধিক বিয়ে নিয়ে আপনার চিন্তাভাবনা
                  </label>
                  <input
                    type="text"
                    name="secondMarriageThoughts"
                    id="secondMarriageThoughts"
                    placeholder="চিন্তাভাবনা"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.secondMarriageThoughts}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="financialSource"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    আপনার আর্থিক সোর্স
                  </label>
                  <input
                    type="text"
                    name="financialSource"
                    id="financialSource"
                    placeholder="বিস্তারিত লিখুন"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.financialSource}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="fatherVoterIdPhoto"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    পিতার ভোটার আইডি ছবি
                  </label>
                  <label
                    className="flex cursor-pointer appearance-none justify-center py-3 px-6 rounded-md border border-dashed border-gray-300 bg-white text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    tabIndex="0"
                  >
                    <span className="flex items-center space-x-2">
                      <svg
                        className="h-6 w-6 stroke-gray-400"
                        viewBox="0 0 256 256"
                      >
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
                    <input
                      id="fatherVoterIdPhoto"
                      name="fatherVoterIdPhoto"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
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
    </div>
  );
};

export default PersonalInfoForm;
