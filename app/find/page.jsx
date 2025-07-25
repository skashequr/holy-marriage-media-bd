"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import PatientCard from "@/_components/user/patiantCard";

const VerifyUserList = () => {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    mobile: "",
    maritalStatus: "",
    skinTone: "",
    city: "",
    economicStatus: "",
    bioDataType: "",
    bloodGroup: "",
    birthYearFrom: "",
    birthYearTo: "",
  });

  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async (filtersData = filters, currentPage = page) => {
    try {
      setLoading(true);
      setError("");

      const params = {
        ...filtersData,
        page: currentPage,
        limit,
      };

      const response = await axios.get(
        "http://localhost:5000/api/v1/userBiodata/user/verfiUser",
        { params }
      );
      const { data, total: totalCount } = response.data;

      setUsers(data);
      setTotal(totalCount);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Debounced fetch
  const debouncedFetch = React.useRef(_.debounce(fetchUsers, 400)).current;

  // ✅ Filters change handler
  const handleChange = (e) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilters);
    setPage(1);
    debouncedFetch(newFilters, 1);
  };

  // ✅ Pagination change
  useEffect(() => {
    fetchUsers(filters, page);
  }, [page]);

  // console.log(users);
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Verify Users</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        {[
          ["name", "Name"],
          ["email", "Email"],
          ["mobile", "Mobile"],
          ["city", "City"],
          ["maritalStatus", "Marital Status"],
          ["skinTone", "Skin Tone"],
          ["economicStatus", "Economic Status"],
          ["bioDataType", "Biodata Type"],
          ["bloodGroup", "Blood Group"],
          ["birthYearFrom", "Birth Year From"],
          ["birthYearTo", "Birth Year To"],
        ].map(([key, label]) => (
          <input
            key={key}
            name={key}
            placeholder={label}
            value={filters[key]}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        ))}
      </div>

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {users.map((user) => (
              <PatientCard user={user} key={user?._id}></PatientCard>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span>
              Showing {users.length} of {total}
            </span>

            <div className="flex gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <button
                disabled={page * limit >= total}
                onClick={() => setPage((prev) => prev + 1)}
                className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VerifyUserList;
