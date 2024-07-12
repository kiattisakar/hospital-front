import React, { useState, useEffect } from 'react';

import Modal from 'react-modal';
import addDoc from '../../img/addDoc.png';
import close from '../../img/close.png';
import editDoc from '../../img/editDoc.png';
import homeIcon from '../../img/homeIcon.png';
import hospitalicon from '../../img/hospitalicon.png';
import patientIcon from '../../img/patientIcon.png';
import searchIcon from '../../img/searchIcon.png';
import Footer from '../header/Footer';
import IpdHeader from '../header/IpdHeader';
import FrmDataTable from './FrmDataTable';
import { HomeIcon } from '@heroicons/react/16/solid';

Modal.setAppElement('#root');

export default function FrmDataTebleIPD(isOpen, onClose, onConfirm) {
  const [currentDate, setCurrentDate] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
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
  const createBill = () => {
    setIsOpen(true);
  };
  const CloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="h-full w-screen">
      <div className="้h-1/6">
        <div className="flex h-2/4 justify-between items-center mb-2 ">
          <div className="space-x-2 mt-2 ml-4 w-full flex ">
            <ButtonWithIcon
              icon={addDoc}
              label="สร้างใบยาใหม่"
              func={createBill}
            />
            <ButtonWithIcon
              icon={editDoc}
              label="สร้างใบยาเพิ่มเติม"
              func={() => {
                alert('สร้างใบยาเพิ่มเติม');
              }}
            />
            <ButtonWithIcon icon={homeIcon} label="สร้างใบยากลับบ้าน" />
            <ButtonWithIcon icon={patientIcon} label="ผู้ป่วย Admit ใหม่" />
            <ButtonWithIcon icon={hospitalicon} label="ย้ายหอผู้ป่วย" />
            <ButtonWithIcon icon={homeIcon} label="ผู้ป่วยกลับบ้าน" />
          </div>
        </div>
/        <div className="flex items-center mb-2 bg-blue-100 p-1 border-2 border-blue-300 text-sm h-10 ">
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
          <form className="flex space-x-4 mr-7 ">
            <div>
              <input type="radio" name="patientStatus"/>
              <label className="ml-2">แสดงทั้งหมด</label>
            </div>
            <div>
              <input type="radio" name="patientStatus"/>
              <label className="ml-2">ผู้ป่วย Admit</label>
            </div>
            <div>
            <input type="radio" name="patientStatus" />
              <label className="ml-2">ผู้ป่วย Discharged</label>
            </div>
          </form>
          <button className="bg-red-500 text-white p-1 rounded hover:bg-red-700 active:bg-red-300 text-sm">
            Discharge
          </button>
/        </div>
      </div>
      <div className="w-full h-5/6 ">
        <FrmDataTable />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        className=" z-10 w-[650px] h-[550px] flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="grid grid-rows-12 bg-white grid-cols-1 w-full h-full ">
          <div className="row-span-1 px-2 bg-gray-400">
            <div className="flex items-center justify-between h-full w-full">
              <div className="flex items-center justify-center">
                <img src={addDoc} alt="add" className="w-6 h-6" />
                <p className="text-white font-bold">สร้างใบยาใหม่</p>
              </div>
              <img
                src={close}
                alt="close"
                className="cursor-pointer w-6 h-6 hover:border-4 hover:border-gray-200 active:border-gray-400"
                onClick={CloseModal}
              />
            </div>
          </div>
          <div className="row-span-1 px-5">
            <div className="text-green-600 text-sm flex justify-around px-16 ">
              <p>0 = ใบสั่งยาผู้ป่วยใน </p>
              <p>1 = ใบสั่งยาผู้ป่วยกลับบ้าน </p>
              <p>3 = ใบสั่งยาผู้ป่วยเพิ่มเติม </p>
            </div>
         ///   <div className="flex gap-3 text-sm p-1 justify-center">
              <p>ชนิดใบสั่งยา: </p>
              <input
                type="text"
                className="w-16 border-2 h-5 border-gray-400 "
              />
              <input type="text" className="border-2 h-5 border-gray-400" />
              <input type="checkbox" name="" id="" />
              <p>offine</p>
            </div>
          </div>
          <div className="row-span-1     ">
            <div className="flex h-full w-full gap-1 justify-center items-center">
              <select
                name="room"
                id="room"
                className="border-2 h-6 w-16 border-gray-400"
              >
                <option value="1">IPD</option>
                <option value="1">OPD</option>
              </select>
              <select
                name="room"
                id="room"
                className="border-2 h-6 w-32 border-gray-400"
              >
                <option value="1">AN</option>
                <option value="1">HN</option>
                <option value="1">เลขที่ใบสั่งยา</option>
                <option value="1">ชื่อ</option>
                <option value="1">นามสกุล</option>
                <option value="1">เลขที่ประชาชน</option>
              </select>
              <input
                type="text"
                name="name"
                id="1"
                className="border-2 h-6 w-42 border-gray-400"
              />
              <button className="w-24 h-7 text-white font-bold bg-gray-400 flex gap-2 justify-center items-center rounded-sm hover:bg-gray-600 active:bg-slate-500">
                <img src={searchIcon} alt="ค้นหา" className="w-5 h-5" />
                <span>ค้นหา</span>
              </button>
            </div>
          </div>
          <div className="row-span-8 bg-yellow-500"></div>
          <div className="row-span-1 bg-green-500"></div>
        </div>
      </Modal>
    </div>
  );
}
const ButtonWithIcon = ({ icon, label, func }) => {
  return (
    <button
      // onClick={func}
      className="bg-white text-gray-700 border-2 p-1 rounded cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-300 text-sm flex flex-col items-center w-32"
    >
      <img src={icon} alt={label} className="w-6 h-6 mr-2 " />
      <span className="mt-2 text-sm text-center">{label}</span>
    </button>
  );
};
