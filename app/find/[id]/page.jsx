"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import UserProfileDetails from "./userProfileDetails";
const UserProfile = () => {
  const { id } = useParams(); // get the :id from route
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/v1/userBiodata/${id}`)
        .then((res) => {
          setUserData(res.data.data);
        })
        .catch((err) => {
          console.error("Failed to fetch user:", err);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!userData) return <p>User not found</p>;
  console.log("userData:", userData?.education_id);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          {/* Sidebar: বেসিক তথ্য */}
          <div className="bg-[#512e7e] text-white rounded-xl p-6 flex flex-col items-center shadow-md">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4">
              <img src="/niqabi-icon.png" alt="Profile" className="h-20" />
            </div>
            <h2 className="text-xl font-semibold mb-4">
              বায়োডাটা নং : HMM-{userData?._id?.slice(-5)}
            </h2>

            <table className="text-sm w-full">
              <tbody>
                <tr>
                  <td className="py-1">বায়োডাটার ধরন</td>
                  <td>
                    : {userData?.general_information_id?.bioDataType || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="py-1">বৈবাহিক অবস্থা</td>
                  <td>
                    : {userData?.general_information_id?.maritalStatus || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="py-1">জন্ম তারিখ</td>
                  <td>
                    :{" "}
                    {new Date(
                      userData?.general_information_id?.birthYear
                    ).toLocaleDateString("bn-BD")}
                  </td>
                </tr>
                <tr>
                  <td className="py-1">উচ্চতা</td>
                  <td>: {userData?.general_information_id?.height || "N/A"}</td>
                </tr>
                <tr>
                  <td className="py-1">গায়ের রঙ</td>
                  <td>
                    : {userData?.general_information_id?.skinTone || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="py-1">ওজন</td>
                  <td>: {userData?.general_information_id?.weight} কেজি</td>
                </tr>
                <tr>
                  <td className="py-1">রক্তের গ্রুপ</td>
                  <td>: {userData?.general_information_id?.bloodGroup}</td>
                </tr>
                <tr>
                  <td className="py-1">জাতীয়তা</td>
                  <td>: {userData?.general_information_id?.nationality}</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 border border-green-500 text-green-600 rounded-full hover:bg-green-100">
                ✅ SHORTLIST
              </button>
              <button className="px-4 py-2 border border-red-500 text-red-600 rounded-full hover:bg-red-100">
                ❌ IGNORE
              </button>
            </div>

            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow hover:shadow-md text-sm">
              📋 Copy Biodata Link
            </button>
          </div>

          {/* Right Section: Details */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* ঠিকানা */}
            <div className="bg-white rounded-xl shadow p-4 border">
              <h3 className="text-xl font-semibold text-purple-700 mb-3 border-b pb-2">
                ঠিকানা
              </h3>
              <table className="table-auto text-sm w-full">
                <tbody>
                  <tr className="even:bg-gray-50">
                    <td className="font-medium w-1/3">স্থায়ী ঠিকানা</td>
                    <td>
                      : {userData?.address_id?.permanentAddress?.area} ,{" "}
                      {userData?.address_id?.permanentAddress?.city} ,{" "}
                      {userData?.address_id?.permanentAddress?.state} ,{" "}
                      {userData?.address_id?.permanentAddress?.village} ,{" "}
                      {userData?.address_id?.permanentAddress?.postCode}
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="font-medium">বর্তমান ঠিকানা</td>
                    <td>
                      : {userData?.address_id?.currentAddress?.area} ,{" "}
                      {userData?.address_id?.currentAddress?.city} ,{" "}
                      {userData?.address_id?.currentAddress?.state} ,{" "}
                      {userData?.address_id?.currentAddress?.village} ,{" "}
                      {userData?.address_id?.currentAddress?.postCode}
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="font-medium">কোথায় বড় হয়েছেন?</td>
                    <td>: {userData?.address_id?.permanentAddress?.city}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* শিক্ষাগত যোগ্যতা */}
            <div className="bg-white rounded-xl shadow p-4 border">
              <h3 className="text-xl font-semibold text-purple-700 mb-3 border-b pb-2">
                শিক্ষাগত যোগ্যতা
              </h3>
              <table className="table-auto text-sm w-full">
                <tbody>
                  <tr className="even:bg-gray-50">
                    <td className="font-medium w-1/3">শিক্ষা মাধ্যম</td>
                    <td>: {userData?.education_id?.medium || "N/A"}</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="font-medium">সর্বোচ্চ যোগ্যতা</td>
                    <td>
                      : {userData?.education_id?.highest_qualification || "N/A"}
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="font-medium">এসএসসি প্রতিষ্ঠান</td>
                    <td>: {userData?.education_id?.ssc?.name || "N/A"}</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="font-medium">এইচএসসি প্রতিষ্ঠান</td>
                    <td>: {userData?.education_id?.hsc?.name || "N/A"}</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="font-medium">বিশ্ববিদ্যালয়</td>
                    <td>
                      : {userData?.education_id?.university?.name || "N/A"}
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="font-medium">অতিরিক্ত যোগ্যতা</td>
                    <td>
                      :{" "}
                      {userData?.education_id?.other_qualifications?.join(
                        ", "
                      ) || "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* পারিবারিক তথ্য */}
            <div className="bg-gray-50">
              <UserProfileDetails data={userData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
