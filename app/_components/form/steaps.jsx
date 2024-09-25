import { tiroBangla } from '@/app/layout';
import React from 'react';
import PrimaryForm from './primaryForm';
import AdressForm from './adressFrom';
import FormHeading from './formHeading';
import EducationForm from './educationForm';
import FamilyDetails from './familyDetails';
import PersonalInfoForm from './personalInfoForm';

const Steaps = () => {
    return (
        <div className={tiroBangla.className}>


        <div className="bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 lg:flex flex-col justify-center items-center">
        <div className="mt-3">
            <ul className="">


                <FormHeading value="সাধারণ তথ্য"></FormHeading>
                <li className="text-left mb-10">
                    <div className="lg:flex lg:flex-row lg:items-start p-2">
                        <div className="flex flex-col items-center justify-center  mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                ১
                            </div>
                            <span className="text-gray-500">ধাপ-১</span>
                        </div>
                        
                        
             <PrimaryForm></PrimaryForm>
                    </div>
                </li>


                {/* <FormHeading value="ঠিকানা"></FormHeading>
                <li className="text-left mb-10">
                    <div className="flex flex-row items-start">
                        <div className="flex flex-col items-center justify-center mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                ২
                            </div>
                            <span className="text-gray-500">ধাপ-২</span>
                        </div>
                      <AdressForm></AdressForm>
                    </div>
                </li> */}

                {/* <FormHeading value="শিক্ষাগত যোগ্যতা"></FormHeading> */}
                <li className="text-left mb-10">
                    <div className="flex flex-row items-start">
                        <div className="flex flex-col items-center justify-center mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                ৩
                            </div>
                            <span className="text-gray-500">ধাপ-৩</span>
                        </div>
                      {/* <AdressForm></AdressForm>
                       */}
                       {/* <EducationForm></EducationForm> */}

                    </div>
                </li>
                

                {/* <FormHeading value="পারিবারিক তথ্য"></FormHeading> */}
                <li className="text-left mb-10">
                    <div className="flex flex-row items-start">
                        <div className="flex flex-col items-center justify-center mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                ৪
                            </div>
                            <span className="text-gray-500">ধাপ-৪</span>
                        </div>
                      {/* <AdressForm></AdressForm>
                       */}
                       {/* <FamilyDetails></FamilyDetails> */}

                    </div>
                </li>


                {/* <FormHeading value="ব্যাক্তিগত তথ্য"></FormHeading> */}
                <li className="text-left mb-10">
                    <div className="flex flex-row items-start">
                        <div className="flex flex-col items-center justify-center mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                ৫
                            </div>
                            <span className="text-gray-500">ধাপ-৫</span>
                        </div>
                      {/* <AdressForm></AdressForm>
                       */}
                       {/* <PersonalInfoForm></PersonalInfoForm> */}

                    </div>
                </li>
            </ul>
        </div>

    </div>
</div>
        </div>
    );
};

export default Steaps;






{/* <div className="bg-gray-100 w-[800px]  p-5 pb-10 ">
                            <h4 className="text-lg leading-6 font-semibold text-gray-900">Enter Headline</h4>
                            {/* */}
                        