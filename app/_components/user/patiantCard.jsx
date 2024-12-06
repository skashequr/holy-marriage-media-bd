import React from "react";

const PatientCard = () => {
  return (
    <div className="rounded-xl hover:shadow-sm shadow-md border border-l-4 hover:border-black relative w-60 border-gray-200 pb-1 transition duration-200 hover:scale-105">
      {/* <div className="p-1 rounded-t-xl bg-black "></div> */}
      <div className="p-2">
        <div className="relative w-52 h-40 mx-auto">
          <img
            className="w-full h-full rounded-lg object-cover"
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1718453482~exp=1718457082~hmac=d1324646c11f156b66c71b8a6d005eef4d7514b810a16e8d6616653e02f7e45d&w=740"
            alt="Patient"
          />
          <div className="w-9 h-9 p-2 absolute right-2 -bottom-3 rounded-full bg-slate-300 hover:to-blue-400">
            <img
              className="w-full h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngJNqeb-GMQIok8YgzIT_x9YRjGqocN38Su-puV12mP-mxpbemQomo0ICGuL5RhIygLY&usqp=CAU"
              alt="Doctor"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="p-1.5 bg-black w-44 rounded-tr-full rounded-br-full mt-2">
          <div className="text-center">
            <p className="text-white text-sm font-medium tracking-wide">
              Lindsay Walton
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-4">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            Patient Visit:
          </p>
          <p className="text-black text-sm font-semibold text-center tracking-wide">
            Fever, Headache
          </p>
        </div>

        <div className="w-full text-center mx-auto mt-3">
          <button className="border-indigo-500 bg-cyan-500 text-white rounded-md px-4 py-1.5 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline text-xs font-medium">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
