import React from 'react';

const Table = ({ data }) => {
  if (!data || data.length === 0) return <p>No data to display</p>;

  // Exclude _id and date
  const headers = Object.keys(data[0]).filter(
    (key) => key.toLowerCase() !== '_id' && key.toLowerCase() !== 'date'
  );

  return (
    <table className="w-1/3 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
      <thead>
        <tr className="bg-gray-100">
          {headers.map((col, index) => (
            <th key={index} className="px-4 py-2 border-b font-semibold text-gray-700">
              {col.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            {headers.map((col, colIndex) => (
              <td key={colIndex} className="px-4 py-2 border-b">
                {item[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
