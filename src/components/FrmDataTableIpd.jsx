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
    <div className=" bg-gray-100 h-full  ">
      <div className="้h-1/6">
        <header className="h-full">
          <IpdHeader />
        </header>
        <div className="flex h-2/4 justify-between items-center mb-2">
          <div className="space-x-2 mt-2 ml-4 w-full flex">
            <button className="bg-gray-500 text-white p-1 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={addDoc} alt="ภาพ" className="w-4 h-4  mr-1" />
              <span>สร้างใบยาใหม่</span>
            </button>
            <button className="bg-gray-500 text-white p-1 rounded hover:bg-gray-700 active:bg-gray-300 text-sm  flex justify-center items-center">
              <img src={editDoc} alt="ภาพ" className="w-4 h-4  mr-1" />
              สร้างใบยาเพิ่มเติม
            </button>
            <button className="bg-gray-500 text-white p-1 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={homeIcon} alt="ภาพ" className="w-4 h-4 mr-1" />
              สร้างใบยากลับบ้าน
            </button>
            <button className="bg-gray-500 text-white p-1 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={patientIcon} alt="ภาพ" className="w-7 h-7 mr-1" />
              ผู้ป่วย Admit ใหม่
            </button>
            <button className="bg-gray-500 text-white p-1 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={hospitalicon} alt="ภาพ" className="w-4 h-4 mr-1" />
              ย้ายหอผู้ป่วย
            </button>
            <button className="bg-gray-500 text-white p-1 rounded hover:bg-gray-700 active:bg-gray-300 text-sm flex justify-center items-center">
              <img src={homeIcon} alt="ภาพ" className="w-4 h-4 mr-1" />
              ผู้ป่วยกลับบ้าน
            </button>
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
      <div className="h-3/4 ">
        <FrmDataTable />
      </div>

      <footer className="bg-gray-500 text-white py-4 text-xs w-full fixed bottom-0 left-0 border-y-2 border-white-300">
        <div className="container mx-auto ">
          <Footer />
        </div>
      </footer>
    </div>
  );
}