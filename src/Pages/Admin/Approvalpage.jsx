import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const ApprovalPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const csrfToken = Cookies.get("csrftoken")
        // if (!csrfToken) {
        //   console.log("Retrying to fetch CSRF token...");
        //   setTimeout(fetchApplications, 1000);
        //   return;
        // }
        console.log("CSRF Token:", csrfToken);

        const response = await axios.get(
          "http://192.168.169.82:8000/approval/",
          {
            withCredentials: true,
            headers: {
              "X-CSRFToken": csrfToken,
            },
          }
        );
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Approval Page</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="py-2 px-4 border-b">S.No</th>
              <th className="py-2 px-4 border-b">Name of Applicant</th>
              <th className="py-2 px-4 border-b">Status Admitted</th>
              <th className="py-2 px-4 border-b">Accept/Reject</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={application.id} className="text-gray-700">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">
                  {application.NameofApplicant}
                </td>
                <td className="py-2 px-4 border-b">
                  {application.form_status}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                    // onClick={() => handleAccept(application.id)}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 ml-2 rounded focus:outline-none focus:shadow-outline"
                    // onClick={() => handleReject(application.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovalPage;
