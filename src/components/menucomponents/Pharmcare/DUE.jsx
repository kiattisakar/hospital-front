import React from 'react';

export default function DUE() {
  return (
    <div className="w-full h-full grid grid-rows-3 grid-cols-4">
      <div className="row-start-1 row-span-2 col-span-4 col-start-1 grid grid-rows-11 grid-cols-4">
        <div className="row-start-2 row-span-2 col-span-2 col-start-1 flex justify-center items-center space-x-1 ">
          <span className="w-[30%] h-full flex justify-end items-start ">
            DrugDUE :
          </span>
          <textarea className="w-[35%] h-[95%] border-collapse border border-gray-400 p-2"></textarea>
          <button className="w-[5%] h-[50%] bg-gray-700 rounded rotate-180 text-white">
            ^
          </button>
        </div>
        <div className="row-start-4 row-span-1 col-span-2 col-start-1 flex justify-center items-center space-x-1 ">
          <span className="w-[30%] flex justify-end items-center ">
            Doctor :
          </span>
          <input
            type="text"
            className="w-[35%] h-[90%] border-collapse border border-gray-400 px-2"
          />
          <button className="w-[5%] h-[90%] bg-gray-700 rounded rotate-180 text-white">
            ^
          </button>
        </div>
        <div className="row-start-5 row-span-1 col-span-2 col-start-1 flex justify-center items-center space-x-2">
          <span className="w-[30%] flex justify-end items-center ">
            Indication :
          </span>
          <select
            className="w-[40%] h-[90%] border-collapse border border-gray-400 px-2"
            name="ward"
            id="1"
          >
            <option value="1">พบและเกิดแล้ว</option>
            <option value="2">พบแต่เกิด</option>
            <option value="3">ยังไม่พบ</option>
            <option value="4">ไม่พบ</option>
          </select>
        </div>
        <div className="row-start-6 row-span-1 col-span-2 col-start-1 flex justify-center items-center space-x-2">
          <span className="w-[30%] flex justify-end items-center ">
            Empiric :
          </span>
          <select
            className="w-[40%] h-[90%] border-collapse border border-gray-400 px-2"
            name="ward"
            id="1"
          >
            <option value="1">พบและเกิดแล้ว</option>
            <option value="2">พบแต่เกิด</option>
            <option value="3">ยังไม่พบ</option>
            <option value="4">ไม่พบ</option>
          </select>
        </div>
        <div className="row-start-7 row-span-1 col-span-2 col-start-1 flex justify-center items-center space-x-2">
          <span className="w-[30%] flex justify-end items-center ">
            Document :
          </span>
          <select
            className="w-[40%] h-[90%] border-collapse border border-gray-400 px-2"
            name="ward"
            id="1"
          >
            <option value="1">พบและเกิดแล้ว</option>
            <option value="2">พบแต่เกิด</option>
            <option value="3">ยังไม่พบ</option>
            <option value="4">ไม่พบ</option>
          </select>
        </div>
        <div className="row-start-8 row-span-1 col-span-2 col-start-1 flex justify-center items-center space-x-2">
          <span className="w-[30%] flex justify-end items-center ">
            Start :
          </span>
          <select
            className="w-[40%] h-[90%] border-collapse border border-gray-400 px-2"
            name="ward"
            id="1"
          >
            <option value="1">พบและเกิดแล้ว</option>
            <option value="2">พบแต่เกิด</option>
            <option value="3">ยังไม่พบ</option>
            <option value="4">ไม่พบ</option>
          </select>
        </div>
        <div className="row-start-9 row-span-1 col-span-2 col-start-1 flex justify-center items-center space-x-2">
          <span className="w-[30%] flex justify-end items-center ">
            Combine :
          </span>
          <select
            className="w-[40%] h-[90%] border-collapse border border-gray-400 px-2"
            name="ward"
            id="1"
          >
            <option value="1">พบและเกิดแล้ว</option>
            <option value="2">พบแต่เกิด</option>
            <option value="3">ยังไม่พบ</option>
            <option value="4">ไม่พบ</option>
          </select>
        </div>
        <div className="row-start-10 row-span-1 col-span-2 col-start-1 flex justify-center items-center space-x-2">
          <span className="w-[30%] flex justify-end items-center ">
            Intervention:
          </span>
          <select
            className="w-[40%] h-[90%] border-collapse border border-gray-400 px-2"
            name="ward"
            id="1"
          >
            <option value="1">พบและเกิดแล้ว</option>
            <option value="2">พบแต่เกิด</option>
            <option value="3">ยังไม่พบ</option>
            <option value="4">ไม่พบ</option>
          </select>
        </div>
        <div className="row-start-11 row-span-1 col-span-2 col-start-1 flex justify-center items-center space-x-2">
          <span className="w-[30%] flex justify-end items-center ">
            Dosage :
          </span>
          <select
            className="w-[40%] h-[90%] border-collapse border border-gray-400 px-2"
            name="ward"
            id="1"
          >
            <option value="1">พบและเกิดแล้ว</option>
            <option value="2">พบแต่เกิด</option>
            <option value="3">ยังไม่พบ</option>
            <option value="4">ไม่พบ</option>
          </select>
        </div>

        <div className="row-start-2 row-span-2 col-span-1 col-start-3 bg-amber-50  flex justify-end items-center space-x-2"></div>
        <div className="row-start-3 row-span-2 col-span-1 col-start-3 bg-amber-100 flex justify-end items-center space-x-2 "></div>
        <div className="row-start-4 row-span-1 col-span-1 col-start-3 bg-amber-200 flex justify-end items-center space-x-2"></div>
        <div className="row-start-5 row-span-1 col-span-1 col-start-3 bg-amber-300 flex justify-end items-center space-x-2"></div>
        <div className="row-start-6 row-span-1 col-span-1 col-start-3 bg-amber-400 flex justify-end items-center space-x-2"></div>
        <div className="row-start-7 row-span-1 col-span-1 col-start-3 bg-amber-500 flex justify-end items-center space-x-2"></div>
        <div className="row-start-8 row-span-1 col-span-1 col-start-3 bg-amber-600 flex justify-end items-center space-x-2"></div>
        <div className="row-start-9 row-span-1 col-span-1 col-start-3 bg-amber-700 flex justify-end items-center space-x-2"></div>
        <div className="row-start-10 row-span-1 col-span-1 col-start-3 bg-amber-800 flex justify-end items-center space-x-2"></div>
      </div>
    </div>
  );
}
