"use client";
import React, { useState } from "react";
import { tiroBangla } from "../../layout";
import PrimaryForm from "./primaryForm";
import AdressForm from "./adressFrom";
import FormHeading from "./formHeading";
import EducationForm from "./educationForm";
import FamilyDetails from "./familyDetails";
import PersonalInfoForm from "./personalInfoForm";
import MarageInfoForm from "./marageInfoForm";
import ExpectedPatnerForm from "./expectedPatnerForm";
import OngicarNama from "./ongicarNama";
import { FormPagination } from "./formPaggination";

const Steaps = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const totalPages = 8; // Total number of pages (steps)

  // Titles for each step
  const stepTitles = [
    "প্রাথমিক তথ্য", // Step 1
    "ঠিকানা তথ্য", // Step 2
    "শিক্ষাগত তথ্য", // Step 3
    "পারিবারিক তথ্য", // Step 4
    "ব্যক্তিগত তথ্য", // Step 5
    "বিবাহ তথ্য", // Step 6
    "অপেক্ষিত সঙ্গী তথ্য", // Step 7
    "অংগীকার নামা", // Step 8
  ];

  // Function to handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Render the form step based on the current page
  const renderFormStep = () => {
    switch (currentPage) {
      case 1:
        return <PrimaryForm />;
      case 2:
        return <AdressForm />;
      case 3:
        return <EducationForm />;
      case 4:
        return <FamilyDetails />;
      case 5:
        return <PersonalInfoForm />;
      case 6:
        return <MarageInfoForm />;
      case 7:
        return <ExpectedPatnerForm />;
      case 8:
        return <OngicarNama />;
      default:
        return <PrimaryForm />;
    }
  };

  return (
    <div className={tiroBangla.className}>
      <div className="bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 lg:flex flex-col justify-center items-center">
          <div className="mt-3">
            <ul>
              {/* Update FormHeading with dynamic title based on currentPage */}
              <FormHeading value={stepTitles[currentPage - 1]} />

              <li className="text-left mb-10">
                <div className="lg:flex lg:flex-row lg:items-start p-2">
                  <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                      {currentPage} {/* Display current step number */}
                    </div>
                    <span className="text-gray-500">ধাপ-{currentPage}</span>{" "}
                    {/* Display current step label */}
                  </div>
                  {renderFormStep()}
                </div>
              </li>

              <FormPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steaps;
