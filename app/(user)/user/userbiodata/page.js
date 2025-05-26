// import Sidebar from '@/app/_components/sidebar/sidebar';
import React from "react";
import dynamic from "next/dynamic";
import Sidebar from "../../../_components/sidebar/sidebar";
const Steaps = dynamic(() => import("../../../_components/form/steaps"));

const BioData = () => {
  return (
    
    <div>
      <Steaps></Steaps>
    </div>
  );
};

export default BioData;
