import { useState } from "react";

const PersonalFilter = () => {
  const [selectedValues, setSelectedValues] = useState({
    skinColor: [],
    physicalEducation: [],
    height: 4, // Default height
  });

  const handleCheckboxChange = (category, value) => {
    setSelectedValues((prevState) => {
      const newCategory = [...prevState[category]];
      if (newCategory.includes(value)) {
        return {
          ...prevState,
          [category]: newCategory.filter((item) => item !== value),
        };
      } else {
        return { ...prevState, [category]: [...newCategory, value] };
      }
    });
  };

  const handleSliderChange = (event) => {
    setSelectedValues({
      ...selectedValues,
      height: event.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg">
      {/* Height Slider */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          উচ্চতা
        </h2>
        <div className="flex justify-between text-lg text-gray-700">
          <span>৪ ফুট</span>
          <span>৭ ফুট</span>
        </div>
        <input
          type="range"
          min="4"
          max="7"
          step="0.1"
          value={selectedValues.height}
          onChange={handleSliderChange}
          className="w-full mt-2"
        />
        <div className="text-center text-xl font-medium mt-2">
          {selectedValues.height} ফুট
        </div>
      </div>

      {/* Skin Color Section */}
      <div className="category mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          গাত্রবর্ণ
        </h2>
        <div className="space-y-4">
          <label className="flex items-center text-lg text-gray-700 hover:text-blue-500 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.skinColor.includes("কালো")}
              onChange={() => handleCheckboxChange("skinColor", "কালো")}
              className="mr-3 w-6 h-6 text-blue-500 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            কালো
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-blue-500 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.skinColor.includes("শ্বেতাঙ্গ")}
              onChange={() => handleCheckboxChange("skinColor", "শ্বেতাঙ্গ")}
              className="mr-3 w-6 h-6 text-blue-500 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            শ্বেতাঙ্গ
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-blue-500 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.skinColor.includes("উজ্জ্বল শ্যামলা")}
              onChange={() =>
                handleCheckboxChange("skinColor", "উজ্জ্বল শ্যামলা")
              }
              className="mr-3 w-6 h-6 text-blue-500 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            উজ্জ্বল শ্যামলা
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-blue-500 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.skinColor.includes("শ্যামলা")}
              onChange={() => handleCheckboxChange("skinColor", "শ্যামলা")}
              className="mr-3 w-6 h-6 text-blue-500 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            শ্যামলা
          </label>
        </div>
      </div>

      {/* Physical Education Section */}
      <div className="category">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          শারীরিক শিক্ষা সম্পর্কিত যোগ্যতা
        </h2>
        <div className="space-y-4">
          <label className="flex items-center text-lg text-gray-700 hover:text-blue-500 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.physicalEducation.includes("হালফি")}
              onChange={() =>
                handleCheckboxChange("physicalEducation", "হালফি")
              }
              className="mr-3 w-6 h-6 text-blue-500 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            হালফি
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-blue-500 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.physicalEducation.includes("মানিকি")}
              onChange={() =>
                handleCheckboxChange("physicalEducation", "মানিকি")
              }
              className="mr-3 w-6 h-6 text-blue-500 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            মানিকি
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-blue-500 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.physicalEducation.includes("শাহিক")}
              onChange={() =>
                handleCheckboxChange("physicalEducation", "শাহিক")
              }
              className="mr-3 w-6 h-6 text-blue-500 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            শাহিক
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-blue-500 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.physicalEducation.includes("হাবিল")}
              onChange={() =>
                handleCheckboxChange("physicalEducation", "হাবিল")
              }
              className="mr-3 w-6 h-6 text-blue-500 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            হাবিল
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-blue-500 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.physicalEducation.includes("আহলে হাদীস")}
              onChange={() =>
                handleCheckboxChange("physicalEducation", "আহলে হাদীস")
              }
              className="mr-3 w-6 h-6 text-blue-500 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            আহলে হাদীস
          </label>
        </div>
      </div>
    </div>
  );
};

export default PersonalFilter;
