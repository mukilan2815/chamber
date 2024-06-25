import React, { useState } from "react";

const AdminGC = () => {
  const [popup, setPopup] = useState(false);
  const [rejectingRecord, setRejectingRecord] = useState({});
  const [reason, setReason] = useState("");

  return (
    <>
      {popup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Popup</h2>
            <p>
              Please Provide the reason to Reject the application of{" "}
              {rejectingRecord["Nameofapplicant"]}
            </p>
            <textarea
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2 mt-2"
              onChange={(e) => setReason(e.target.value)}
            />
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all">
              Reject
            </button>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4 flex justify-center">
        Table Pending
      </h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Sno
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Applicant Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Verified/Not Verified
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Accept/Reject
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status Admitted
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">1</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                John Doe
              </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Approved by OB</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="bg-green-500 mr-5 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Accept
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Reject
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">2</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Jane Smith
              </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">rejected</td>
            <td className="px-6 py-4 whitespace-nowrap" colSpan="2">
              <p className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider mt-3">
                Reason for rejection
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminGC;
