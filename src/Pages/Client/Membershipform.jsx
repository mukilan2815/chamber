import React, { useState } from "react";
import Header from "../../Assets/Formheader.png";
import Navbar from "../../Components/Navbar";

const Membershipform = () => {
  const currentDate = new Date().toLocaleDateString();
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    applicantName: "",
    profession: ["", "", ""],
    constitution: {
      individual: false,
      proprietaryFirm: false,
      partnershipFirmLLP: false,
      privateLimited: false,
      publicLimitedUnlisted: false,
      publicLimitedListed: false,
      trust: false,
      society: false,
      associations: false,
    },
    establishmentYear: "",
    businessActivity: "",
    registeredOfficeAddress: "",
    officeAddress: "",
    worksFactoryAddress: "",
    phoneLandline: "",
    phoneMobile: "",
    email: "",
    website: "",
  });

  const [legalInfo, setLegalInfo] = useState({
    aadhaarCardNo: "",
    panCardNo: "",
    gstNo: "",
    companyRegistrationNo: "",
    societyRegistrationNo: "",
  });

  const [directors, setDirectors] = useState([
    { name: "", designation: "", pan: "" },
    { name: "", designation: "", pan: "" },
    { name: "", designation: "", pan: "" },
    { name: "", designation: "", pan: "" },
    { name: "", designation: "", pan: "" },
  ]);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfessionChange = (index, value) => {
    const newProfession = [...formData.profession];
    newProfession[index] = value;
    setFormData({ ...formData, profession: newProfession });
  };

  const handleConstitutionChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      constitution: { ...formData.constitution, [name]: checked },
    });
  };

  const handleLegalInfoChange = (e) => {
    const { name, value } = e.target;
    setLegalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDirectorChange = (index, field, value) => {
    const newDirectors = [...directors];
    newDirectors[index][field] = value;
    setDirectors(newDirectors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithDefaults = {
      ...formData,
      applicantName: formData.applicantName || "Not provided",
      profession: formData.profession.map((p) => p || "Not specified"),
      establishmentYear: formData.establishmentYear || currentYear.toString(),
      businessActivity: formData.businessActivity || "Not provided",
      registeredOfficeAddress:
        formData.registeredOfficeAddress || "Not provided",
      officeAddress: formData.officeAddress || "Not provided",
      worksFactoryAddress: formData.worksFactoryAddress || "Not provided",
      phoneLandline: formData.phoneLandline || "Not provided",
      phoneMobile: formData.phoneMobile || "Not provided",
      email: formData.email || "Not provided",
      website: formData.website || "Not provided",
    };
    console.log("Form submitted:", formDataWithDefaults);
    // Here you would send formDataWithDefaults to your database
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="flex-col w-[60%] ml-[20%] justify-center items-center">
          <img src={Header} alt="Header" className="w-fit" />
        </div>
        <div className="text-blue-800 font-medium w-[60%] ml-[20%]">
          <div className="flex justify-end space-x-2">
            <h5 className="flex justify-end">Date:</h5>
            <input type="text" value={currentDate} readOnly />
          </div>
          <div className="flex font-semibold">
            <h6>1. Name of Applicant :</h6>
            <input
              type="text"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleInputChange}
              className="border rounded px-2"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-start justify-between">
              <div className="flex items-center mb-2">
                <label className="font-semibold mr-2">2. Constitution</label>
                <span className="mr-2">:</span>
                <span className="font-semibold">Individual</span>
                <input
                  type="checkbox"
                  name="individual"
                  checked={formData.constitution.individual}
                  onChange={handleConstitutionChange}
                  className="ml-2"
                />
              </div>
              <div className="mb-4 flex-col items-center">
                <div className="flex mb-5">
                  <input type="checkbox" className="mr-2 form-checkbox" />
                  <label className="font-semibold mb-2 block">
                    Describe the profession
                  </label>
                </div>
                <div className="flex flex-col">
                  {[0, 1, 2].map((index) => (
                    <div
                      className="flex items-center space-x-3 mb-1"
                      key={index}
                    >
                      <span>{index + 1}</span>
                      <input
                        type="text"
                        value={formData.profession[index]}
                        onChange={(e) =>
                          handleProfessionChange(index, e.target.value)
                        }
                        className="border rounded border-black"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {labels.map((label) => (
              <div className="flex items-center space-x-3" key={label}>
                <label className="font-semibold mb-2 block">{label}</label>
                <input
                  type="checkbox"
                  name={label.toLowerCase().replace(/\s/g, "")}
                  checked={
                    formData.constitution[
                      label.toLowerCase().replace(/\s/g, "")
                    ]
                  }
                  onChange={handleConstitutionChange}
                  className="form-checkbox"
                />
              </div>
            ))}
          </div>
          <div className="flex space-x-2 mt-5">
            <h6 className="font-bold">3. Year of Establishment :</h6>
            <input
              type="number"
              name="establishmentYear"
              value={formData.establishmentYear}
              onChange={handleInputChange}
              className="border px-2"
              min={1900}
              max={currentYear}
              placeholder="Year"
            />
          </div>
          <div className="flex mt-5">
            <h6 className="font-bold">4. Business Activity:</h6>
            <textarea
              name="businessActivity"
              value={formData.businessActivity}
              onChange={handleInputChange}
              className="border ml-24 border-black"
            ></textarea>
          </div>
          <div className="flex mt-5">
            <h6 className="font-bold">5. Registered Office Address:</h6>
            <textarea
              name="registeredOfficeAddress"
              value={formData.registeredOfficeAddress}
              onChange={handleInputChange}
              className="border ml-10 border-black"
            ></textarea>
          </div>
          <div className="space-x-64 my-10 font-bold">
            <div className="flex space-x-10 mb-10">
              <h6>6. Address for Communication:</h6>
              <div className="flex">
                <h6>Office:</h6>
                <textarea
                  name="officeAddress"
                  value={formData.officeAddress}
                  onChange={handleInputChange}
                  className="border ml-10 border-black"
                ></textarea>
              </div>
            </div>
            <div className="flex space-x-3">
              <h6>Works/Factory :</h6>
              <textarea
                name="worksFactoryAddress"
                value={formData.worksFactoryAddress}
                onChange={handleInputChange}
                className="border border-black"
              ></textarea>
            </div>
          </div>
          <div className="flex space-x-9 font-bold">
            <div>
              <h6>7. Communication Details </h6>
            </div>
            <div>
              <div className="flex items-center space-x-4 space-y-4">
                <h6>Phone Landline :</h6>
                <input
                  type="text"
                  name="phoneLandline"
                  value={formData.phoneLandline}
                  onChange={handleInputChange}
                  className="px-2 border border-black"
                />
              </div>
              <div className="flex items-center space-x-4 space-y-4">
                <h6>Phone Mobile :</h6>
                <input
                  type="text"
                  name="phoneMobile"
                  value={formData.phoneMobile}
                  onChange={handleInputChange}
                  className="px-2 border border-black"
                />
              </div>
              <div className="flex items-center space-x-4 space-y-4">
                <h6>Email ID : </h6>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-2 border border-black"
                />
              </div>
              <div className="flex items-center space-x-4 space-y-3">
                <h6>Website : </h6>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="px-2 border border-black"
                />
              </div>
            </div>
          </div>
          <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">8. Legal Information:</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-1">Aadhaar Card No</label>
                <input
                  type="text"
                  name="aadhaarCardNo"
                  value={legalInfo.aadhaarCardNo}
                  onChange={handleLegalInfoChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1">PAN Card No</label>
                <input
                  type="text"
                  name="panCardNo"
                  value={legalInfo.panCardNo}
                  onChange={handleLegalInfoChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1">GST No</label>
                <input
                  type="text"
                  name="gstNo"
                  value={legalInfo.gstNo}
                  onChange={handleLegalInfoChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1">
                  Company/Firm Registration No
                </label>
                <input
                  type="text"
                  name="companyRegistrationNo"
                  value={legalInfo.companyRegistrationNo}
                  onChange={handleLegalInfoChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1">
                  Society/Association Registration No
                </label>
                <input
                  type="text"
                  name="societyRegistrationNo"
                  value={legalInfo.societyRegistrationNo}
                  onChange={handleLegalInfoChange}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4">
              9. List of Directors/ Partners/ Office Bearers/ Trustees:
            </h2>
            <table className="w-ful">
              <thead>
                <tr>
                  <th className="text-left ml-10">Sl. No</th>
                  <th className="text-left">Name of the Person</th>
                  <th className="text-left ml-10">Designation</th>
                  <th className="text-left">PAN</th>
                </tr>
              </thead>
              <tbody>
                {directors.map((director, index) => (
                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>
                      <input
                        type="text"
                        value={director.name}
                        onChange={(e) =>
                          handleDirectorChange(index, "name", e.target.value)
                        }
                        className="w-full border-b-2 outline-none border-blue-700 border-dotted  rounded py-1"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={director.designation}
                        onChange={(e) =>
                          handleDirectorChange(
                            index,
                            "designation",
                            e.target.value
                          )
                        }
                        className="w-full border-b-2 outline-none border-blue-700 border-dotted  rounded  py-1"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={director.pan}
                        onChange={(e) =>
                          handleDirectorChange(index, "pan", e.target.value)
                        }
                        className="w-full border-b-2 outline-none border-blue-700 border-dotted  rounded py-1"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex space-x-10">
            <div>
              <h6>10. Details of the Person Authorized : </h6>
            </div>
            <div>
              <div className="flex">
                <h6>Name : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>Designation : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>PAN : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>Aadhaar : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>Phone : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>Mail Id : </h6>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="flex space-x-10">
            <div>
              <h6>11. Category of Industry/Trade/Services : </h6>
            </div>
            <div>
              <div className="flex">
                <h6>Main Category : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>Sub Category : </h6>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="flex space-x-10">
            <div>
              <h6>12. Catering to Market : </h6>
            </div>
            <div>
              <div className="flex">
                <h6>Domestic : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>Global : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>Both : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>% of Exports : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>% of Imports : </h6>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="flex space-x-10 my-10">
            <div>
              <h6>13. Foreign Collaboration if any : </h6>
            </div>
            <div>
              <div className="flex">
                <h6>Name of the Country : </h6>
                <input type="text" />
              </div>
              <div className="flex">
                <h6>Name of the Collaborator / Joint Venture : </h6>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="my-10">
            <div>
              <h6>14 . Classification of Industry : </h6>
            </div>
            <div>
              <div className="flex items-center space-x-7">
                <h6>Large</h6>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="flex items-center space-x-3">
                <h6>Medium</h6>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="flex items-center space-x-7">
                <h6>Small</h6>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="flex space-x-7 items-center">
                <h6>Micro</h6>
                <input type="checkbox" name="" id="" />
              </div>
            </div>
          </div>
          <div className="flex space-x-3 my-10">
            <h6>
              15. Annul Turnover for the last three years (Rs in million):
            </h6>
            <div className="flex space-x-8">
              <div>
                <h6>1st Year</h6>
                <input
                  type="text"
                  className="border-b-4 outline-none border-blue-700 border-dotted "
                />
              </div>
              <div>
                <h6>2nd Year</h6>
                <input
                  type="text"
                  className="border-b-4 outline-none border-blue-700 border-dotted "
                />
              </div>
              <div>
                <h6>3rd Year</h6>
                <input
                  type="text"
                  className="border-b-4 outline-none border-blue-700 border-dotted "
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-10 my-10">
            <div>
              <h6>16. No of Persons Employed : </h6>
            </div>
            <div className=" space-y-3">
              <div className="flex">
                <h6>Direct - Office : </h6>
                <input
                  type="text"
                  className="border-black outline-none rounded ml-2 px-2 border"
                />
              </div>
              <div className="flex">
                <h6>Works : </h6>
                <input
                  type="text"
                  className="border-black outline-none rounded ml-2 px-2 border"
                />
              </div>
              <div className="flex">
                <h6>Indirect - Contractual : </h6>
                <input
                  type="text"
                  className="border-black outline-none rounded ml-2 px-2 border"
                />
              </div>
              <div className="flex">
                <h6>Outsourced : </h6>
                <input
                  type="text"
                  className="border-black outline-none rounded ml-2 px-2 border"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-10 my-10">
            <div>
              <h6>17. Welfare Obligations : </h6>
            </div>
            <div>
              <div className="flex mb-3">
                <h6>ESIC : </h6>
                <input
                  type="text"
                  className="border-black outline-none rounded ml-2 px-2 border"
                />{" "}
              </div>
              <div className="flex">
                <h6>EPF : </h6>
                <input
                  type="text"
                  className="border-black outline-none rounded ml-2 px-2 border"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-10 my-10">
            <div>
              <h6>18. Details of branches / Outlet outside India : </h6>
            </div>
            <textarea className="border border-black"></textarea>
          </div>
          <div className="flex">
            <div className="mr-2">
              <h6>
                19. Are you member of any other Association If yes , mention
                details :
              </h6>
            </div>
            <div className="flex space-x-7">
              <div>
                <input type="checkbox" className="mr-2" />
                <label htmlFor="YES">YES</label>
              </div>
              <div>
                <input type="checkbox" className="mr-2" />
                <label htmlFor="NO">NO</label>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="mr-2">
              <h6>
                20. Do you hold any Office Bearers position in any Association
              </h6>
            </div>
            <div className="flex space-x-7">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label htmlFor="YES">YES</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label htmlFor="NO">NO</label>
              </div>
            </div>
            <div className="flex-col">
              <div>
                <h6>If yes - mention the Association Name & position :</h6>
              </div>
              <textarea name="" id=""></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Membershipform;
