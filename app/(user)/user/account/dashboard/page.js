import Sidebar from "@/_components/sidebar/sidebar";
import React from "react";

const UserDashboard = () => {
  return (
    <div>
      <div>
        <div className="flex ">
          {/* <!-- sidebar --> */}

          <div className="lg:grid lg:grid-cols-12  w-full gap-3">
            <div className="lg:col-span-3 sm:col-span-0">
              <Sidebar></Sidebar>
            </div>
            {/* <!-- Main content --> */}
            <div className="lg:col-span-9 sm:col-span-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
