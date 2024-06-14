import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FrmDataTable() {
  const [wards, setWards] = useState([]);
  const idH = 2;
  const nameH = '';

  useEffect(() => {
    axios.get('http://localhost:3000/api/getWardData')
      .then(response => {
        setWards(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the ward data!', error);
      });
  }, []);

  return (
    <div className="h-full flex">
      <div className="w-1/4 top">
        <div className="h-full w-full border border-gray-300 p-4">
          <div className="overflow-auto h-full">
            <table className="min-w-full border-collapse">
              <thead className="sticky top-0 bg-gray-100 z-10">
                <tr className="bg-white">
                  <th className="px-4 py-2 border border-gray-300">หอผู้ป่วย</th>
                  <th className="px-4 py-2 border border-gray-300">จำนวน</th>
                </tr>
              </thead>
              <tbody>
                {wards.map((ward, index) => (
                  <tr key={index} className="hover:bg-blue-400 hover:text-white active:bg-blue-700 cursor-pointer">
                    <td className="px-4 py-2 border border-gray-300">{ward.warddesc}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{ward.wardcode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-full border-l overflow-auto border-gray-300 pl-4">
        <div className="w-full h-8 bg-blue-200 flex justify-between items-center">
          <div className="w-2/4 h-full flex justify-around items-center px-5">
            <h4 className="font-bold">รหัสหอผู้ป่วย : {idH}</h4>
            <h4 className="font-bold">ชื่อหอผู้ป่วย : {nameH}</h4>
          </div>
          <div className="w-2/4 h-full flex justify-around items-center px-5">
            <div>
              <label className="mr-2">แสดงทั้งหมด</label>
              <input type="radio" name="patientStatus" />
            </div>
            <div>
              <label className="mr-2">ไม่มีใบสังยา</label>
              <input type="radio" name="patientStatus" />
            </div>
            <div>
              <label className="mr-2">มีใบสั่งยา</label>
              <input type="radio" name="patientStatus" />
            </div>
          </div>
        </div>
        <div>
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200 sticky top-0">
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
  );
}
