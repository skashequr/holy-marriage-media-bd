export default function DashboardTable() {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto pb-4">
                <div className="min-w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg border-gray-300">
                        <table className="table-auto min-w-full rounded-xl">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="">
                                        <div className="flex items-center py-5 px-5 ">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                                            />
                                        </div>
                                    </th>
                                    <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Company </th>
                                    <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> User ID </th>
                                    <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"> Full Name &amp; Email </th>
                                    <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Type </th>
                                    <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Industry Type </th>
                                    <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Join Date </th>
                                    <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Budget </th>
                                    <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Country </th>
                                    <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Status </th>
                                    {/* <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Actions </th> */}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300 ">
                                {/* Repeat this <tr> block for each row, as in your original code */}
                                {/* Example row: */}
                                <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                                    <td className="">
                                        <div className="flex items-center py-5 px-5 ">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                                            />
                                        </div>
                                    </td>
                                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Louis Vuitton</td>
                                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010510 </td>
                                    <td className=" px-5 py-3">
                                        <div className="w-48 flex items-center gap-3">
                                            <img src="https://pagedone.io/asset/uploads/1697536419.png" alt="Floyd image" />
                                            <div className="data">
                                                <p className="font-normal text-sm text-gray-900">Floyd Miles</p>
                                                <p className="font-normal text-xs leading-5 text-gray-400"> floydmiles@pagedone.io </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Customer</td>
                                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Accessories</td>
                                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Jun. 24, 2023 </td>
                                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> $18,500 </td>
                                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> United States </td>
                                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                        <div className="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-center w-20 items-center gap-1">
                                            <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2.5" cy="3" r="2.5" fill="#059669"></circle>
                                            </svg>
                                            <span className="font-medium text-xs text-emerald-600 ">Active</span>
                                        </div>
                                    </td>
                                    <td className="flex p-5 items-center gap-0.5">
                                        {/* ...buttons and SVGs as in your code, just ensure all tags are closed */}
                                    </td>
                                </tr>
                                {/* ...repeat for other rows */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
