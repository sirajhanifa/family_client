import React, { useState } from 'react';
import Button1 from '../../components/Button1'; // still unused, consider removing if not used
import usePost from '../../hooks/usePost';
import { useParams } from 'react-router-dom';

const Report = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { username } = useParams();

  const [date, setDate] = useState('');
  const [reportData, setReportData] = useState(null); // Optional: for storing fetched report
  const { postData } = usePost();

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      console.log('Generating report for:', username, date);
      const response = await postData(`${apiUrl}/api/report`, { username, date });

      if (response?.success) {
        setReportData(response.data); // handle data
        alert('Report generated successfully');
      } else {
        alert('Failed to generate report');
      }
    } catch (error) {
      console.error('Error generating report:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md border border-black w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Generate Monthly Report</h2>
        
        <label className="block mb-2 font-medium text-gray-700">Select Month</label>
        <input
          name="date"
          value={date}
          onChange={handleChange}
          type="month"
          className="w-full p-3 border border-black rounded-lg mb-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-200"
        >
          Generate Report
        </button>

        {/* Optional: Show result */}
        {reportData && (
          <div className="mt-4 p-3 border rounded bg-gray-50">
            <h3 className="font-bold">Report Result:</h3>
            <pre className="text-sm">{JSON.stringify(reportData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
