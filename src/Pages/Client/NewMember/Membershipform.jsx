import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Assets/Formheader.png";
import icci from "../../../Assets/Formheader.png";
import axios from "axios";

const Membershipform = () => {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString();
  const currentYear = new Date().getFullYear();
  const [checkedItems, setCheckedItems] = useState({});
  const [files, setFiles] = useState({});
  const [image, setImage] = useState(null);
  const [isMember, setIsMember] = useState(false);
  const [isYesChecked, setIsYesChecked] = useState(false);
  const [directors, setDirectors] = useState([]);

  const handleYesChange = (event) => {
    setIsYesChecked(event.target.checked);
  };

  const [formData, setFormData] = useState({
    NameofApplicant: "John Doe",
    constitution: "Individual",
    profession1: "Software Developer",
    YearofEstablishment: "2010",
    Businessactivity: "Software Development and Consulting",
    Registerofficeaddress: "1234 Software St, Tech City",
    Addressforcommunication_office: "1234 Software St, Tech City",
    Addressforcommunication_work: "5678 Development Ave, Tech Park",
    Communicationdetails_landline: "123-456-7890",
    Communicationdetails_mobile: "098-765-4321",
    Communicationdetails_email: "contact@techcompany.com",
    Communicationdetails_web: "https://www.techcompany.com",
    Legalinfo_aadhar: "123456789101",
    Legalinfo_pancard: "ABCDE1234F",
    Legalinfo_GSTNo: "22AAAAA0000A1Z5",
    Legalinfo_CompanyFirmRegNo: "C12345678901234",
    Legalinfo_SocietyAssociationRegNo: "12345678901234",
    Personauthorized_Name: "Jane Doe",
    Personauthorized_Designation: "CTO",
    personauthorized_pan: "BCDEA1234G",
    personauthorized_aadhar: "432167890123",
    personauthorized_phone: "098-765-4321",
    personauthorized_email: "jane.doe@techcompany.com",
    Maincategory: "IT and Software",
    Subcategory: "Software Development",
    Cateringtomarket: "Global",
    Percentageofimports: "10%",
    Percentageofexports: "50%",
    Foreigncollaboration_country: "USA",
    Foreigncollaboration_collaborator: "GlobalTech Inc",
    Classificationofindustry: "Large",
    Annualturnover_year1: "10",
    Annualturnover_year2: "1200000",
    Annualturnover_year3: "150",
    Noofpersonsemployed_direct: "50",
    Noofpersonsemployed_works: "200",
    Noofpersonsemployed_indirect: "100",
    Noofpersonsemployed_outsourced: "30",
    ESIC: "Yes",
    EPF: "Yes",
    Detailsofbranches: "Tech City, Tech Park",
    Memberofanyother: "Yes",
    association_name: "Tech Industry Association",
    is_office_bearer: "No",
    association_position: "",
    reason_for_joining_chamber: "Networking and Business Opportunities",
    e_sign: "JohnDoeSignature.png",
    IncomeandExpenditure: "IncomeandExpenditure.pdf",
    incometaxtpan: "ABCDE1234F",
    FactoryRegistrationCertificate: "FactoryRegCert.pdf",
    MemorandumArticleofAssociation: "MemorandumArticle.pdf",
    GSTINRegistrationCopy: "GSTINRegCopy.pdf",
    IECodeCertificate: "IECodeCert.pdf",
    ProfessionalCertificate: "ProfessionalCert.pdf",
    CopyofLandDocument: "LandDoc.pdf",
    LandHolding: "LandHoldingDetails.pdf",
    passportsizephoto: "JohnDoePhoto.png",
    DirectorsPartners: "DirectorsPartnersDetails.pdf",
    form_status: "pending",
    Reasonforrejection: "",
  });

  const [legalInfo, setLegalInfo] = "Your legal information here.";

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

  const documentOptions = [
    "Income Tax PAN Number",
    "Factory Registration Certificate",
    "Memorandum & Article of Association (Compulsory for Private / Limited Companies)",
    "GSTIN Registration Copy (Compulsory)",
    "IE Code Certificate",
    "Professional Certificate",
    "Copy of Land Document",
    "Copy of Land Holding (Patta)",
  ];

  const handleCheckboxChange = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    });
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles({
      ...files,
      [name]: selectedFiles,
    });
  };

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
      NameofApplicant: formData.NameofApplicant,
      constitution: formData.constitution,
      profession1: formData.profession1,
      YearofEstablishment: formData.YearofEstablishment,
      Businessactivity: formData.Businessactivity,
      Registerofficeaddress: formData.Registerofficeaddress,
      Addressforcommunication_office: formData.Addressforcommunication_office,
      Addressforcommunication_work: formData.Addressforcommunication_work,
      Communicationdetails_landline: formData.Communicationdetails_landline,
      Communicationdetails_mobile: formData.Communicationdetails_mobile,
      Communicationdetails_email: formData.Communicationdetails_email,
      Communicationdetails_web: formData.Communicationdetails_web,
      Legalinfo_aadhar: formData.Legalinfo_aadhar,
      Legalinfo_pancard: formData.Legalinfo_pancard,
      Legalinfo_GSTNo: formData.Legalinfo_GSTNo,
      Legalinfo_CompanyFirmRegNo: formData.Legalinfo_CompanyFirmRegNo,
      Legalinfo_SocietyAssociationRegNo:
        formData.Legalinfo_SocietyAssociationRegNo,
      Personauthorized_Name: formData.Personauthorized_Name,
      Personauthorized_Designation: formData.Personauthorized_Designation,
      personauthorized_pan: formData.personauthorized_pan,
      personauthorized_aadhar: formData.personauthorized_aadhar,
      personauthorized_phone: formData.personauthorized_phone,
      personauthorized_email: formData.personauthorized_email,
      Maincategory: formData.Maincategory,
      Subcategory: formData.Subcategory,
      Cateringtomarket: formData.Cateringtomarket,
      Percentageofimports: formData.Percentageofimports,
      Percentageofexports: formData.Percentageofexports,
      Foreigncollaboration_country: formData.Foreigncollaboration_country,
      Foreigncollaboration_collaborator:
        formData.Foreigncollaboration_collaborator,
      Classificationofindustry: formData.Classificationofindustry,
      Annualturnover_year1: formData.Annualturnover_year1,
      Annualturnover_year2: formData.Annualturnover_year2,
      Annualturnover_year3: formData.Annualturnover_year3,
      Noofpersonsemployed_direct: formData.Noofpersonsemployed_direct,
      Noofpersonsemployed_works: formData.Noofpersonsemployed_works,
      Noofpersonsemployed_indirect: formData.Noofpersonsemployed_indirect,
      Noofpersonsemployed_outsourced: formData.Noofpersonsemployed_outsourced,
      ESIC: formData.ESIC,
      EPF: formData.EPF,
      Detailsofbranches: formData.Detailsofbranches,
      Memberofanyother: formData.Memberofanyother,
      association_name: formData.association_name,
      is_office_bearer: formData.is_office_bearer,
      association_position: formData.association_position,
      reason_for_joining_chamber: formData.reason_for_joining_chamber,
      e_sign: image,
      IncomeandExpenditure: formData.IncomeandExpenditure,
      incometaxtpan: formData.incometaxtpan,
      FactoryRegistrationCertificate: formData.FactoryRegistrationCertificate,
      MemorandumArticleofAssociation: formData.MemorandumArticleofAssociation,
      GSTINRegistrationCopy: formData.GSTINRegistrationCopy,
      IECodeCertificate: formData.IECodeCertificate,
      ProfessionalCertificate: formData.ProfessionalCertificate,
      CopyofLandDocument: formData.CopyofLandDocument,
      LandHolding: formData.LandHolding,
      passportsizephoto: formData.passportsizephoto,
      DirectorsPartners: formData.DirectorsPartners,
      form_status: formData.form_status,
      Reasonforrejection: formData.Reasonforrejection,
    };

    console.log(completeFormData);

    // Store the complete form data in localStorage
    localStorage.setItem("completeFormData", JSON.stringify(completeFormData));
    navigate("/analysis");
    console.log("Form submitted:", completeFormData);
    axios.post("http://192.168.169.17:8000/membershipform/", completeFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div className="w-[60%] ml-[20%] lg:ml-[25%]">
      <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
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
                Two passport size colour photographs of the Authorised
                Representative
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
        </div>
      </form>
    </div>
  );
};

export default Membershipform;
