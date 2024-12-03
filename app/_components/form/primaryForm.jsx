"use client";
import { useDispatch } from "react-redux";
import { tiroBangla } from "../../layout";
import React, { useEffect, useState } from "react";
import { setPersonalInfo } from "@/redux/slice";

const PrimaryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    skinTone: "",
    birthYear: "",
    nationality: "",
    bioDataType: "",

    birthYear: "",
    bleive: "",
    bloodGroup: "",
    familyTitle: "",
    height: "",
    maritalStatus: "",

    weight: "",
    height: "",
    bloodGroup: "",
    religion: "",
    bleive: "",
    familyTitle: "",
    bioDataType: "",
    email: "",
    maternalGrandfatherName: "",
    paternalGrandfatherName: "",
  });

  const isMuslimsFun = (e) => {
    if (formData["religion"] === e) {
      return true;
    } else {
      return false;
    }
  };
  const isMuslim = isMuslimsFun("ইসলাম");
  const isHindu = isMuslimsFun("হিন্দু");
  const isBoddho = isMuslimsFun("বৈদ্ধ");
  const isKhristan = isMuslimsFun("খ্রিষ্টান");
  const isIhudi = isMuslimsFun("ইহুদি");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name); // Logs the name of the field (e.g., 'email')
    console.log(value); // Logs the new value entered by the user (e.g., the email address)

    setFormData({
      ...formData,
      [name]: value, // Dynamically sets the value for the appropriate field
    });
  };

  useEffect(() => {
    // Load existing data from localStorage if available
    const storedData = localStorage.getItem("primeryFormData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log all form values
    // You can also handle further actions like sending the data to a server
    dispatch(setPersonalInfo(formData));
    console.log(formData);
    localStorage.setItem("primeryFormData", JSON.stringify(formData));
  };

  return (
    <div className={tiroBangla.className}>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            পুরো নাম
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/3">
            <div className="mb-5">
              <label
                htmlFor="mobile"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                মোবাইল নম্বর
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/3">
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
                value={formData.skinTone}
                onChange={handleChange}
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
          <div className="w-full px-3 sm:w-1/3">
            <div className="mb-5">
              <label
                htmlFor="bioDataType"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                বায়োডাটার ধরণ
              </label>
              <select
                name="bioDataType"
                id="bioDataType"
                required
                value={formData.bioDataType}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="পাত্র">পাত্র</option>
                <option value="পাত্রি">পাত্রি</option>
              </select>
            </div>
          </div>
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/3">
            <div className="mb-5">
              <label
                htmlFor="birthYear"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                জন্মসন
              </label>
              <input
                type="date"
                name="birthYear"
                id="birthYear"
                required
                value={formData.birthYear}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/3">
            <div className="mb-5">
              <label
                htmlFor="nationality"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                জাতীয়তা
              </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                required
                value={formData.nationality}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/3">
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
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">নির্বাচন করুন</option>=
                <option value="অবিবাহিত">অবিবাহিত</option>
                <option value="বিবাহিত">বিবাহিত</option>
                <option value="ডিভোর্স">ডিভোর্স</option>
                <option value="বিধবা">বিধবা</option>
                <option value="বিপত্নিক">বিপত্নিক</option>
              </select>
            </div>
          </div>
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/3">
            <div className="mb-5">
              <label
                htmlFor="weight"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                ওজন
              </label>
              <input
                type="text"
                name="weight"
                id="weight"
                required
                value={formData.weight}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          <div className="w-full px-3 sm:w-1/3">
            <div className="mb-5">
              <label
                htmlFor="height"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                উচ্চতা
              </label>
              <select
                name="height"
                id="height"
                required
                value={formData.height}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">৩'৫"</option>
                <option value="">নির্বাচন করুন</option>
                <option value="৩'৭">৩'৭"</option>
                <option value="৩'৮">৩'৮"</option>
                <option value="৩'৯">৩'৯"</option>
                <option value="৩'১০">৩'১০"</option>
                <option value="৩'১১">৩'১১"</option>
                <option value="৩'১২">৩'১২"</option>
                <option value="৪">৪'</option>
                <option value="৪'১">৪'১"</option>
                <option value="৪'২">৪'২"</option>
                <option value="৪'৩">৪'৩"</option>
                <option value="৪'৪">৪'৪"</option>
                <option value="৪'৫">৪'৫"</option>
                <option value="৪'৬">৪'৬"</option>
                <option value="৪'৭">৪'৭"</option>
                <option value="৪'৮">৪'৮"</option>
                <option value="৪'৯">৪'৯"</option>
                <option value="৪'১০">৪'১০"</option>
                <option value="৪'১১">৪'১১"</option>
                <option value="৪'১২">৪'১২"</option>
                <option value="৫">৫'</option>
                <option value="৫'১">৫'১"</option>
                <option value="৫'২">৫'২"</option>
                <option value="৫'৩">৫'৩"</option>
                <option value="৫'৪">৫'৪"</option>
                <option value="৫'৫">৫'৫"</option>
                <option value="৫'৬">৫'৬"</option>
                <option value="৫'৭">৫'৭"</option>
                <option value="৫'৮">৫'৮"</option>
                <option value="৫'৯">৫'৯"</option>
                <option value="৫'১০">৫'১০"</option>
                <option value="৫'১১">৫'১১"</option>
                <option value="৫'১২">৫'১২"</option>
                <option value="৬">৬'</option>
                <option value="৬'১">৬'১"</option>
                <option value="৬'২">৬'২"</option>
                <option value="৬'৩">৬'৩"</option>
                <option value="৬'৪">৬'৪"</option>
                <option value="৬'৫">৬'৫"</option>
                <option value="৬'৬">৬'৬"</option>
                <option value="৬'৭">৬'৭"</option>
                <option value="৬'৮">৬'৮"</option>
                <option value="৬'৯">৬'৯"</option>
                <option value="৬'১০">৬'১০"</option>
                <option value="৬'১১">৬'১১"</option>
                <option value="৬'12">৬'১২"</option>
              </select>
            </div>
          </div>

          <div className="w-full px-3 sm:w-1/3">
            <div className="mb-5">
              <label
                htmlFor="bloodGroup"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                রক্তের গ্রুপ
              </label>
              <select
                name="bloodGroup"
                id="bloodGroup"
                required
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="B+">বি পজেটিভ</option>
                <option value="B-">বি নেগেটিভ</option>
                <option value="A+">এ পজেটিভ</option>
                <option value="A-">এ নেগেটিভ</option>
                <option value="AB+">এ বি পজেটিভ</option>
                <option value="AB-">এ বি নেগেটিভ</option>
              </select>
            </div>
          </div>
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div
            className={`w-full px-3 ${
              isMuslim || isBoddho || isHindu || isIhudi || isKhristan
                ? "sm:w-1/3"
                : "sm:w-full"
            }`}
          >
            <div className="mb-5">
              <label
                htmlFor="religion"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                ধর্ম
              </label>
              <select
                name="religion"
                id="religion"
                required
                value={formData.religion}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="ইসলাম">ইসলাম</option>
                <option value="হিন্দু">সনাতন/হিন্দু</option>
                <option value="বৈদ্ধ">বৈদ্ধ</option>
                <option value="খ্রিষ্টান">খ্রিষ্টান</option>
                <option value="ইহুদি">ইহুদি</option>
                <option value="কাদিয়ানি">কাদিয়ানি</option>
                <option value="নাস্তিক">নাস্তিক</option>

                <option value="হিজবুত তাওহীদ">হিজবুত তাওহীদ</option>
                <option value="দেওয়ানবাগী">দেওয়ানবাগী</option>
                <option value="অননান্য">অননান্য</option>
              </select>
            </div>
          </div>
          <div
            className={`w-full px-3 ${
              isMuslim || isBoddho || isHindu || isIhudi || isKhristan
                ? "sm:w-1/3"
                : "sm:w-1/2"
            }`}
          >
            {isMuslim || isBoddho || isHindu || isIhudi || isKhristan ? (
              <div className="mb-5">
                <label
                  htmlFor="religion"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  {isMuslim || isBoddho || isHindu || isIhudi || isKhristan
                    ? "বিশ্বাস"
                    : ""}
                </label>

                {isMuslim ? (
                  <select
                    name="bleive"
                    id="religion"
                    required
                    value={formData.bleive}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="শিয়া">শিয়া</option>
                    <option value="হানাফি">হানাফি</option>
                    <option value="মালেকি">মালেকি</option>
                    <option value="হাম্বলি">হাম্বলি</option>
                    <option value="সালাফি">সালাফি</option>
                    <option value="সুন্নি">সুন্নি</option>
                    <option value="অননান্য">অননান্য</option>
                  </select>
                ) : (
                  ""
                )}

                {isHindu ? (
                  <select
                    name="bleive"
                    id="religion"
                    required
                    value={formData.bleive}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="বৈষ্ণবধর্ম">বৈষ্ণবধর্ম</option>
                    <option value="শৈবধর্ম">শৈবধর্ম</option>
                    <option value="শাক্তধর্ম">শাক্তধর্ম</option>
                    <option value="স্মার্তবাদ">স্মার্তবাদ</option>
                  </select>
                ) : (
                  ""
                )}
                {isBoddho ? (
                  <select
                    name="bleive"
                    id="religion"
                    required
                    value={formData.bleive}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="থেরবাদ">থেরবাদ</option>
                    <option value="শৈবধর্ম">মহাযান</option>
                    <option value="শাক্তধর্ম">বজ্রযান</option>
                  </select>
                ) : (
                  ""
                )}

                {isKhristan ? (
                  <select
                    name="bleive"
                    id="religion"
                    required
                    value={formData.bleive}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="ক্যাথলিক মণ্ডলী">ক্যাথলিক মণ্ডলী</option>
                    <option value="প্রোটেস্টান্ট মণ্ডলী">
                      প্রোটেস্টান্ট মণ্ডলী
                    </option>
                    <option value="অর্থোডক্স">অর্থোডক্স</option>
                  </select>
                ) : (
                  ""
                )}

                {isIhudi ? (
                  <select
                    name="bleive"
                    id="religion"
                    required
                    value={formData.bleive}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="অর্থোডক্স">অর্থোডক্স</option>
                    <option value="রক্ষণশীল">রক্ষণশীল</option>
                    <option value="সংস্কার">সংস্কার</option>
                    <option value="মানবতাবাদী">মানবতাবাদী</option>
                  </select>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className={`w-full px-3 ${
              isMuslim || isBoddho || isHindu || isIhudi || isKhristan
                ? "sm:w-1/3"
                : "sm:w-full"
            }`}
          >
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                বংশীয় উপাধি
              </label>
              <input
                type="text"
                name="familyTitle"
                id="familyTitle"
                required
                value={formData.familyTitle}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="mb-5 pt-3">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  ই-মেইল
                </label>
                <input
                  type="email"
                  name="email"
                  id="area"
                  value={formData?.email} // Bind to the email value in the formData state
                  onChange={handleChange} // Handle changes via handleChange function
                  placeholder="exp@gmail.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  অভিভাবক এর নম্বর
                </label>
                <input
                  type="text"
                  name="guirdianNumber"
                  id="city"
                  placeholder="নম্বর"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  নানার বংশ
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder=" নানার নাম"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  দাদার বংশ
                </label>
                <input
                  type="text"
                  name="post-code"
                  id="post-code"
                  placeholder="দাদার নাম"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
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

export default PrimaryForm;
