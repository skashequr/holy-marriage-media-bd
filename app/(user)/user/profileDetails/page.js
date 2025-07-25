"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IoIosCall } from "react-icons/io";
import { LiaAddressCard } from "react-icons/lia";
import { MdOutlineWork , MdDateRange} from "react-icons/md"; 
import { FaHandsPraying } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaWeightScale } from "react-icons/fa6";
import { GiBodyHeight } from "react-icons/gi";
const SearchUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) return;

      setLoading(true);
      setError('');
      setUserData(null);

      try {
        const res = await axios.get(`http://localhost:5000/api/v1/userBiodata/by-email?email=${user.email}`);
        setUserData(res.data.user[0]);
        console.log('User Data:', res.data.user[0]);
        
      } catch (err) {
        setError(err.response?.data?.message || 'কিছু একটা ভুল হয়েছে');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.email]);

  return (
    <div>
     

      {loading && <p>লোড হচ্ছে...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      
      <div>
      
      {loading && <p>লোড হচ্ছে...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div style={{
          border: '1px solid #ccc',
          padding: '5px',
          borderRadius: '8px',
          backgroundColor: '#f4f4f4',
        }}>
          <div>
      <div className="bg-gray-100">
        <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">

          {/* top content */}
          <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
              <img src="https://media.licdn.com/dms/image/C4D03AQH8qidO0nb_Ng/profile-displayphoto-shrink_800_800/0/1615696897070?e=2147483647&v=beta&t=ia3wfE2J7kVLdBy9ttkgUDAA_ul29fymykhQo0lABDo" alt="Profile" />
            </div>

            <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
              <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                {userData?.general_information_id?.name || 'নাম পাওয়া যায়নি'}
              </p>
               <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                {userData?.user?.username || 'নাম পাওয়া যায়নি'}
              </p>
              <p className="text-heading">{userData?.general_information_id?.email}</p>
            </div>
          </div>

          {/* main content */}
          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:mt-10">

              <div className="flex flex-col sm:w-1/3">
                {/* My contact */}
                <div className="py-3 sm:order-none order-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4">
                        <path fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                        </path>
                      </svg>
                      </a>
                      <div className="ml-2 truncate">amitpachange@gmail.com</div>
                    </div>
                    <div className="flex items-center my-1">
                      <IoIosCall className='mr-3'></IoIosCall>
                      <div>{userData?.general_information_id?.mobile}</div>
                    </div>
                    <div className="flex items-center my-1">
                      <LiaAddressCard className='mr-3' />
                      <div>{userData?.address_id?.currentAddress?.state},{userData?.address_id?.currentAddress?.village}-{userData?.address_id?.currentAddress?.postCode}</div>
                    </div>
                    <div className="flex items-center my-1">
                      <MdOutlineWork className='mr-3' />
                      <div>{userData?.personal_information_id?.financialSource}</div>
                    </div>
                  </div>
                </div>
                {/* Skills */}
                <div className="py-3 sm:order-none order-2">
                  <h2 className="text-lg font-poppins font-bold text-top-color">General Information</h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div>
                    <div className="flex items-center my-1">
                      <MdDateRange ></MdDateRange>
                      <div className="ml-2">জন্ম তারিখঃ {userData?.general_information_id?.birthYear}</div>
                    </div>
                    <div className="flex items-center my-1">
                      <FaWeightScale  ></FaWeightScale >
                      <div className="ml-2">ওজনঃ {userData?.general_information_id?.weight}</div>
                    </div>
                    
                    <div className="flex items-center my-1">
                      <GiBodyHeight  ></GiBodyHeight >
                      <div className="ml-2">উচ্চতাঃ {userData?.general_information_id?.height}</div>
                    </div>
                    <div className="flex items-center my-1">
                      <MdBloodtype></MdBloodtype>
                      <div className="ml-2">রক্তের গ্রুপঃ {userData?.general_information_id?.bloodGroup}</div>
                    </div>
                    
                    <div className="flex items-center my-1">
                      <FaHandsPraying></FaHandsPraying>
                      <div className="ml-2">ধর্মঃ {userData?.general_information_id?.religion}</div>
                    </div>

                    <div className="flex items-center my-1">
                      <FaIdCard></FaIdCard>
                      <div className="ml-2">জাতীয় পরিচয়পত্রঃ {userData?.personal_information_id?.voterOrBirthRegistrationNo}</div>
                    </div>
                  </div>
                </div>
                {/* Education Background */}
                <div className="py-3 sm:order-none order-1">
                  <h2 className="text-lg font-poppins font-bold text-top-color">Education Background</h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">2021</p>
                      <p className="text-sm font-medium">
                        <span className="text-green-700">B.E. (INFORMATION TECHNOLOGY)</span>, PIMPRI CHINCHWAD
                        COLLEGE OF ENGINEERING, PUNE.
                      </p>
                      <p className="font-bold text-xs text-gray-700 mb-2">Percentage: 76.61</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">2017</p>
                      <p className="text-sm font-medium"><span className="text-green-700">HSC</span>, RAJARSHI SHAHU
                        COLLEGE, LATUR.</p>
                      <p className="font-bold text-xs text-gray-700 mb-2">Percentage: 80.77</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">2015</p>
                      <p className="text-sm font-medium"><span className="text-green-700">SSC</span>, DNYANESHWAR HIGH
                        SCHOOL, LATUR.</p>
                      <p className="font-bold text-xs text-gray-700 mb-2">Percentage: 93.80</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                {/* About me */}
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">About Me</h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>
                  <p>To get a career opportunity which would help me to utilize my academic background to assist
                    me to gain experience, employ my excellent skills, and enable me to make positive
                    contribution.</p>
                </div>

                {/* Professional Experience */}
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-bold text-gray-700">Netcracker Technology | Software Engineer</p>
                      <p className="font-semibold text-sm text-gray-700">2021 - Present</p>
                      <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Working on customer facing product</li>
                        <li>Deliverying highly efficient solutions</li>
                        <li>Solving critical bugs</li>
                      </ul>
                    </div>

                    <div className="flex flex-col mt-8">
                      <p className="text-lg font-bold text-gray-700">TailwindFlex.com | Lead</p>
                      <p className="font-semibold text-sm text-gray-700">2020-2021</p>
                      <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Developed usable components</li>
                        <li>Solving complex problems</li>
                        <li>Solving critical bugs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">Projects</h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-700">Used Books mobile app</p>
                      <p className="font-normal text-sm text-gray-700 mb-1 pl-2">A platform to sell as well as to
                        buy used books only for PCCoE College due to this reuse of books will be there
                        beneficial for environment also indirectly helps increase communication between
                        juniors and seniors.</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-700">Parking Automation System</p>
                      <p className="font-normal text-sm text-gray-700 mb-1 pl-2">it’s a web application which
                        helps you to book your slot for your car just like booking a movie ticket from home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchUser;
