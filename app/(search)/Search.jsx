"use client";
import React, { useState, useEffect } from "react";

const divisions = [
  {
    id: "1",
    name: "Chattogram",
    bn_name: "চট্টগ্রাম",
    url: "www.chittagongdiv.gov.bd",
  },
  {
    id: "2",
    name: "Rajshahi",
    bn_name: "রাজশাহী",
    url: "www.rajshahidiv.gov.bd",
  },
  { id: "3", name: "Khulna", bn_name: "খুলনা", url: "www.khulnadiv.gov.bd" },
  { id: "4", name: "Barisal", bn_name: "বরিশাল", url: "www.barisaldiv.gov.bd" },
  { id: "5", name: "Sylhet", bn_name: "সিলেট", url: "www.sylhetdiv.gov.bd" },
  { id: "6", name: "Dhaka", bn_name: "ঢাকা", url: "www.dhakadiv.gov.bd" },
  { id: "7", name: "Rangpur", bn_name: "রংপুর", url: "www.rangpurdiv.gov.bd" },
  {
    id: "8",
    name: "Mymensingh",
    bn_name: "ময়মনসিংহ",
    url: "www.mymensinghdiv.gov.bd",
  },
];

const Search = ({ value }) => {
  console.log(value);

  const [selectedDivisionId, setSelectedDivisionId] = useState("6"); // Default to Dhaka
  const [selectedJela, setSelectedJela] = useState("");
  const [selectedUpogela, setSelectedUpogela] = useState("");
  const [selectedUnion, setSelectedUnion] = useState("");
  const [jelaData, setJelaData] = useState([]);
  const [upogelaData, setUpogelaData] = useState([]);
  const [unionData, setUnionData] = useState([]);

  const handleDivisionChange = (e) => {
    setSelectedDivisionId(e.target.value);
    setSelectedJela(""); // Reset jela selection
    setSelectedUpogela(""); // Reset upogela selection
    setSelectedUnion(""); // Reset union selection
  };

  const fetchDivisionData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/district?divisionId=${selectedDivisionId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJelaData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchUpogelaData = async () => {
    if (!selectedJela) return; // Do not fetch if no jela is selected
    try {
      const response = await fetch(
        `http://localhost:5000/api/upogela?jelaId=${selectedJela}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUpogelaData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchUnionData = async () => {
    if (!selectedUpogela) return; // Do not fetch if no upogela is selected
    try {
      const response = await fetch(
        `http://localhost:5000/api/unions?upogelaId=${selectedUpogela}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUnionData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchDivisionData(); // Fetch jela data when division changes
  }, [selectedDivisionId]);

  useEffect(() => {
    fetchUpogelaData(); // Fetch upogela data when jela changes
  }, [selectedJela]);

  useEffect(() => {
    fetchUnionData(); // Fetch union data when upogela changes
  }, [selectedUpogela]);

  return (
    <div>
      <div className=" my-4 shadow p-8 m-10 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">
            1
          </div>
          <h2 className="text-lg">{value}</h2>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="w-full mb-4">
            <label htmlFor="division" className="block text-sm mb-2">
              Division
            </label>
            <select
              id="division"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={selectedDivisionId}
              onChange={handleDivisionChange}
            >
              <option value="">Select Division</option>
              {divisions.map((division) => (
                <option key={division.id} value={division.id}>
                  {division.bn_name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full mb-4">
            <label htmlFor="jela" className="block text-sm mb-2">
              Jela
            </label>
            <select
              id="jela"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={selectedJela}
              onChange={(e) => {
                setSelectedJela(e.target.value);
                setSelectedUpogela(""); // Reset upogela selection
                setSelectedUnion(""); // Reset union selection
              }}
              disabled={!selectedDivisionId} // Disable if no division selected
            >
              <option value="">Select Jela</option>
              {jelaData
                .filter((jela) => jela.division_id === selectedDivisionId)
                .map((jela) => (
                  <option key={jela.id} value={jela.id}>
                    {jela.name} ({jela.bn_name})
                  </option>
                ))}
            </select>
          </div>

          <div className="w-full mb-4">
            <label htmlFor="upogela" className="block text-sm mb-2">
              Upogela
            </label>
            <select
              id="upogela"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={selectedUpogela}
              onChange={(e) => {
                setSelectedUpogela(e.target.value);
                setSelectedUnion(""); // Reset union selection
              }}
              disabled={!selectedJela} // Disable if no jela selected
            >
              <option value="">Select Upogela</option>
              {upogelaData.map((upogela) => (
                <option key={upogela.id} value={upogela.id}>
                  {upogela.name} ({upogela.bn_name})
                </option>
              ))}
            </select>
          </div>

          <div className="w-full mb-4">
            <label htmlFor="union" className="block text-sm mb-2">
              Union
            </label>
            <select
              id="union"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={selectedUnion}
              onChange={(e) => setSelectedUnion(e.target.value)}
              disabled={!selectedUpogela} // Disable if no upogela selected
            >
              <option value="">Select Union</option>
              {unionData.map((union) => (
                <option key={union.id} value={union.id}>
                  {union.name} ({union.bn_name})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
