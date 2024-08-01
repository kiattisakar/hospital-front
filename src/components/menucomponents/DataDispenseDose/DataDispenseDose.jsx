import React from 'react';

export default function DataDispenseDose() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[8%] bg-red-200 flex flex-start item-center">
        <div className="w-[5%] h-full bg-red-300 flex justify-start items-center space-x-1">
          <span className="text-left w-[100%]">ค้นหาจาก :</span>
        </div>
        <div className="w-[10%] h-full bg-green-200 flex flex-end item-center">
          <button>เลือกหอผู้ป่วย</button>
        </div>
        <div className="w-[15%] h-full bg-yellow-50"></div>
        <div className="w-[15%] h-full bg-yellow-300"></div>
        <div className="w-[15%] h-full bg-yellow-500"></div>
        <div className="w-[10%] h-full bg-yellow-700"></div>
      </div>
      <div className="w-full h-[92%] bg-red-400">
        <div className=" border border-collapse border-black w-full h-full bg-white">
          <div className="max-h-full w-full overflow-auto">
            <table className="w-full border-collapse bg-white border border-gray-400">
              <thead className="stick top-0 ">
                <tr>
                  <th className="border border-gray-300 p-2 text-xs min-w-[35px]"></th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                    ใบสั่งยา
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[200px]">
                    Order Type
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[200px]">
                    HN
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[200px]">
                    AN
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[250px]">
                    ชื่อ-นามสกุล
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[150px]">
                    หอผู้ป่วย
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                    Screen
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                    JVM
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                    LED
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                    HAD
                  </th>
                  <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                    CheckOut
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
