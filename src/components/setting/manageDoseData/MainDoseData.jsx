import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

export default function MainDoseData() {
  return (
    <div className="h-full w-full flex-col">
      <Routes>
        <Route path="" element={<ShowData />} />
      </Routes>
    </div>
  );
}

const ShowData = () => {
  const { selectOpen, setSelectOpen } = useState();

  return (
    <div className="w-full h-full">
      <div className="text-[16px] border-b-2 border-collapse border-gray-400 pb-1">
        ข้อมูลยาหลัก
      </div>
      <div className="w-full h-[8%] flex justify-between">
        <div className="w-[60%] flex py-3 px-10 space-x-6 items-center ">
          <input
            type="text"
            className="border w-56 h-10 py-1 px-2 text-sm rounded-lg"
            placeholder="ค้นหา"
          />
          <label htmlFor="mySelect">เลือกภาษา:</label>

          <label htmlFor="mySelect">การแสดงผล :</label>
          <select
            defaultValue="Pick a color"
            className="select border w-56 h-10 py-1 px-2 text-sm rounded-lg"
          >
            <option>ทั้งหมด</option>
            <option>เวชภัณฑ์</option>
            <option>ยา</option>
          </select>
        </div>
        <div className="px-10 w-[30%] flex justify-end items-center">
          <p className="text-red-600 text-[15px] font-bold">
            จำนวน {''} รายการ
          </p>
        </div>
      </div>
      <div className="w-full h-[80%] bg-blue-300 ">
        <div className="h-full overflow-auto px-2 ">
          <table className="w-full min-w-full">
            <thead className="bg-custom-r1 sticky top-0">
              <tr>
                <th className="px-1 py-2 border border-gray-300">รหัสยา</th>
                <th className="px-2 py-2 border border-gray-300">
                  ชื้อยาภาษาอังกฤษ
                </th>
                <th className="px-2 py-2 border border-gray-300">
                  ชื้อยาภาษาไทย
                </th>
                <th className="px-1 py-2 border border-gray-300">
                  Gernaric Name
                </th>
                <th className="px-1 py-2 border border-gray-300">เปิดใช้</th>
                <th className="px-1 py-2 border border-gray-300">ส่งเครื่อง</th>
                <th className="px-1 py-2 border border-gray-300">ส่งผลิต</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr
                key={''}
                className="hover:bg-blue-400 hover:text-white active:bg-blue-700 cursor-pointer"
              >
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300 text-center"></td>
                <td className="px-4 py-2 border border-gray-300 text-center"></td>
                <td className="px-4 py-2 border border-gray-300 text-center"></td>
                <td className="px-4 py-2 border border-gray-300 text-center"></td>
                <td className="px-4 py-2 border border-gray-300 text-center"></td>
                <td className="px-4 py-2 border border-gray-300 text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-[8%] space-x-5 py-2 px-12">
        <button className="w-32 h-full bg-green-300 hover:bg-green-200">
          <p>เพิ่ม</p>
        </button>
        <button className="w-32 h-full bg-yellow-300 hover:bg-yellow-200">
          <p>แก้ไข</p>
        </button>
      </div>
    </div>
  );
};
