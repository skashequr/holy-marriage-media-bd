"use client";
import React, { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    biodataType: "",
    maritalStatus: "",
    birthDate: "",
    height: "",
    currentAddress: "",
    permanentAddress: "",
    education: "",
    fatherName: "",
    motherName: "",
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Form Submitted!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div>
            <h2>Step 1: সাধারণ তথ্য</h2>
            <label>বায়োডাটার ধরন:</label>
            <select
              name="biodataType"
              value={formData.biodataType}
              onChange={handleChange}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="groom">পাত্রের বায়োডাটা</option>
              <option value="bride">পাত্রীর বায়োডাটা</option>
            </select>
            <label>বৈবাহিক অবস্থা:</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="unmarried">অবিবাহিত</option>
              <option value="married">বিবাহিত</option>
            </select>
            <label>জন্মতারিখ:</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
            <label>উচ্চতা:</label>
            <input
              type="text"
              name="height"
              placeholder="উচ্চতা"
              value={formData.height}
              onChange={handleChange}
            />
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2>Step 2: ঠিকানা</h2>
            <label>বর্তমান ঠিকানা:</label>
            <input
              type="text"
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
            />
            <label>স্থায়ী ঠিকানা:</label>
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
            />
            <button type="button" onClick={prevStep}>
              Back
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2>Step 3: শিক্ষাগত যোগ্যতা</h2>
            <label>শিক্ষাগত যোগ্যতা:</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
            <button type="button" onClick={prevStep}>
              Back
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2>Step 4: পারিবারিক তথ্য</h2>
            <label>বাবার নাম:</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
            <label>মায়ের নাম:</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
            />
            <button type="button" onClick={prevStep}>
              Back
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
