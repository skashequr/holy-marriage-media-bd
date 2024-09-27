"use client"
import { useState } from "react";

const EducationForm = () => {
    const [formData, setFormData] = useState({
        medium: '',
        highestQualification: '',
        otherQualifications: '',
        ssc: { name: '', year: '', group: '' },
        hsc: { name: '', year: '', group: '' },
        university: { name: '', year: '', department: '' }
    });

    const medium = (e) => {
        if (formData.medium == e) {
            return true;
        }
    }
    formData

    const isGenerel = medium("জেনারেল");
    console.log(isGenerel);

    const isKowmi = medium("ক্বওমি");
    const isAliya = medium("আলিয়া");
    const isEnglish = medium("ইংরেজি মাধ্যম");


    console.log(isGenerel);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNestedChange = (e, category) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [category]: {
                ...prevData[category],
                [name]: value,
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Here you can handle the form data, e.g., send to an API
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="medium" className="mb-3 block text-base font-medium text-[#07074D]">
                            আপনার শিক্ষাগত মাধ্যম
                        </label>
                        <select
                            id="medium"
                            name="medium"
                            value={formData.medium}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                            <option value="">নির্বাচন করুন</option>
                            <option value="জেনারেল">জেনারেল</option>
                            <option value="ইংরেজি মাধ্যম">ইংরেজি মাধ্যম</option>
                            <option value="আলিয়া">আলিয়া</option>
                            <option value="ক্বওমি">ক্বওমি</option>
                        </select>
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="highestQualification" className="mb-3 block text-base font-medium text-[#07074D]">
                            সর্বচ্চ শিক্ষাগত যোগ্যতা
                        </label>
                        <select
                            id="highestQualification"
                            name="highestQualification"
                            value={formData.highestQualification}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                            {
                                isKowmi ? (<>
                                    <option value="">নির্বাচন করুন</option>
                                    <option value="হিফিজ খানা">হিফিজ খানা</option>
                                    <option value="উর্দু">উর্দু</option>
                                    <option value="তায়সার">তায়সার</option>
                                    <option value="মিজান">মিজান</option>
                                    <option value="নাহবেমির">নাহবেমির</option>
                                    <option value="হেদায়াতুন নাহু">হেদায়াতুন নাহু</option>
                                    <option value="শাহরে বেকায়া">শাহরে বেকায়া</option>
                                    <option value="জালালাইন">জালালাইন</option>
                                    <option value="মিশকাত">মিশকাত</option>
                                    <option value="দাওরায়ে হাদিস">দাওরায়ে হাদিস</option>
                                    <option value="ইফতা">ইফতা</option>
                                    <option value="আদব">আদব</option>
                                </>) : ""}
                            <option value="">নির্বাচন করুন</option>
                            <option value="এস এস সির নিচে">এস এস সির নিচে</option>
                            <option value="এস এস সি চলমান">এস এস সি চলমান</option>
                            <option value="এইচ এস সি চলমান">এইচ এস সি চলমান</option>
                            <option value="এইচ এস সি">এইচ এস সি</option>
                            <option value="অনার্স চলমান">অনার্স চলমান</option>
                            <option value="ডিগ্রি চলমান">ডিগ্রি চলমান</option>
                            <option value="ডিগ্রি">ডিগ্রি</option>
                            <option value="অনার্স">অনার্স</option>
                            <option value="স্নাতকোত্তর চলমান">স্নাতকোত্তর চলমান</option>
                            <option value="স্নাতকোত্তর">স্নাতকোত্তর</option>
                            <option value="ডক্টরেট">ডক্টরেট</option>
                            <option value="অষ্টম শ্রেণির নিচে">অষ্টম শ্রেণির নিচে</option>
                            <option value="পঞ্চম শ্রেনির নিচে">পঞ্চম শ্রেনির নিচে</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="otherQualifications" className="mb-3 block text-base font-medium text-[#07074D]">
                    অননান্য শিক্ষাগত যোগ্যতা
                </label>
                <textarea
                    name="otherQualifications"
                    id="otherQualifications"
                    value={formData.otherQualifications}
                    onChange={handleChange}
                    placeholder="অননান্য শিক্ষাগত যোগ্যতা"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
            </div>


            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                জেনারেল বিভাগ
            </label>
            <div className="-mx-3 flex flex-wrap">
                {/* SSC Section */}
                <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="এস এস সি/দাখিল/সমমান"
                            value={formData.ssc.name}
                            onChange={(e) => handleNestedChange(e, 'ssc')}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <input
                            type="number"
                            name="year"
                            placeholder="পাশের সন"
                            value={formData.ssc.year}
                            onChange={(e) => handleNestedChange(e, 'ssc')}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/3">
                    <div className="mb-5">
                        <select
                            name="group"
                            value={formData.ssc.group}
                            onChange={(e) => handleNestedChange(e, 'ssc')}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                            <option value="">বিজ্ঞান</option>
                            <option value="humanities">মানবিক</option>
                            <option value="business">ব্যাবসায়ে শিক্ষা</option>
                            <option value="vocational">ভোকেশনাল</option>
                        </select>
                    </div>
                </div>

            </div>



            <div className="mb-5 pt-3">

                {
                    isGenerel ? (<>
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            জেনারেল বিভাগ
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            {/* SSC Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="এস এস সি/দাখিল/সমমান"
                                        value={formData.ssc.name}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.ssc.year}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <select
                                        name="group"
                                        value={formData.ssc.group}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">বিজ্ঞান</option>
                                        <option value="humanities">মানবিক</option>
                                        <option value="business">ব্যাবসায়ে শিক্ষা</option>
                                        <option value="vocational">ভোকেশনাল</option>
                                    </select>
                                </div>
                            </div>
                            {/* HSC Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="এইচ এস সি/ডিপ্লোমা/সমমান"
                                        value={formData.hsc.name}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.hsc.year}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <select
                                        name="group"
                                        value={formData.hsc.group}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">বিজ্ঞান</option>
                                        <option value="humanities">মানবিক</option>
                                        <option value="business">ব্যাবসায়ে শিক্ষা</option>
                                        <option value="vocational">ভোকেশনাল</option>
                                    </select>
                                </div>
                            </div>
                            {/* University Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="বিশ্ববিদ্যালয়"
                                        value={formData.university.name}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.university.year}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="department"
                                        placeholder="ডিপার্টমেন্ট এর নাম"
                                        value={formData.university.department}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </>) : ""
                }

                {
                    isKowmi ? (<>
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            ক্বওমি জামায়াত
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            {/* SSC Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="শাহরে বেকায়া"
                                        value={formData.ssc.name}
                                        onChange={(e) => handleNestedChange(e, 'শাহরে বেকায়া')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.ssc.year}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        name="group"
                                        value={formData.ssc.group}
                                        onChange={(e) => handleNestedChange(e, 'প্রতিষ্টান')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />

                                </div>
                            </div>
                            {/* HSC Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="এইচ এস সি/ডিপ্লোমা/সমমান"
                                        value={formData.hsc.name}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.hsc.year}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <select
                                        name="group"
                                        value={formData.hsc.group}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">বিজ্ঞান</option>
                                        <option value="humanities">মানবিক</option>
                                        <option value="business">ব্যাবসায়ে শিক্ষা</option>
                                        <option value="vocational">ভোকেশনাল</option>
                                    </select>
                                </div>
                            </div>
                            {/* University Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="বিশ্ববিদ্যালয়"
                                        value={formData.university.name}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.university.year}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="department"
                                        placeholder="ডিপার্টমেন্ট এর নাম"
                                        value={formData.university.department}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </>) : ""
                }
                {
                    isAliya ? (<>
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            আলিয়া বিভাগ
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            {/* SSC Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="এস এস সি/দাখিল/সমমান"
                                        value={formData.ssc.name}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.ssc.year}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <select
                                        name="group"
                                        value={formData.ssc.group}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">বিজ্ঞান</option>
                                        <option value="humanities">মানবিক</option>
                                        <option value="business">ব্যাবসায়ে শিক্ষা</option>
                                        <option value="vocational">ভোকেশনাল</option>
                                    </select>
                                </div>
                            </div>
                            {/* HSC Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="এইচ এস সি/ডিপ্লোমা/সমমান"
                                        value={formData.hsc.name}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.hsc.year}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <select
                                        name="group"
                                        value={formData.hsc.group}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">বিজ্ঞান</option>
                                        <option value="humanities">মানবিক</option>
                                        <option value="business">ব্যাবসায়ে শিক্ষা</option>
                                        <option value="vocational">ভোকেশনাল</option>
                                    </select>
                                </div>
                            </div>
                            {/* University Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="বিশ্ববিদ্যালয়"
                                        value={formData.university.name}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.university.year}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="department"
                                        placeholder="ডিপার্টমেন্ট এর নাম"
                                        value={formData.university.department}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </>) : ""
                }
                {
                    isEnglish ? (<>
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            ইংলিশ মিডিয়াম
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            {/* SSC Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="এস এস সি/দাখিল/সমমান"
                                        value={formData.ssc.name}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.ssc.year}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <select
                                        name="group"
                                        value={formData.ssc.group}
                                        onChange={(e) => handleNestedChange(e, 'ssc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">বিজ্ঞান</option>
                                        <option value="humanities">মানবিক</option>
                                        <option value="business">ব্যাবসায়ে শিক্ষা</option>
                                        <option value="vocational">ভোকেশনাল</option>
                                    </select>
                                </div>
                            </div>
                            {/* HSC Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="এইচ এস সি/ডিপ্লোমা/সমমান"
                                        value={formData.hsc.name}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.hsc.year}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <select
                                        name="group"
                                        value={formData.hsc.group}
                                        onChange={(e) => handleNestedChange(e, 'hsc')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    >
                                        <option value="">বিজ্ঞান</option>
                                        <option value="humanities">মানবিক</option>
                                        <option value="business">ব্যাবসায়ে শিক্ষা</option>
                                        <option value="vocational">ভোকেশনাল</option>
                                    </select>
                                </div>
                            </div>
                            {/* University Section */}
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="বিশ্ববিদ্যালয়"
                                        value={formData.university.name}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="year"
                                        placeholder="পাশের সন"
                                        value={formData.university.year}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/3">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="department"
                                        placeholder="ডিপার্টমেন্ট এর নাম"
                                        value={formData.university.department}
                                        onChange={(e) => handleNestedChange(e, 'university')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </>) : ""
                }
            </div>
            <button type="submit" className="mt-5 w-full rounded-md bg-[#6A64F1] py-3 text-white font-semibold">
                Submit
            </button>
        </form>
    );
};

export default EducationForm;
