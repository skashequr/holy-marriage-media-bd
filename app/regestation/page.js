"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCredentials } from "@/redux/userSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        form
      );
      dispatch(setCredentials({ user: res.data.user, token: res.data.token }));
      alert(res.data.message || "Registration successful");
      router.push("/user/userbiodata");
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred during registration");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;