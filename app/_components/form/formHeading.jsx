import React from 'react';

const FormHeading = ({value}) => {
    return (
        <div>
            <h2 className="flex flex-row flex-nowrap items-center mt-3">
    <span className="flex-grow block border-t border-black"></span>
    <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
     {value}
    </span>
    <span className="flex-grow block border-t border-black"></span>
                </h2>
        </div>
    );
};

export default FormHeading;