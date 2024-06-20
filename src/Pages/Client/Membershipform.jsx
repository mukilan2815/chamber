import React from "react";
import Header from "../../Assets/Formheader.png";
import Navbar from "../../Components/Navbar";
const Membershipform = () => {
  const currentDate = new Date().toLocaleDateString();
  const labels = [
    "Proprietary Firm",
    "Partnership Firm LLP",
    "Private Limited",
    "Public Limited Unlisted",
    "Public Limited Listed",
    "Trust",
    "Society",
    "Associations",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Navbar />
      <div className="flex-col w-[60%] ml-[20%] justify-center items-center">
        <img src={Header} alt="Header" className="w-fit" />
      </div>
      <div className=" text-blue-800 font-medium w-[60%] ml-[20%]">
        <div className="flex justify-end space-x-2">
          <h5 className=" flex justify-end">Date:</h5>
          <input type="text" placeholder="Date" value={currentDate} readOnly />
        </div>
        <div className="flex font-semibold">
          <h6>1. Name of Applicant :</h6>
          <input
            type="text"
            placeholder="Name"
            className="border rounded px-2"
            required
          />
        </div>
        <div class="flex flex-col justify-center">
          <div className="flex items-start justify-between">
            <div class="flex items-center mb-2">
              <label class="font-semibold mr-2">2. Constitution</label>
              <span class="mr-2">:</span>
              <span class="font-semibold">Individual</span>
            </div>

            <div class="mb-4 flex-col items-center">
              <div className="flex mb-5">
                <input type="checkbox" class="mr-2 form-checkbox" />
                <label class="font-semibold mb-2 block">
                  Describe the profession
                </label>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-3 mb-1">
                  <span>1</span>
                  <input type="text" className="border rounded border-black" />
                </div>
                <div class="flex items-center space-x-3 mb-1">
                  <span>2</span>
                  <input type="text" className="border rounded border-black" />
                </div>
                <div class="flex items-center space-x-3">
                  <span>3</span>
                  <input type="text" className="border rounded border-black" />
                </div>
              </div>
            </div>
          </div>
          {labels.map((label) => (
            <div class="flex items-center space-x-3" key={label}>
              <label className="font-semibold mb-2 block">{label}</label>
              <input type="checkbox" className="form-checkbox" />
            </div>
          ))}
        </div>
        <div className="flex space-x-2 mt-5">
          <h6 className="font-bold">3. Year of Establishment :</h6>
          <input
            type="number"
            className="border px-2"
            min={1900}
            max={currentYear}
            placeholder="Year"
          />
        </div>
        <div className="flex mt-5">
          <h6 className="font-bold">4. Business Activity:</h6>
          <textarea className="border ml-24 border-black "></textarea>
        </div>
        <div className="flex mt-5">
          <h6 className="font-bold">5. Registred Office Address:</h6>
          <textarea className="border ml-10 border-black "></textarea>
        </div>
        <div className=" space-x-64 my-10 ">
          <div className="flex space-x-10 mb-10 ">
            <h6>6. Address for Communication:</h6>
            <div className="flex">
              <h6>Office:</h6>
              <textarea
                name=""
                id=""
                className="border ml-10 border-black"
              ></textarea>
            </div>
          </div>
          <div className="flex">
            <h6>Works/Factory :</h6>
            <textarea name="" id="" className="border border-black"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membershipform;
