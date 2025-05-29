"use client";
import React, { useState } from "react";

const MultiStepForm = () => {
  const [password, setPassword] = useState('');
  const [student, setStudent] = useState({ name: '', email: '', profileImg: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateStudent(password, student);
  };

  const handleCreateStudent = async (password, student) => {
    try {
      const res = await fetch('http://localhost:5000/api/v1/users/create-student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, ...student }),
      });
      const data = await res.json();
      alert('Student created successfully!');
      console.log(data);
    } catch (err) {
      alert('Failed to create student');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Student</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
              Password (optional)
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password or leave empty"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Student Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={student.name}
              onChange={handleChange}
              required
              placeholder="Student full name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Student Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              required
              placeholder="Student email address"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Profile Image URL */}
          <div>
            <label htmlFor="profileImg" className="block mb-1 font-medium text-gray-700">
              Profile Image URL
            </label>
            <input
              type="text"
              id="profileImg"
              name="profileImg"
              value={student.profileImg}
              onChange={handleChange}
              required
              placeholder="Profile image URL"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition"
          >
            Create Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
