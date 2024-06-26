import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Assets/Formheader.png";

const Membershipform = () => {
  const navigate = useNavigate();
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
    name: "",
    designation: "",
    pan: "",
    aadhaar: "",
    phone: "",
    mailId: "",
    mainCategory: "",
    subCategory: "",
    domestic: false,
    global: false,
    both: false,
    percentExports: "",
    percentImports: "",
    countryName: "",
    collaboratorName: "",
    large: false,
    medium: false,
    small: false,
    micro: false,
    firstYear: "",
    secondYear: "",
    thirdYear: "",
    directOffice: "",
    directWorks: "",
    indirectContractual: "",
    indirectOutsourced: "",
    esic: "",
    epf: "",
    branchesOutsideIndia: "",
    associationDetails: "",
    officeBearerDetails: "",
    reasonForJoining: "",
  });
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
  const handleCheckboxChange = (event) => {
    setIsMember(event.target.checked);
  };

  // Add handleYesChange function
  const handleYesChange = () => {
    setIsYesChecked(!isYesChecked);
  };

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

  const [isYesChecked, setIsYesChecked] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [image, setImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleProfessionChange = (index, value) => {
    const newProfession = [...formData.profession];
    newProfession[index] = value;
    setFormData({ ...formData, profession: newProfession });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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

    const completeFormData = {
      ...formData,
      legalInfo,
      directors,
      authorizedPerson: {
        name: formData.name,
        designation: formData.designation,
        pan: formData.pan,
        aadhaar: formData.aadhaar,
        phone: formData.phone,
        mailId: formData.mailId,
      },
      industryCategory: {
        mainCategory: formData.mainCategory,
        subCategory: formData.subCategory,
      },
      marketCatering: {
        domestic: formData.domestic,
        global: formData.global,
        both: formData.both,
        percentExports: formData.percentExports,
        percentImports: formData.percentImports,
      },
      foreignCollaboration: {
        countryName: formData.countryName,
        collaboratorName: formData.collaboratorName,
      },
      industryClassification: {
        large: formData.large,
        medium: formData.medium,
        small: formData.small,
        micro: formData.micro,
      },
      annualTurnover: {
        firstYear: formData.firstYear,
        secondYear: formData.secondYear,
        thirdYear: formData.thirdYear,
      },
      employmentDetails: {
        directOffice: formData.directOffice,
        directWorks: formData.directWorks,
        indirectContractual: formData.indirectContractual,
        indirectOutsourced: formData.indirectOutsourced,
      },
      welfareObligations: {
        esic: formData.esic,
        epf: formData.epf,
      },
      branchesOutsideIndia: formData.branchesOutsideIndia,
      memberOfOtherAssociation: isMember,
      otherAssociationDetails: formData.associationDetails,
      holdOfficeBearerPosition: isYesChecked,
      officeBearerDetails: formData.officeBearerDetails,
      reasonForJoining: formData.reasonForJoining,
      signature: image,
    };

    // Store the complete form data in localStorage
    localStorage.setItem("completeFormData", JSON.stringify(completeFormData));

    console.log("Form submitted:", completeFormData);
    navigate("/membershipform2");
  };

  return (
    <div className="w-[60%] ml-[20%] lg:ml-[25%]">
      <form onSubmit={handleSubmit}>
        <div>
          <img src={Header} alt="Header" className="w-fit" />
        </div>
        <div className="text-blue-800 font-medium">
          <div className="text-blue-800 font-medium w-[60%]">
            <div className="flex justify-end space-x-2 mb-4">
              <h5 className="w-32 text-right">Date:</h5>
              <input
                type="text"
                value={currentDate}
                readOnly
                className="border outline-none rounded px-2 flex-grow"
              />
            </div>

            <div className="flex items-center mb-4">
              <h6 className="w-64 mr-3 text-right font-semibold">
                1. Name of Applicant:
              </h6>
              <input
                type="text"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleInputChange}
                className="border rounded px-2 flex-grow"
              />
            </div>

            <div className="flex flex-col mb-4">
              <div className="flex items-center mb-2">
                <label className="w-64 text-right font-semibold">
                  2. Constitution:
                </label>
                <div className="flex space-x-4 items-center ml-2">
                  <span className="ml-2 font-semibold">Individual</span>
                  <input
                    type="checkbox"
                    name="individual"
                    checked={formData.constitution.individual}
                    onChange={handleConstitutionChange}
                    className="form-checkbox"
                  />
                </div>
              </div>
              {formData.constitution.individual && (
                <div className="ml-[8.5rem] mb-4">
                  <label className="font-semibold mb-2 block">
                    Describe the profession:
                  </label>
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
                        className="border rounded border-black flex-grow"
                      />
                    </div>
                  ))}
                </div>
              )}
              {labels.map((label, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <label className="w-64 text-right font-semibold">
                    {label}:
                  </label>
                  <input
                    type="checkbox"
                    name={label.toLowerCase().replace(/\s/g, "")}
                    checked={
                      formData.constitution[
                        label.toLowerCase().replace(/\s/g, "")
                      ]
                    }
                    onChange={handleConstitutionChange}
                    className="form-checkbox ml-2"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center mb-4">
              <h6 className="w-64 text-right font-bold">
                3. Year of Establishment:
              </h6>
              <input
                type="number"
                name="establishmentYear"
                value={formData.establishmentYear}
                onChange={handleInputChange}
                className="border px-2 flex-grow"
                min={1900}
                max={currentYear}
                placeholder="Year"
              />
            </div>

            <div className="flex flex-col space-y-5 mb-5">
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4 font-bold">
                  4. Business Activity:
                </h6>
                <textarea
                  name="businessActivity"
                  value={formData.businessActivity}
                  onChange={handleInputChange}
                  className="border border-black flex-grow h-20"
                ></textarea>
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4 font-bold">
                  5. Registered Office Address:
                </h6>
                <textarea
                  name="registeredOfficeAddress"
                  value={formData.registeredOfficeAddress}
                  onChange={handleInputChange}
                  className="border border-black flex-grow h-20"
                ></textarea>
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4 font-bold">
                  6. Address for Communication - Office:
                </h6>
                <textarea
                  name="officeAddress"
                  value={formData.officeAddress}
                  onChange={handleInputChange}
                  className="border border-black flex-grow h-20"
                ></textarea>
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4 font-bold">
                  Works/Factory:
                </h6>
                <textarea
                  name="worksFactoryAddress"
                  value={formData.worksFactoryAddress}
                  onChange={handleInputChange}
                  className="border border-black flex-grow h-20"
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col space-y-5 font-bold">
              <div>
                <h6>7. Communication Details</h6>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <h6 className="w-64 text-right pr-4">Phone Landline:</h6>
                  <input
                    type="text"
                    name="phoneLandline"
                    value={formData.phoneLandline}
                    onChange={handleInputChange}
                    className="border border-black flex-grow"
                  />
                </div>
                <div className="flex items-center">
                  <h6 className="w-64 text-right pr-4">Phone Mobile:</h6>
                  <input
                    type="text"
                    name="phoneMobile"
                    value={formData.phoneMobile}
                    onChange={handleInputChange}
                    className="border border-black flex-grow"
                  />
                </div>
                <div className="flex items-center">
                  <h6 className="w-64 text-right pr-4">Email ID:</h6>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border border-black flex-grow"
                  />
                </div>
                <div className="flex items-center">
                  <h6 className="w-64 text-right pr-4">Website:</h6>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="border border-black flex-grow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 max-w-4xl">
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
          <div className="flex flex-col space-y-5 font-bold">
            <div>
              <h6>10. Details of the Person Authorized:</h6>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Name:</h6>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border-b outline-none border-black  w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Designation:</h6>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="border-b outline-none border-black  w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">PAN:</h6>
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleInputChange}
                  className="border-b outline-none border-black  w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Aadhaar:</h6>
                <input
                  type="text"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleInputChange}
                  className="border-b outline-none border-black  w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Phone:</h6>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-b outline-none border-black  w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Mail Id:</h6>
                <input
                  type="text"
                  name="mailId"
                  value={formData.mailId}
                  onChange={handleInputChange}
                  className="border-b outline-none border-black  w-64"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 font-bold">
            <div>
              <h6>11. Category of Industry/Trade/Services:</h6>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Main Category:</h6>
                <input
                  type="text"
                  name="mainCategory"
                  value={formData.mainCategory}
                  onChange={handleInputChange}
                  className="px-2 border-b outline-none border-black w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Sub Category:</h6>
                <input
                  type="text"
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleInputChange}
                  className="px-2 border-b outline-none border-black w-64"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 font-bold">
            <div>
              <h6>12. Catering to Market:</h6>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Domestic:</h6>
                <input
                  type="checkbox"
                  name="domestic"
                  checked={formData.domestic}
                  onChange={handleInputChange}
                  className="px-2 border-b border-black w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Global:</h6>
                <input
                  type="checkbox"
                  name="global"
                  checked={formData.global}
                  onChange={handleInputChange}
                  className="px-2 border-b border-black w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Both:</h6>
                <input
                  type="checkbox"
                  name="both"
                  checked={formData.both}
                  onChange={handleInputChange}
                  className="px-2 border-b border-black w-64"
                />
              </div>

              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">% of Exports:</h6>
                <input
                  type="text"
                  name="percentExports"
                  value={formData.percentExports}
                  onChange={handleInputChange}
                  className="px-2 border-b border-black w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">% of Imports:</h6>
                <input
                  type="text"
                  name="percentImports"
                  value={formData.percentImports}
                  onChange={handleInputChange}
                  className="px-2 border-b border-black w-64"
                />
              </div>
            </div>

            <div>
              <h6>13. Foreign Collaboration if any:</h6>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Name of the Country:</h6>
                <input
                  type="text"
                  name="countryName"
                  value={formData.countryName}
                  onChange={handleInputChange}
                  className="px-2 border-b border-black w-64"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">
                  Name of the Collaborator / Joint Venture:
                </h6>
                <input
                  type="text"
                  name="collaboratorName"
                  value={formData.collaboratorName}
                  onChange={handleInputChange}
                  className="px-2 border-b border-black w-64"
                />
              </div>
            </div>

            <div>
              <h6>14. Classification of Industry:</h6>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Large:</h6>
                <input
                  type="checkbox"
                  name="large"
                  checked={formData.large}
                  onChange={handleInputChange}
                  className="ml-2"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Medium:</h6>
                <input
                  type="checkbox"
                  name="medium"
                  checked={formData.medium}
                  onChange={handleInputChange}
                  className="ml-2"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Small:</h6>
                <input
                  type="checkbox"
                  name="small"
                  checked={formData.small}
                  onChange={handleInputChange}
                  className="ml-2"
                />
              </div>
              <div className="flex items-center">
                <h6 className="w-64 text-right pr-4">Micro:</h6>
                <input
                  type="checkbox"
                  name="micro"
                  checked={formData.micro}
                  onChange={handleInputChange}
                  className="ml-2"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-3 font-bold my-10">
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

          <div className="flex flex-col space-y-10 my-10 font-bold">
            <div className="flex items-center">
              <h6 className="w-64 text-right pr-4">
                16. No of Persons Employed:
              </h6>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <h6 className="w-32 text-right pr-2">Direct - Office:</h6>
                  <input
                    type="text"
                    className="border-black outline-none rounded px-2 border w-40"
                  />
                </div>
                <div className="flex items-center">
                  <h6 className="w-32 text-right pr-2">Works:</h6>
                  <input
                    type="text"
                    className="border-black outline-none rounded px-2 border w-40"
                  />
                </div>
                <div className="flex items-center">
                  <h6 className="w-32 text-right pr-2">
                    Indirect - Contractual:
                  </h6>
                  <input
                    type="text"
                    className="border-black outline-none rounded px-2 border w-40"
                  />
                </div>
                <div className="flex items-center">
                  <h6 className="w-32 text-right pr-2">Outsourced:</h6>
                  <input
                    type="text"
                    className="border-black outline-none rounded px-2 border w-40"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <h6 className="w-64 text-right pr-4">17. Welfare Obligations:</h6>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <h6 className="w-32 text-right pr-2">ESIC:</h6>
                  <input
                    type="text"
                    className="border-black outline-none rounded px-2 border w-40"
                  />
                </div>
                <div className="flex items-center">
                  <h6 className="w-32 text-right pr-2">EPF:</h6>
                  <input
                    type="text"
                    className="border-black outline-none rounded px-2 border w-40"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <h6 className="w-64 text-right pr-4">
                18. Details of branches / Outlet outside India:
              </h6>
              <textarea className="border border-black w-64 h-20"></textarea>
            </div>

            <div className="flex-col items-center justify-center">
              <h6 className="w-64 text-right pr-4">
                19. Are you member of any other Association :
              </h6>
              <div className="flex items-center space-x-7">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="YES"
                    checked={isMember}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="YES">YES</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="NO"
                    checked={!isMember}
                    onChange={() => setIsMember(false)}
                  />
                  <label htmlFor="NO">NO</label>
                </div>
              </div>
              {isMember && (
                <div className="flex items-start mt-4">
                  <h6 className="w-64 text-right pr-4">
                    If yes, mention details:
                  </h6>
                  <textarea
                    name="associationDetails"
                    className="px-2 border border-black w-64"
                    rows="4"
                  ></textarea>
                </div>
              )}
            </div>

            <div className="flex-row items-start">
              <div className="flex">
                <h6 className="w-64 text-right pr-4">
                  20. Do you hold any Office Bearers position in any Association
                </h6>
                <div className="flex items-center space-x-7">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={isYesChecked}
                      onChange={handleYesChange}
                    />
                    <label htmlFor="YES">YES</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={!isYesChecked}
                      onChange={handleYesChange}
                    />
                    <label htmlFor="NO">NO</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3"></div>
              {isYesChecked && (
                <div className="flex items-start">
                  <h6 className="w-64 text-right pr-4">
                    If yes - mention the Association Name & position:
                  </h6>
                  <textarea className="border border-black w-64 h-20"></textarea>
                </div>
              )}
            </div>
          </div>

          <div className="flex font-bold">
            <h6> 21. Reason for Joining Chamber :</h6>
            <textarea
              name=""
              id=""
              className="border-black border ml-4"
            ></textarea>
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
          <button
            type="submit"
            className="mt-4 mb-5 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Membershipform;
