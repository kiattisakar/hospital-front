import React, { useState, useEffect } from 'react';
import addDoc from '../../img/addDoc.png';
import editDoc from '../../img/editDoc.png';
import homeIcon from '../../img/homeIcon.png';
import hospitalicon from '../../img/hospitalicon.png';
import patientIcon from '../../img/patientIcon.png';
import searchIcon from '../../img/searchIcon.png';
import Footer from '../header/Footer';
import IpdHeader from '../header/IpdHeader';
import FrmDataTable from './FrmDataTable';
import { HomeIcon } from '@heroicons/react/16/solid';

export default function FrmDataTebleIPD() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = formatDateToDDMMYYYY(today); ///ใช่ตัวแปล formattedDate
    console.log(formattedDate);
    setCurrentDate(formattedDate);
  }, []);

  const formatDateToDDMMYYYY = (date) => {
    const day = ('0' + date.getDate()).slice(-2); // เติม 0 ด้านหน้า
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // เพิ่ม 1 ให้เดือนและเติม 0 ด้านหน้า
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const formattedDate = formatDateToDDMMYYYY(selectedDate);
    setCurrentDate(formattedDate);
  };
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
    <div className="h-full w-screen">
      <div className="้h-1/6">
        <div className="flex h-2/4 justify-between items-center mb-2">
          <div className="space-x-2 mt-2 ml-4 w-full flex">
            <ButtonWithIcon icon={addDoc} label="สร้างใบยาใหม่" />
            <ButtonWithIcon icon={editDoc} label="สร้างใบยาเพิ่มเติม" />
            <ButtonWithIcon icon={homeIcon} label="สร้างใบยากลับบ้าน" />
            <ButtonWithIcon icon={patientIcon} label="ผู้ป่วย Admit ใหม่" />
            <ButtonWithIcon icon={hospitalicon} label="ย้ายหอผู้ป่วย" />
            <ButtonWithIcon icon={homeIcon} label="ผู้ป่วยกลับบ้าน" />
          </div>
        </div>
        <div className="flex items-center mb-2 bg-blue-100 p-1 border-2 border-blue-300 text-sm h-10">
          <input
            type="text"
            placeholder="ค้นหา"
            className="border border-gray-300 rounded p-2 w-1/4"
          />
          <button className="bg-blue-700 text-white p-1 rounded mr-10 ml-4 hover:bg-blue-900 active:bg-blue-400 text-sm flex justify-center items-center">
            <img src={searchIcon} alt="ภาพ" className="w-4 h-4 mr-1" />
            ค้นหา
          </button>
          <input
            type="date"
            className="border border-gray-300 rounded p-1 w-1/4 mr-6"
            value={currentDate.split('/').reverse().join('-')}
            onChange={handleDateChange}
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
          <button className="bg-red-500 text-white p-1 rounded hover:bg-red-700 active:bg-red-300 text-sm">
            Discharge
          </button>
        </div>
      </div>
      <div className="w-full h-5/6">
        <FrmDataTable />
      </div>
    </div>
  );
}
const ButtonWithIcon = ({ icon, label, bgColor }) => {
  return (
    <div className="bg-white  text-gray-700 border-2 p-1 rounded  hover:bg-gray-700 hover:text-white active:bg-gray-300 text-sm flex flex-col items-center w-32">
      <img src={icon} alt={label} className="w-6 h-6 mr-2 " />
      <span className="mt-2 text-sm text-center">{label}</span>
    </div>
  );
};
