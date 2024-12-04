import React, { useState } from "react";
import { tiroBangla } from "../../layout";
import { useDispatch } from "react-redux";
import { setAddress } from "@/redux/adressSlice";

const AddressForm = ({ onPageChange }) => {
  const handleNext = () => {
    onPageChange(3); // Move to the next page (Step 2)
  };
  // Initialize state for each field
  const [currentAddress, setCurrentAddress] = useState({
    area: "",
    city: "",
    state: "",
    village: "",
    postCode: "",
  });

  const [permanentAddress, setPermanentAddress] = useState({
    area: "",
    city: "",
    state: "",
    postCode: "",
  });
  const dispatch = useDispatch();
  // Handle change for form fields
  const handleCurrentAddressChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePermanentAddressChange = (e) => {
    const { name, value } = e.target;
    setPermanentAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
    // Here you can send the data to an API or use it for other purposes
    const address = {
      currentAddress,
      permanentAddress,
    };
    console.log(address);
    dispatch(setAddress(address));
  };

  return (
    <div className={tiroBangla.className}>
      <form onSubmit={handleSubmit}>
        {/* Current Address */}
        <div className="mb-5 pt-3">
          <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
            বর্তমান ঠিকানা
          </label>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="area"
                  id="area"
                  value={currentAddress.area}
                  placeholder="বিভাগ"
                  onChange={handleCurrentAddressChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={currentAddress.city}
                  placeholder="জেলা"
                  onChange={handleCurrentAddressChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
              <div className="mb-5">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={currentAddress.state}
                  placeholder="থানা"
                  onChange={handleCurrentAddressChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
              <div className="mb-5">
                <input
                  type="text"
                  name="village"
                  id="village"
                  value={currentAddress.village}
                  placeholder="গ্রাম"
                  onChange={handleCurrentAddressChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
              <div className="mb-5">
                <input
                  type="text"
                  name="postCode"
                  id="post-code"
                  value={currentAddress.postCode}
                  placeholder="পোষ্ট কোড"
                  onChange={handleCurrentAddressChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Permanent Address */}
        <div className="mb-5 pt-3">
          <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
            স্থায়ী ঠিকানা
          </label>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="area"
                  id="area"
                  value={permanentAddress.area}
                  placeholder="বিভাগ"
                  onChange={handlePermanentAddressChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={permanentAddress.city}
                  placeholder="জেলা"
                  onChange={handlePermanentAddressChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={permanentAddress.state}
                  placeholder="থানা"
                  onChange={handlePermanentAddressChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="postCode"
                  id="post-code"
                  required
                  value={permanentAddress.postCode}
                  placeholder="পোষ্ট কোড"
                  onChange={handlePermanentAddressChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            পরবর্তী
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
