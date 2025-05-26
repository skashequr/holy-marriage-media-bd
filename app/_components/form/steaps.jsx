"use client";
import React, { useState } from "react";
import { tiroBangla } from "../../layout";
import dynamic from "next/dynamic";
const PrimaryForm = dynamic(() => import("./primaryForm"), {
  loading: () => <p>লোড হচ্ছে...</p>,
});

const AdressForm = dynamic(() => import("./adressFrom"));
const EducationForm = dynamic(() => import("./educationForm"));
const FamilyDetails = dynamic(() => import("./familyDetails"));
const PersonalInfoForm = dynamic(() => import("./personalInfoForm"));
const MarageInfoForm = dynamic(() => import("./marageInfoForm"));
const ExpectedPatnerForm = dynamic(() => import("./expectedPatnerForm"));
const OngicarNama = dynamic(() => import("./ongicarNama"));
import { FormPagination } from "./formPaggination";
import FormHeading from "./formHeading";

const Steaps = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const totalPages = 8; // Total number of pages (steps)

  console.log("Current Page:", currentPage);

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
      setCurrentPage(page); // Update the current page state
    }
  };

  // Render the form step based on the current page
  const renderFormStep = () => {
    switch (currentPage) {
      case 1:
        return <PrimaryForm onPageChange={() => handlePageChange(2)} />;
      case 2:
        return <AdressForm onPageChange={() => handlePageChange(3)} />;
      case 3:
        return <EducationForm onPageChange={() => handlePageChange(4)} />;
      case 4:
        return <FamilyDetails onPageChange={() => handlePageChange(5)} />;
      case 5:
        return <PersonalInfoForm onPageChange={() => handlePageChange(6)} />;
      case 6:
        return <MarageInfoForm onPageChange={() => handlePageChange(7)} />;
      case 7:
        return <ExpectedPatnerForm onPageChange={() => handlePageChange(8)} />;
      case 8:
        return <OngicarNama />;
      default:
        return <PrimaryForm onPageChange={() => handlePageChange(2)} />;
    }
  };

  return (
    <div className={tiroBangla.className}>
      <div className="bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 lg:flex flex-col justify-center items-center">
          <div className="mt-3">
            <ul>
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
