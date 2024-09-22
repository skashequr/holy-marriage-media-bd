import Steaps from '@/app/_components/form/steaps';
import Sidebar from '@/app/_components/sidebar/sidebar';
import React from 'react';

const BioData = () => {
    return (
        <div>
            <div className="flex ">

{/* <!-- sidebar --> */}

<div className='grid grid-cols-12 w-full gap-3'>
    <div className='col-span-3'>
        <Sidebar></Sidebar>
    </div>
    {/* <!-- Main content --> */}
    <div className='col-span-9'>
        <Steaps></Steaps>
         </div>
</div>



</div>
        </div>
    );
};

export default BioData;