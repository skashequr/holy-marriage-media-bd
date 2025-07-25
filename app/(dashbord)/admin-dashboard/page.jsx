"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUserList = () => {
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    mobile: '',
    maritalStatus: '',
    skinTone: '',
    city: '',
    economicStatus: '',
    bioDataType: '',
    bloodGroup: '',
    ageFrom: '',    // নতুন
    ageTo: '',      // নতুন
    birthYearFrom: '', // এই দুইটা internally useEffect এ সেট হবে
    birthYearTo: '',
    page: 1,
    limit: 10,
  });

  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API call function
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const queryString = new URLSearchParams(filters).toString();
      const res = await axios.get(`http://localhost:5000/api/v1/userBiodata/admin/users?${queryString}`);
      setUsers(res.data.data);
      setTotal(res.data.total);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }

    setLoading(false);
  };

  // যখন filters পরিবর্তন হবে তখন ডাটা ফেচ করব
  useEffect(() => {
    fetchUsers();
  }, [filters]);

  // বয়স থেকে birthYear রেঞ্জ হিসাব করে filters এ আপডেট করার জন্য useEffect
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const ageFromNum = parseInt(filters.ageFrom);
    const ageToNum = parseInt(filters.ageTo);

    let birthYearFrom = '';
    let birthYearTo = '';

    if (!isNaN(ageFromNum)) {
      birthYearTo = (currentYear - ageFromNum).toString();
    }
    if (!isNaN(ageToNum)) {
      birthYearFrom = (currentYear - ageToNum).toString();
    }

    // birthYearFrom এবং birthYearTo filters এ সেট করব যদি ভিন্ন হয়
    setFilters(prev => {
      if (prev.birthYearFrom !== birthYearFrom || prev.birthYearTo !== birthYearTo) {
        return { ...prev, birthYearFrom, birthYearTo };
      }
      return prev;
    });
  }, [filters.ageFrom, filters.ageTo]);

  // ফিল্টার ইনপুট পরিবর্তন হ্যান্ডলার
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
      page: 1, // নতুন ফিল্টার এলে পেজ ১ এ যাবে
    }));
  };

  // পেজ পরিবর্তন হ্যান্ডলার
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(total / filters.limit)) return;
    setFilters(prev => ({ ...prev, page: newPage }));
  };

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Admin User Biodata</h2>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={filters.name}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={filters.email}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={filters.mobile}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={filters.city}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />

        <select name="maritalStatus" value={filters.maritalStatus} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Marital Status</option>
          <option value="ডিভোর্স">ডিভোর্স</option>
          <option value="অবিবাহিত">অবিবাহিত</option>
        </select>

        <select name="skinTone" value={filters.skinTone} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Skin Tone</option>
          <option value="fair">Fair</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
        </select>

        <select name="economicStatus" value={filters.economicStatus} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Economic Status</option>
          <option value="lower">Lower</option>
          <option value="middle">Middle</option>
          <option value="upper">Upper</option>
        </select>

        <select name="bioDataType" value={filters.bioDataType} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Biodata Type</option>
          <option value="পাত্র">পাত্র</option>
          <option value="jobHolder">Job Holder</option>
          <option value="business">Business</option>
        </select>

        <select name="bloodGroup" value={filters.bloodGroup} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        {/* Age Range Inputs */}
        <input
          type="number"
          name="ageFrom"
          placeholder="Age From"
          value={filters.ageFrom}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          min="0"
          max="100"
        />
        <input
          type="number"
          name="ageTo"
          placeholder="Age To"
          value={filters.ageTo}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          min="0"
          max="100"
        />
      </div>

      {/* Loading & Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* User Table */}
      {!loading && users.length === 0 && <p>No users found.</p>}

      {users.length > 0 && (
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 px-3 py-2">Name</th>
              <th className="border border-gray-300 px-3 py-2">Email</th>
              <th className="border border-gray-300 px-3 py-2">Mobile</th>
              <th className="border border-gray-300 px-3 py-2">City</th>
              <th className="border border-gray-300 px-3 py-2">Marital Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td className="border border-gray-300 px-3 py-2">{u.user?.name || '-'}</td>
                <td className="border border-gray-300 px-3 py-2">{u.user?.email || '-'}</td>
                <td className="border border-gray-300 px-3 py-2">{u.user?.mobile || '-'}</td>
                <td className="border border-gray-300 px-3 py-2">{u.address_id?.permanentAddress?.city || '-'}</td>
                <td className="border border-gray-300 px-3 py-2">{u.general_information_id?.maritalStatus || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={filters.page <= 1}
          onClick={() => handlePageChange(filters.page - 1)}
          className="bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded"
        >
          Previous
        </button>

        <span>
          Page {filters.page} of {Math.ceil(total / filters.limit)}
        </span>

        <button
          disabled={filters.page >= Math.ceil(total / filters.limit)}
          onClick={() => handlePageChange(filters.page + 1)}
          className="bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminUserList;
