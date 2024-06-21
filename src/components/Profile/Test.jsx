import React from 'react';
import homeIcon from '../../../img/homeIcon.png';

import profileIcon from '../../../img/idCard.png';
import noteBookIcon from '../../../img/notebook.png';
import editIcon from '../../../img/icon4.png';
import drugFile from '../../../img/profileIcon.png';
import labImg from '../../../img/lab.png';
import drug from '../../../img/drug.png';
import note from '../../../img/note.png';
import back from '../../../img/back.png';
import saveImg from '../../../img/save.png';
import chemoRoom from '../../../img/chemoRoom.png';
import IPDRoom from '../../../img/IPDRoom.png';
import TPNRoom from '../../../img/TPNRoom.png';
import IVRoom from '../../../img/IVRoom.png';

// import backIcon from '../../../img/back.png';
export default function FrmProfile() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-[1px] h-full w-full">
      <div className="bg-blue-200 row-span-5 grid-cols-1 col-span-2">
        <div className="grid grid-cols-1 grid-rows-12 gap-[2px] h-full w-full">
          <div className="row-span-2 flex justify-center items-center">
            <button className="w-36 h-6 flex justify-center items-center rounded-sm 2xl:text-[13px] 3xl:text-[15px] 4xl:text-[14px] bg-gray-500 text-xs text-white hover:bg-gray-800 active:bg-gray-400">
              รายละเอียดผู้ป่วย
            </button>
          </div>
          <div className=" row-span-10 flex flex-col">
            <div className="grid grid-cols-2 w-full h-24 gap-1 p-1">
              <div className="col-span-1">
                <div className="w-[70px] h-[80px] bg-gray-300  flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="mb-1 ">
                  <span className="block text-gray-700 font-medium">
                    วันที่ Admit:
                  </span>
                  <span className="block border-2 p-[2px] border-black">
                    17/06/2024
                  </span>
                </div>
                <div className="mb-1 ">
                  <span className="block text-gray-700 font-medium">
                    จำนวนใบสั่งยา: 0
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-slate-50    ">
                <div className="ml-4 flex flex-col justify-center 2xl:text-[13px] 3xl:text-[16px] 4xl:text-[18px] items-end">
                  <div className="mb-1  underline">
                    <span className="block text-gray-700 font-medium">HN:</span>
                  </div>
                  <div className="mb-1  underline">
                    <span className="block text-gray-700 2xl:text-[12px] 3xl:text-[17px] font-medium">
                      ชื่อ - นามสกุล:
                    </span>
                  </div>
                  <div className="mb-1  underline">
                    <span className="block text-gray-700 font-medium">
                      <p>เลขบัตรประชาชน: </p>
                    </span>
                  </div>

                  <div className="mb-1  underline">
                    <span className="block text-gray-700 font-medium">
                      หอผู้ป่วย:
                    </span>
                  </div>
                  <div className="mb-1  underline">
                    <span className="block text-gray-700 font-medium">
                      สิทธิ์ผู้ป่วย:
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-200 text-center row-span-5 col-span-10">2</div>
      <div className="bg-blue-200 text-center col-span-12 row-span-1">3</div>
      <div className="bg-blue-200 text-center row-span-6 col-span-12">4</div>
    </div>
  );
}
const ButtonWithIcon = ({ icon, label }) => {
  return (
    <div className="bg-white 2xl:text-[10px] 3xl:text-[12px] text-gray-700 border-2 rounded h-full px-1 cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-300 flex justify-center items-center w-24">
      <img src={icon} alt={label} className="mr-[2px] w-6 h-6" />
      <span className=" text-center">{label}</span>
    </div>
  );
};
const ButtonWithSave = ({ icon, label }) => {
  return (
    <div className="bg-white 2xl:text-[10px] 3xl:text-[15px] text-gray-700 border-[1px] rounded border-black h-full px-1 cursor-pointer hover:bg-gray-200 active:bg-gray-400 flex justify-center items-center w-24">
      <img src={icon} alt={label} className="mr-[2px] w-6 h-6" />
      <span className=" text-center">{label}</span>
    </div>
  );
};
