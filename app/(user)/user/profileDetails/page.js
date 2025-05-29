"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

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
                      <a className="w-6 text-gray-700 hover:text-orange-600"
                        aria-label="Visit TrendyMinds YouTube" href="" target="_blank" rel="noopener noreferrer"><svg
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4">
                          <path fill="currentColor"
                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                          </path>
                        </svg>
                      </a>
                      <div>4574358775</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600"
                        aria-label="Visit TrendyMinds Facebook" href="" target="_blank" rel="noopener noreferrer"><svg
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4">
                          <path fill="currentColor"
                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                          </path>
                        </svg>
                      </a>
                      <div>sale galli latur</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600"
                        aria-label="Visit TrendyMinds Twitter" href="" target="_blank" rel="noopener noreferrer"><svg className="h-4"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                          </path>
                        </svg>
                      </a>
                      <div>amitpachange21</div>
                    </div>
                  </div>
                </div>
                {/* Skills */}
                <div className="py-3 sm:order-none order-2">
                  <h2 className="text-lg font-poppins font-bold text-top-color">Skills</h2>
                  <div className="border-2 w-20 border-top-color my-3"></div>

                  <div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill="currentColor"
                            d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z"
                            fill="#000000" />
                          <path fill="currentColor"
                            d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z"
                            fill="#000000" />
                        </svg>
                      </a>
                      <div className="ml-2">Tailwind CSS</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600"
                        aria-label="Visit TrendyMinds YouTube" href="" target="_blank" rel="noopener noreferrer"><svg
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515 515" className="h-4">
                          {/* ...SVG path omitted for brevity... */}
                        </svg>
                      </a>
                      <div className="ml-2">Java</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600"
                        aria-label="Visit TrendyMinds Facebook" href="" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink">
                          {/* ...SVG path omitted for brevity... */}
                        </svg>
                      </a>
                      <div className="ml-2">Andoid</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600"
                        aria-label="Visit TrendyMinds Twitter" href="" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* ...SVG path omitted for brevity... */}
                        </svg>
                      </a>
                      <div className="ml-2">Html, Css, JS</div>
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
