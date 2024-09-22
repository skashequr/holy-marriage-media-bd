import React from 'react';
import Link from 'next/link';
const NavigateLoginPage = () => {
    return (
        <div>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="/login">লগইন</Link>
          </li>
        </div>
    );
};

export default NavigateLoginPage;