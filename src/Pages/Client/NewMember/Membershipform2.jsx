import React, { useState } from "react";
import icci from "../../../Assets/Formheader.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Membershipform2 = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
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
    var a = localStorage.getItem("completeFormData");
    console.log("FOMR ! ", a);
    axios
      .post("http://127.0.0.1:8000/membershipform/", {
        data: a,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    Navigate("/submitted");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 flex flex-col items-center bg-white shadow-lg rounded-lg">
      <img
        src={icci}
        alt="header"
        className="mb-6 w-full object-cover rounded-lg"
      />

      <form className="w-full">
        <div className="mb-6">
          <label className="block text-gray-800 text-base font-semibold mb-2">
            Income and Expenditure statement and your Assets and Liabilities
            Statement for the last three financial years
          </label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 text-base font-semibold mb-2">
            Please enclose any Three of the following:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Income Tax PAN Number",
              "Factory Registration Certificate",
              "Memorandum & Article of Association (Compulsory for Private / Limited Companies)",
              "GSTIN Registration Copy (Compulsory)",
              "IE Code Certificate",
              "Professional Certificate",
              "Copy of Land Document",
              "Copy of Land Holding (Patta)",
            ].map((item, index) => (
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

        {Object.keys(checkedItems).map((item, index) => {
          return (
            checkedItems[item] && (
              <div className="mb-6" key={index}>
                <label className="block text-gray-800 text-base font-semibold mb-2">
                  Upload file for {item}
                </label>
                <input
                  type="file"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )
          );
        })}

        <div className="mb-6">
          <label className="block text-gray-800 text-base font-semibold mb-2">
            Two passport size colour photographs of the Authorised
            Representative
          </label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            multiple
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 text-base font-semibold mb-2">
            List of Directors / Partners etc.
          </label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              !isSubmitEnabled && "opacity-50 cursor-not-allowed"
            }`}
            type="button"
            disabled={!isSubmitEnabled}
            onClick={Handlesubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Membershipform2;
