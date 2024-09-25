"use client"
import { tiroBangla } from '@/app/layout';
import React, { useState } from 'react';

const PrimaryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        skinTone: '',
        birthYear: '',
        nationality: '',
        maritalStatus: '',
        weight: '',
        height: '',
        bloodGroup: '',
        religion: '',
        familyTitle: '',
    });
    const isMuslim = formData["religion"] ? formData["religion"] === "ইসলাম" : true;

    console.log(isMuslim);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log all form values
        // You can also handle further actions like sending the data to a server
    };

    return (
        <div className={tiroBangla.className}>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
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
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="mobile" className="mb-3 block text-base font-medium text-[#07074D]">
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
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="skinTone" className="mb-3 block text-base font-medium text-[#07074D]">
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
                                <option value="">উজ্জল ফর্সা</option>
                                <option value="fair">ফর্সা</option>
                                <option value="black">কালো</option>
                                <option value="wheatish">শ্যামলা</option>
                                <option value="light_wheatish">উজ্জল শ্যামলা</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="birthYear" className="mb-3 block text-base font-medium text-[#07074D]">
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
                            <label htmlFor="nationality" className="mb-3 block text-base font-medium text-[#07074D]">
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
                            <label htmlFor="maritalStatus" className="mb-3 block text-base font-medium text-[#07074D]">
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
                                <option value="">অবিবাহিত</option>
                                <option value="married">বিবাহিত</option>
                                <option value="divorced">ডিভোর্স</option>
                                <option value="widowed">বিধবা</option>
                                <option value="widower">বিপত্নিক</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="weight" className="mb-3 block text-base font-medium text-[#07074D]">
                                ওজন
                            </label>
                            <input
                                type="number"
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
                            <label htmlFor="height" className="mb-3 block text-base font-medium text-[#07074D]">
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
    <option value="">৩'৬"</option>
    <option value="">৩'৭"</option>
    <option value="">৩'৮"</option>
    <option value="">৩'৯"</option>
    <option value="">৩'১০"</option>
    <option value="">৩'১১"</option>
    <option value="">৩'১২"</option>
    <option value="">৪'</option>
    <option value="">৪'১"</option>
    <option value="">৪'২"</option>
    <option value="">৪'৩"</option>
    <option value="">৪'৪"</option>
    <option value="">৪'৫"</option>
    <option value="">৪'৬"</option>
    <option value="">৪'৭"</option>
    <option value="">৪'৮"</option>
    <option value="">৪'৯"</option>
    <option value="">৪'১০"</option>
    <option value="">৪'১১"</option>
    <option value="">৪'১২"</option>
    <option value="">৫'</option>
    <option value="">৫'১"</option>
    <option value="">৫'২"</option>
    <option value="">৫'৩"</option>
    <option value="">৫'৪"</option>
    <option value="">৫'৫"</option>
    <option value="">৫'৬"</option>
    <option value="">৫'৭"</option>
    <option value="">৫'৮"</option>
    <option value="">৫'৯"</option>
    <option value="">৫'১০"</option>
    <option value="">৫'১১"</option>
    <option value="">৫'১২"</option>
    <option value="">৬'</option>
    <option value="">৬'১"</option>
    <option value="">৬'২"</option>
    <option value="">৬'৩"</option>
    <option value="">৬'৪"</option>
    <option value="">৬'৫"</option>
    <option value="">৬'৬"</option>
    <option value="">৬'৭"</option>
    <option value="">৬'৮"</option>
    <option value="">৬'৯"</option>
    <option value="">৬'১০"</option>
    <option value="">৬'১১"</option>
    <option value="6'12">৬'১২"</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="bloodGroup" className="mb-3 block text-base font-medium text-[#07074D]">
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
                                <option value="">বি পজেটিভ</option>
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
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="religion" className="mb-3 block text-base font-medium text-[#07074D]">
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
                                <option value="Islam">ইসলাম</option>
                                <option value="Hindu">সনাতন/হিন্দু</option>
                                <option value="Buddhist">বৈদ্ধ</option>
                                <option value="Christian">খ্রিষ্টান</option>
                                <option value="Jew">ইহুদি</option>
                                <option value="Qadiani">কাদিয়ানি</option>
                                <option value="Atheist">নাস্তিক</option>
                                <option value="Other">অননান্য</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="familyTitle" className="mb-3 block text-base font-medium text-[#07074D]">
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

                <div>
                    <button
                        type='submit'
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
