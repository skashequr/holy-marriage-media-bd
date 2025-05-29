"use client"
import React, { useState } from 'react';
import axios from 'axios';

const SearchUser = () => {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const res = await axios.get(`http://localhost:5000/api/v1//userBiodata/by-email?email=${email}`);
      setUserData(res.data.user[0]);
    } catch (err) {
      setError(err.response?.data?.message || 'কিছু একটা ভুল হয়েছে');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '10px' }}>ইমেইল দিয়ে ইউজার সার্চ করুন</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          সার্চ
        </button>
      </div>

      {loading && <p>লোড হচ্ছে...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', background: '#f9f9f9' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>ইউজারের তথ্য</h3>
          <p><strong>ইউজারনেম:</strong> {userData.user?.username}</p>
          <p><strong>ইমেইল:</strong> {userData.user?.email}</p>
          <p><strong>মোবাইল:</strong> {userData.general_information_id?.mobile}</p>
          <p><strong>ধর্ম:</strong> {userData.general_information_id?.religion}</p>
          <p><strong>বৈবাহিক অবস্থা:</strong> {userData.general_information_id?.maritalStatus}</p>
          <p><strong>জন্ম সাল:</strong> {userData.general_information_id?.birthYear}</p>
          <p><strong>রক্তের গ্রুপ:</strong> {userData.general_information_id?.bloodGroup}</p>
          {/* চাইলে আরও ফিল্ড এখানে দেখাতে পারো */}
        </div>
      )}
    </div>
  );
};

export default SearchUser;
