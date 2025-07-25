import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useRouter } from "next/router"; // Import useRouter
import { ToastContainer, toast } from "react-toastify";

const OngicarNama = () => {
  // Initialize the state for each input field
  const notify = () => toast("Sucessfully Create your Biodata!");
  const address = useSelector((state) => state.address);
  const education = useSelector((state) => state.education);
  const expectedPartner = useSelector((state) => state.expectedPatner);
  const familyInfo = useSelector((state) => state.family);
  const marriageInfo = useSelector((state) => state.marriageInfo);
  const ongicarnamaData = useSelector((state) => state.ongicarNama);
  const personalDetails = useSelector((state) => state.personal);
  const personalInfo = useSelector((state) => state.personalInfo.personalInfo);

  console.log(education, "education");
  
  const [formData, setFormData] = useState({
    familyConsent: "",
    addedToCommunity: "",
    legalActionWarning: "",
    dowryAmount: "",
  });

  // const router = useRouter(); // Use useRouter for client-side navigation

  // Handle change for all input fields
  const user2 = useSelector((state) => state.user.user);
  console.log("user2", user2);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the respective field in the state
    }));
  };
  const user = {
    _id: user2?._id,
    password: user2?.password,
    needsPasswordChange: user2?.needsPasswordChange,
    role: user2?.role,
    status: user2?.status,
    isDeleted: user2?.isDeleted,
    createdAt: user2?.createdAt,
    updatedAt: user2?.updatedAt,
    // username: user2?.username,
    // email: user2?.email,

  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect the form data and construct the userBiodata object
    const userBiodata = {
      user,
      personalInfo,
      address,
      education,
      familyInfo,
      personalDetails,
      marriageInfo,
      expectedPartner,
      commitment: formData,
    };

    // Send the data to the backend API
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
        // Redirect to the home page after successful submission
        notify();
        // router.push("/"); // Use router.push for client-side redirection
      })
      .catch((error) => {
        alert(error.message);
        console.error("Error:", error.error);
        
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
