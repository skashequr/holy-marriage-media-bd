"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    skinTone: '',
    bioDataType: '',
    permanentCity: '',
    bloodGroup: '',
    maritalStatus: ''
  });
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const limit = 15;

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/api/v1/userBiodata/biodata', {
        params: {
          ...filters,
          page,
          limit
        }
      });

      if (res.data.users.length < limit) {
        setHasMore(false);
      }

      if (page === 1) {
        setUsers(res.data.users);
      } else {
        setUsers(prev => [...prev, ...res.data.users]);
      }
    } catch (error) {
      console.error('Error fetching users', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleFilterChange = (e) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const applyFilters = () => {
    setPage(1);
    setHasMore(true);
  };

  useEffect(() => {
    if (page === 1) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">বায়োডাটা তালিকা</h2>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <select name="skinTone" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">গাত্রবর্ণ</option>
          <option value="ফর্সা">ফর্সা</option>
          <option value="উজ্জল ফর্সা">উজ্জল ফর্সা</option>
          <option value="শ্যামলা">শ্যামলা</option>
        </select>

        <select name="bioDataType" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">বায়োডাটা টাইপ</option>
          <option value="পাত্র">পাত্র</option>
          <option value="পাত্রী">পাত্রী</option>
        </select>

        <select name="permanentCity" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">স্থায়ী শহর</option>
          <option value="Gazipur">Gazipur</option>
          <option value="Dhaka">Dhaka</option>
        </select>

        <select name="bloodGroup" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">রক্তের গ্রুপ</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="A+">A+</option>
        </select>

        <select name="maritalStatus" onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">বৈবাহিক অবস্থা</option>
          <option value="বিবাহিত">বিবাহিত</option>
          <option value="ডিভোর্স">ডিভোর্স</option>
          <option value="অবিবাহিত">অবিবাহিত</option>
        </select>
      </div>

      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
      >
        ফিল্টার করুন
      </button>

      {/* User List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user, index) => (
          <div key={index} className="border p-4 rounded shadow-sm bg-white">
            <p><strong>নাম:</strong> {user.general_information_id?.name}</p>
            <p><strong>বায়োডাটা টাইপ:</strong> {user.general_information_id?.bioDataType}</p>
            <p><strong>স্থায়ী ঠিকানা:</strong> {user.address_id?.permanentAddress?.city}</p>
            <p><strong>রক্তের গ্রুপ:</strong> {user.general_information_id?.bloodGroup}</p>
            <p><strong>বৈবাহিক অবস্থা:</strong> {user.general_information_id?.maritalStatus}</p>
          </div>
        ))}
      </div>

      {/* Load More */}
      {hasMore && !loading && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setPage(prev => prev + 1)}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            আরো দেখান
          </button>
        </div>
      )}

      {loading && (
        <div className="mt-4 text-center text-gray-500">লোড হচ্ছে...</div>
      )}
    </div>
  );
};

export default UserList;
