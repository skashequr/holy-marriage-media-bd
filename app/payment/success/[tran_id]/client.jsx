'use client';

import { useEffect, useState } from 'react';

const ConfirmPayment = ({ tran_id }) => {
  const [message, setMessage] = useState('🔄 Processing payment...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const url = `${baseUrl}/api/v1/payment/success/${tran_id}`;

        console.log('Calling:', url);

        const res = await fetch(url);
        const data = await res.json();

        if (res.ok && data.success) {
          setMessage('✅ Payment successful!');
        } else {
          setMessage('❌ Payment failed!');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setMessage('❌ Something went wrong!');
      } finally {
        setLoading(false);
      }
    };

    confirmPayment();
  }, [tran_id]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-xl font-semibold text-gray-700">
        {loading ? 'Processing payment...' : message}
      </h1>
    </div>
  );
};

export default ConfirmPayment;
