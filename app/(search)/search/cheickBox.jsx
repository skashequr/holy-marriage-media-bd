import { useState } from "react";

const CheckboxForm = () => {
  const [selectedValues, setSelectedValues] = useState({
    educationMedium: [],
    religionEducation: [],
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

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg ">
      <div className="category mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          পড়াশোনার মাধ্যম
        </h2>
        <div className="space-y-3">
          <label className="flex items-center text-lg text-gray-700 hover:text-purple-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.educationMedium.includes("জেলোরেল")}
              onChange={() =>
                handleCheckboxChange("educationMedium", "জেলোরেল")
              }
              className="mr-2"
            />
            জেলোরেল
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-purple-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.educationMedium.includes("কওমি")}
              onChange={() => handleCheckboxChange("educationMedium", "কওমি")}
              className="mr-2"
            />
            কওমি
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-purple-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.educationMedium.includes("আলিয়া")}
              onChange={() => handleCheckboxChange("educationMedium", "আলিয়া")}
              className="mr-2"
            />
            আলিয়া
          </label>
        </div>
      </div>

      <div className="category">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          ধীনি শিক্ষা সম্পর্কিত যোগ্যতা
        </h2>
        <div className="space-y-3">
          <label className="flex items-center text-lg text-gray-700 hover:text-purple-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.religionEducation.includes("হাফেজ")}
              onChange={() =>
                handleCheckboxChange("religionEducation", "হাফেজ")
              }
              className="mr-2"
            />
            হাফেজ
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-purple-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.religionEducation.includes("মাওলানা")}
              onChange={() =>
                handleCheckboxChange("religionEducation", "মাওলানা")
              }
              className="mr-2"
            />
            মাওলানা
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-purple-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.religionEducation.includes("মুক্তি")}
              onChange={() =>
                handleCheckboxChange("religionEducation", "মুক্তি")
              }
              className="mr-2"
            />
            মুক্তি
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-purple-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.religionEducation.includes("মুকসফির")}
              onChange={() =>
                handleCheckboxChange("religionEducation", "মুকসফির")
              }
              className="mr-2"
            />
            মুকসফির
          </label>
          <label className="flex items-center text-lg text-gray-700 hover:text-purple-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.religionEducation.includes("আদিব")}
              onChange={() => handleCheckboxChange("religionEducation", "আদিব")}
              className="mr-2"
            />
            আদিব
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxForm;
