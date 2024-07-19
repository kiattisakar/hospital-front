import React from 'react';

export default function LabResult() {
  return (
    <div className="w-full h-full">
      <div className="">
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className=" sticky top-0">
              <th className="p-2 border-collapse border border-gray-200  text-center">
                date_result
              </th>
              <th className="p-2 border-collapse border border-gray-200  text-center">
                lab_name
              </th>
              <th className="p-2 border-collapse border border-gray-200  text-center">
                result
              </th>
              <th className="p-2 border-collapse border border-gray-200  text-center">
                {' '}
              </th>
              <th className="p-2 border-collapse border border-gray-200  text-center">
                unit
              </th>
              <th className="p-2 border-collapse border border-gray-200  text-center">
                minresult
              </th>
              <th className="p-2 border-collapse border border-gray-200  text-center">
                maxresult
              </th>
              <th className="p-2 border-collapse border border-gray-200  text-center">
                remark
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
