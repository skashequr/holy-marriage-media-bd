import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const OngicarNama = () => {
  // Initialize the state for each input field
  const address = useSelector((state) => state.address);
  const education = useSelector((state) => state.education);
  const expectedPartner = useSelector((state) => state.expectedPatner);
  const familyInfo = useSelector((state) => state.family);
  const marriageInfo = useSelector((state) => state.marriageInfo);
  const ongicarnamaData = useSelector((state) => state.ongicarNama);
  const personalDetails = useSelector((state) => state.personalData);
  const personalInfo = useSelector((state) => state.personalInfo.personalInfo);

  const [formData, setFormData] = useState({
    familyConsent: "",
    addedToCommunity: "",
    legalActionWarning: "",
    dowryAmount: "",
  });
  const userData = {
    general_information: {
      full_name: "John Doe",
      number: "0171234567648",
      email: "johnrfwddvwdoe@example.com",
      skin_color: "Fair",
      birth_year: 1990,
      nationality: "Bangladeshi",
      marital_status: "Single",
      weight: 70,
      height: 175,
      blood_group: "O+",
      religion: "Islam",
      belief: "Moderate",
      family_title: "Mr.",
      guardian_number: "01823456789",
      maternal_grandfather_name: "Abdul Karim",
      paternal_grandfather_name: "Mohiuddin Ahmed",
    },
    education: {
      education_medium: "জেনারেল",
      highest_qualification: "Masters in Computer Science",
      other_qualifications: [
        "Certified Web Developer",
        "Project Management Training",
      ],
      ssc: {
        name: "Dhaka Board",
        year: "2010",
        group: "বিজ্ঞান",
      },
      hsc: {
        name: "Dhaka Board",
        year: "2012",
        group: "বিজ্ঞান",
      },
      university: {
        name: "University of Dhaka",
        year: "2017",
        department: "Computer Science",
      },
      othersExam: {
        first: "2019",
        second: "2020",
        third: "2021",
      },
    },
    family_information: {
      fatherName: "John Doe",
      fatherAlive: "alive",
      fatherProfession: "Teacher",
      motherName: "Jane Doe",
      motherAlive: "alive",
      motherProfession: "Doctor",
      brothersCount: "2",
      sistersCount: "1",
      siblingsDetails:
        "Older brother: Engineer, Younger brother: Student, Younger sister: Student",
      economicStatus: "upperMiddleClass",
      familyStatus:
        "We live in a peaceful and well-off environment with good family values.",
      religiousEnvironment:
        "We follow a moderately religious lifestyle with weekly prayers and family gatherings.",
      relativesInfo: {
        maternalUncles: "Uncle1: Businessman, Uncle2: Engineer",
        paternalUncles: "Uncle1: Doctor, Uncle2: Teacher",
        guardianPhone: "123-456-7890",
        guardianRelation: "Uncle",
      },
    },
    personal_information: {
      voterOrBirthRegistrationNo: "123456c7890",
      voterOrBirthRegistrationPhoto: "file_1234.jpg",
      mobileNumber: "+8801XXXXXXXXX",
      currentPhoto: "profile_pic.jpg",
      hobbies: "Reading, Traveling, Playing Cricket",
      religiousView:
        "I follow a spiritual path and believe in self-realization.",
      disabilityStatus: "No Disability",
      secondMarriageThoughts:
        "I am open to the idea of second marriage if needed.",
      financialSource:
        "I am a software engineer with a stable income from my job.",
      fatherVoterIdPhoto: "father_voter_id.jpg",
    },
    marriage_information: {
      guardianConsent: "Yes, my guardian has given consent for the marriage.",
      spouseWorkAfterMarriage:
        "Yes, my spouse plans to continue working after marriage.",
      spouseStudyAfterMarriage:
        "No, my spouse does not plan to pursue further studies after marriage.",
      livingArrangementAfterMarriage:
        "We plan to live in Dhaka after marriage.",
      thoughtsOnMarriage:
        "Marriage is a bond of mutual understanding and respect, and I see it as a lifelong commitment.",
      expectationsFromSpouseSide:
        "I expect my spouse to be understanding, supportive, and respectful.",
      reasonForMarriage:
        "To build a strong, loving family and support each other's goals.",
      dowry: "No dowry is required.",
      pastRelations: "No past relationships.",
    },
    expected_partner: {
      age: 28,
      skin_color: "Fair",
      height: 170,
      education: "Masters in Business Administration",
      district: "Dhaka",
      qualities: ["Caring", "Intelligent", "Ambitious", "Respectful"],
      marital_status: "Single",
      profession: "Software Engineer",
      religiosity: "Moderate",
      family_economic_status: "Upper Middle Class",
    },
    commitment_agreement: {
      familyConsent:
        "Both families have agreed to the terms and conditions outlined in the agreement.",
      addedToCommunity:
        "The bride has been formally accepted into the community as per the customs.",
      legalActionWarning:
        "Any breach of this agreement will result in legal action as specified in the contract.",
      dowryAmount: "500,000 BDT",
    },
    permanentAddress: {
      postCode: "1207",
      state: "Dhaka",
      city: "Dhaka",
      area: "Banani",
    },
    currentAddress: {
      postCode: "1212",
      village: "Mohakhali",
      state: "Dhaka",
      city: "Dhaka",
      area: "Gulshan",
    },
  };

  // Handle change for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the respective field in the state
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Output the collected form data
    const commitment = formData;
    const userBiodata = {
      personalInfo,
      address,
      education,
      familyInfo,
      personalDetails,
      marriageInfo,
      expectedPartner,
      commitment,
    };
    fetch("http://localhost:5000/api/v1/userBiodata/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure the backend accepts JSON data
      },
      body: JSON.stringify(userBiodata), // Convert the JavaScript object to JSON
    })
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        console.log("Data sent successfully:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mb-5 pt-3">
            <div className="-mx-3 flex flex-wrap">
              {/* Family Consent */}
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    এখানে রেজিষ্টিশন করছেন পরিবার জানে?
                  </label>
                  <select
                    name="familyConsent"
                    value={formData.familyConsent}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="হ্যাঁ">হ্যাঁ</option>
                    <option value="না">না</option>
                  </select>
                </div>
              </div>

              {/* Added to Facebook Community */}
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    আমাদের ফেইসবুক কমিউনিটিতে এড হয়েছেন?
                  </label>
                  <select
                    name="addedToCommunity"
                    value={formData.addedToCommunity}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="হ্যাঁ">হ্যাঁ</option>
                    <option value="না">না</option>
                  </select>
                </div>
              </div>

              {/* Legal Action Warning */}
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    ভূল তথ্যের জন্য কর্তিপক্ষ আইনি পদক্ষেপ নিতে পারবে।
                  </label>
                  <select
                    name="legalActionWarning"
                    value={formData.legalActionWarning}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="হ্যাঁ">হ্যাঁ</option>
                  </select>
                </div>
              </div>

              {/* Dowry Amount */}
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    বিয়ে সম্পাদিত হলে আমাদের কত টাকা দিবেন?
                  </label>
                  <input
                    type="text"
                    name="dowryAmount"
                    value={formData.dowryAmount}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    placeholder="টাকা"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
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

export default OngicarNama;
