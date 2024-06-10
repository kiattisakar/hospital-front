import React from 'react';

import addDoc from '../../img/addDoc.png';
import editDoc from '../../img/editDoc.png';
import homeIcon from '../../img/homeIcon.png';
import hospitalicon from '../../img/hospitalicon.png';
import patientIcon from '../../img/patientIcon.png';
import searchIcon from '../../img/searchIcon.png';
export default function frmMain() {
  const idH = 2;
  const nameH = 'เด็ก 3 ';
  const wards = [
    { name: 'เด็ก 3', count: 23 },
    { name: 'เด็ก 1', count: 18 },
    { name: 'ศัลยกรรมหญิง 1', count: 31 },
    { name: 'NEURO SURGE', count: 23 },
    { name: 'TRAUMA', count: 37 },
    { name: 'URO1', count: 18 },
    { name: 'กระดูกชาย1', count: 28 },
    { name: 'กระดูกชาย2', count: 35 },
    { name: 'กระดูกหญิง', count: 53 },
    { name: 'Stroke unit', count: 19 },
    { name: 'อายุรกรรมหญิง 1', count: 66 },
    { name: 'จักษุ', count: 27 },
    { name: 'ENT', count: 14 },
  ];

  return (
    <div className=" bg-gray-100 min-h-screen h-screen  ">
      <div className="้h-1/5">
        <div className="flex justify-between items-center mb-2">
          <div className="space-x-2 mt-2 ml-4 w-full flex">
            <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={addDoc} alt="ภาพ" className="w-4 h-4  mr-1" />
              <span>สร้างใบยาใหม่</span>
            </button>
            <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 active:bg-gray-300 text-sm  flex justify-center items-center">
              <img src={editDoc} alt="ภาพ" className="w-4 h-4  mr-1" />
              สร้างใบยาเพิ่มเติม
            </button>
            <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={homeIcon} alt="ภาพ" className="w-4 h-4 mr-1" />
              สร้างใบยากลับบ้าน
            </button>
            <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={patientIcon} alt="ภาพ" className="w-7 h-7 mr-1" />
              ผู้ป่วย Admit ใหม่
            </button>
            <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={hospitalicon} alt="ภาพ" className="w-4 h-4 mr-1" />
              ย้ายหอผู้ป่วย
            </button>
            <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={homeIcon} alt="ภาพ" className="w-4 h-4 mr-1" />
              ผู้ป่วยกลับบ้าน
            </button>
          </div>
        </div>
        <div className="flex items-center mb-6 bg-blue-100 p-1 border-2 border-blue-300  ">
          <input
            type="text"
            placeholder="ค้นหา"
            className="border border-gray-300 rounded p-2 w-1/4"
          />
          <button className="bg-blue-700 text-white p-2 rounded mr-10 ml-4 hover:bg-blue-900 active:bg-blue-400 text-sm flex justify-center items-center">
            <img src={searchIcon} alt="ภาพ" className="w-4 h-4 mr-1" />
            ค้นหา
          </button>
          <input
            type="date"
            className="border border-gray-300 rounded p-2 w-1/4 mr-6"
          />
          <div className="flex space-x-4 mr-7">
            <div>
              <label className="mr-2">แสดงทั้งหมด</label>
              <input type="radio" />
            </div>
            <div>
              <label className="mr-2">ผู้ป่วย Admit</label>
              <input type="radio" name="patientStatus" />
            </div>
            <div>
              <label className="mr-2">ผู้ป่วย Discharged</label>
              <input type="radio" name="patientStatus" />
            </div>
          </div>
          <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700 active:bg-red-300 text-sm">
            Discharge
          </button>
        </div>
      </div>
      <div className="h-4/5 flex">
        <div className="h-full w-1/4">
          <ul className="space-y-2 h-full w-full overflow-auto border border-gray-300 p-4">
            {wards.map((ward, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-2 rounded shadow"
              >
                <div className="flex items-center">{ward.name}</div>
                <span>({ward.count})</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 h-full border-l overflow-auto border-gray-300 pl-4">
          <div className="w-full h-8 bg-blue-200 flex justify-between items-center">
            <div className=" w-2/4 h-full flex justify-around items-center px-5">
              <h4 className="font-bold">รหัสหอผู้ป่วย : {idH}</h4>

              <h4 className="font-bold">ชื่อหอผู้ป่วย : {nameH}</h4>
            </div>
            <div className="w-2/4 h-full  flex justify-around items-center px-5">
              <div>
                <label className="mr-2">ผู้ป่วย Admit</label>
                <input type="radio" name="patientStatus" />
              </div>
              <div>
                <label className="mr-2">ผู้ป่วย Admit</label>
                <input type="radio" name="patientStatus" />
              </div>
              <div>
                <label className="mr-2">ผู้ป่วย Admit</label>
                <input type="radio" name="patientStatus" />
              </div>
            </div>
          </div>

          <div>
            <table className="w-full bg-white rounded shadow">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-2">Admit Date</th>
                  <th className="text-left p-2">HN</th>
                  <th className="text-left p-2">AN</th>
                  <th className="text-left p-2">ชื่อ - นามสกุล</th>
                  <th className="text-left p-2">จำนวนใบสั่งยา</th>
                  <th className="text-left p-2">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 20 }).map((_, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="p-2">12/13/2023</td>
                    <td className="p-2">66124249</td>
                    <td className="p-2">6679932</td>
                    <td className="p-2">ชื่อ - นามสกุล</td>
                    <td className="p-2">0</td>
                    <td className="p-2">[1]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
