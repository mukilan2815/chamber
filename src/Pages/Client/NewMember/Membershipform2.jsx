import React, { useState } from "react";
import icci from "../../../Assets/Formheader.png";
import { useNavigate } from "react-router-dom";

const Membershipform2 = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const Navigate = useNavigate();
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => {
      const newCheckedItems = { ...prevState, [name]: checked };
      const checkedCount =
        Object.values(newCheckedItems).filter(Boolean).length;
      setIsSubmitEnabled(checkedCount >= 3);
      return newCheckedItems;
    });
  };
  const Handlesubmit = () => {
    var a = localStorage.getItem("formData");

    console.log("Checked Items:", checkedItems);
    Navigate("/submitted");
  };

  return (
    <div>
      <div className="flex font-bold">
        <h6> 21. Reason for Joining Chamber :</h6>
        <textarea name="" id="" className="border-black border ml-4"></textarea>
      </div>
      <div className="flex flex-col ml-4 items-center mt-20 justify-end">
        {image && (
          <img
            src={image}
            alt="Uploaded"
            className="w-32 h-32 object-contain mb-4"
          />
        )}
        <input
          type="file"
          onChange={handleImageUpload}
          className="mb-2 p-2 border border-gray-300 rounded"
        />
        <h6 className="mt-2 text-center">
          Signature of Authorized person with seal
        </h6>
      </div>
      <div className="mb-6">
        <label className="block text-gray-800 text-base font-semibold mb-2">
          Income and Expenditure statement and your Assets and Liabilities
          Statement for the last three financial years
        </label>
        <input
          type="file"
          name="incomeExpenditure"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleFileChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-800 text-base font-semibold mb-2">
          Please enclose any Three of the following:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documentOptions.map((item, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="checkbox"
                name={item}
                checked={!!checkedItems[item]}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>
      {documentOptions.map(
        (item, index) =>
          checkedItems[item] && (
            <div className="mb-6" key={index}>
              <label className="block text-gray-800 text-base font-semibold mb-2">
                Upload file for {item}
              </label>
              <input
                type="file"
                name={item}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleFileChange}
              />
            </div>
          )
      )}
      <div className="mb-6">
        <label className="block text-gray-800 text-base font-semibold mb-2">
          Two passport size colour photographs of the Authorised Representative
        </label>
        <input
          type="file"
          name="passportPhotos"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-800 text-base font-semibold mb-2">
          List of Directors / Partners etc.
        </label>
        <input
          type="file"
          name="directorsList"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleFileChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  );
};

export default Membershipform2;
