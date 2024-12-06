import React from "react";
import { Badge } from "keep-react";
const ProfileHeader = () => {
  return (
    <header className="px-2 pt-4 flex flex-col justify-center items-center text-center">
      <img
        className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 text-indigo-600 h-24 w-24 lg:h-24 lg:w-24"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
        alt=""
      />
      <h1 className="text-xl text-gray-500 font-bold mt-2">Johh Doe</h1>
      <h2 className="text-base md:text-xl text-gray-500 font-bold">
        Lead Software Engineer
      </h2>
      <Badge color="success" className="w-32 text-center">
        Success
      </Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
    </header>
  );
};

export default ProfileHeader;
