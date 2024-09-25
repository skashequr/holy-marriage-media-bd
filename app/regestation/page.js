import React from 'react';
import { tiroBangla } from '../layout';

const Regestation = () => {
    return (
        <div className={tiroBangla.className}>
          
<div className="h-full bg-gray-400 dark:bg-gray-900">
	<div className="mx-auto">
    <div className="flex justify-center">
			<div className="w-full  flex">
				<div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
					<form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
						
						<div className="mb-4 md:flex md:justify-around">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
									ইমেইল
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="ইমেইল"
								/>
							</div>
							<div className="md:ml-2">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                   ডাক নাম
                                </label>
								<input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="UserName"
                                    type="text"
                                    placeholder="ডাক নাম"
                                />
							</div>
						</div>
						<div className="mb-4 md:flex md:justify-around">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                   পাসওয়ার্ড
                                </label>
								<input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
								
							</div>
							<div className="md:ml-2">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                               নিশ্চিত পাসওয়ার্ড
                                </label>
								<input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="c_password"
                                    type="password"
                                    placeholder="******************"
                                />
							</div>
						</div>
						<div className="border rounded-md pt-3 pl-3 w-full mx-auto max-w-2xl">
    
                        <label className="block px-5 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                              লিঙ্গ
                                </label>
    <div className='lg:flex lg:gap-5 justify-center items-center'>
        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Country"/>
             <i className="pl-2">ছেলে</i>
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="Country"/>
            <i className="pl-2">মেয়ে</i>
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
              <input type="radio" name="Country"/>
              <i className="pl-2">হিজড়া</i>
         </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
              <input type="radio" name="Country"/>
              <i className="pl-2">অননান্য</i>
        </label>

    </div>
</div>
						<div className="mb-6 text-center">
							<button
                                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Register Account
                            </button>
						</div>
						<hr className=" border-t" />
						<div className="text-center">
							<a className="inline-block pt-3 text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="./index.html">
								Already have an account? Login!
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Regestation;