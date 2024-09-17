import React, { useEffect, useState } from 'react';
import search from '../../../../img/searchList.svg';
import searchBlack from '../../../../img/searchBlack.png';
import print from '../../../../img/print.png';
import addDoc from '../../../../img/addDoc.png';

import axios from 'axios';
import { API_URL } from '../../../../config';

export default function Inventory() {
  const [drugs, setDrugs] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('001'); // ตั้งค่าเริ่มต้นให้กับ roomcode
  const [selectedDrug, setSelectedDrug] = useState({
    orderitemcode: '',
    orderitemENname: '',
  });

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const response = await axios.post(API_URL + '/ucHouse', {
          roomcode: selectedRoom, // ส่ง roomcode ไปยัง Backend
        });
        setDrugs(response.data); // เก็บข้อมูลที่ได้รับจาก API ลงใน state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDrugs(); // เรียกใช้งานฟังก์ชันดึงข้อมูลทุกครั้งที่ roomcode เปลี่ยน
  }, [selectedRoom]); // useEffect จะทำงานทุกครั้งเมื่อ selectedRoom เปลี่ยน

  // ฟังก์ชันจัดการการเปลี่ยนแปลงห้อง
  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value); // ตั้งค่า roomcode ใหม่เมื่อมีการเลือกห้อง
  };

  const [receive, setReceive] = useState(0);
  const [dispense, setDispense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [data, setData] = useState([]);
  const [selectedOrderItemCode, setSelectedOrderItemCode] = useState('');
  // const [selectedRoom, setSelectedRoom] = useState(''); // เพิ่มการจัดการ roomcode
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleRowClick = async (orderitemcode, orderitemENname) => {
    try {
      // ตั้งค่า orderitemcode และ orderitemENname ที่ถูกคลิก
      setSelectedDrug({ orderitemcode, orderitemENname });
      setSelectedOrderItemCode(orderitemcode); // เก็บ orderitemcode ที่ถูกคลิก

      // ตรวจสอบว่ามีการเลือกวันที่หรือไม่ ถ้าไม่มีให้ใช้วันที่ปัจจุบัน
      const currentDate = new Date().toISOString().split('T')[0]; // วันที่ปัจจุบันในรูปแบบ YYYY-MM-DD
      const selectedStartDate = startDate || currentDate;
      const selectedEndDate = endDate || currentDate;

      // เรียกใช้ API เพื่อดึงข้อมูล balance, receive, dispense
      const response = await axios.post(API_URL + '/balancestockHouse', {
        roomcode: selectedRoom, // ใช้ค่า roomcode ที่เลือกจาก state
        orderitemcode: orderitemcode,
        startDate: selectedStartDate,
        endDate: selectedEndDate,
      });

      const responseData = response.data;

      // ฟังก์ชันสำหรับการกรองข้อมูลวันที่ให้อยู่ในช่วงที่กำหนด
      const filteredData = responseData.data.filter((item) => {
        const itemDate = new Date(item.ordercreatedate); // แปลง ordercreatedate เป็น Date object
        return (
          itemDate >= new Date(selectedStartDate) &&
          itemDate <= new Date(selectedEndDate)
        ); // เช็คว่าอยู่ในช่วงที่ต้องการหรือไม่
      });

      // อัปเดต state ด้วยข้อมูลที่กรองแล้ว
      setReceive(responseData.receive);
      setDispense(responseData.dispense);
      setBalance(responseData.balance);
      setData(filteredData); // Set the filtered data to be displayed in the table

      console.log('ข้อมูลที่ได้รับจากการกรอง:', filteredData);
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
    }
  };

  return (
    <div className="w-full h-full text-sm flex space-x-1">
      <div className="w-[35%] h-[98.4%] mt-1 border border-collapse border-gray-400 border-1">
        <div className="flex w-full h-[15%] ">
          <div className="grid grid-rows-4 grid-cols-6 w-full h-full">
            <div className="h-full row-start-1 row-span-1 col-start-1 col-span-1 flex justify-center items-start  pt-2">
              <span className="text-[18px] font-bold">ข้อมูลยา</span>
            </div>
            <div className="h-full row-start-2 row-span-2 col-start-1 col-span-2 flex justify-center items-center ">
              <input
                type="text"
                className=" h-[70%] w-[90%] rounded-sm border border-collapse border-gray-400"
              />
            </div>
            <div className="row-start-2 row-span-2 col-start-3 col-span-2  flex flex-col justify-center items-center">
              <select
                name="room"
                id="1"
                className="w-[100%] h-5/6 border border-gray-300 text-xs"
                value={selectedRoom} // ใช้ state ที่เก็บ roomcode
                onChange={handleRoomChange} // เรียกใช้เมื่อมีการเปลี่ยนแปลงค่า
              >
                <option value="001">ห้องยา IPD[001]</option>
                <option value="002">ห้องเตรียมยาอาคารเภสัชกรรม</option>
                <option value="003">ห้องยา ICU[003]</option>
              </select>
            </div>
            <div className="row-start-4 row-span-2 col-start-1 col-span-2  space-x-2 flex justify-start items-center px-1">
              <span className="text-red-500">จำนวน</span>
              <span className="text-red-500">0</span>
              <span className="text-red-500">รายการ</span>
            </div>
            <div className="row-start-2 row-span-2 col-start-5 col-span-1 space-x-2 flex justify-center items-center px-1">
              <button className="w-[80%] h-[90%] rounded-sm text-black font-bold bg-red-200 hover:bg-slate-200 active:bg-slate-300 flex flex-col items-center justify-center space-x-2">
                <img src={search} alt={'ค้นหา'} className="w-6 h-6" />
                <span>{'ค้นหา'}</span>
              </button>
            </div>
            <div className="row-start-2 row-span-2 col-start-6 col-span-1 space-x-2 flex justify-center items-center px-1">
              <button className="w-[80%] h-[90%] rounded-sm text-black font-bold bg-purple-200  hover:bg-slate-200 active:bg-slate-300 flex flex-col items-center justify-center space-x-2">
                <img src={search} alt={'ค้นหา'} className="w-6 h-6" />
                <span>{'EXP'}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[85%] p-2">
          <div className="max-h-full w-full overflow-auto bg-white">
            <table className="w-full border-collapse border border-gray-400">
              <thead className="stick top-0">
                <tr>
                  <th className="border border-gray-300 p-2 text-xs min-w-[20px]">
                    รหัสยา
                  </th>
                  <th className="border border-gray-300 p-2 text-xs min-w-[120px]">
                    ชื่อยา
                  </th>
                </tr>
              </thead>
              <tbody>
                {drugs.map((drug) => (
                  <tr
                    key={drug.orderitemcode}
                    className="hover:bg-blue-400 hover:text-white active:bg-blue-700 cursor-pointer"
                    onClick={() =>
                      handleRowClick(drug.orderitemcode, drug.orderitemENname)
                    }
                  >
                    <td className="border border-gray-300 p-2 text-xs">
                      {drug.orderitemcode}
                    </td>
                    <td className="border border-gray-300 p-2 text-xs">
                      {drug.orderitemENname}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-[65%] h-[98%]  mt-1 space-y-1">
        <div className="flex w-full h-[20%] border border-collapse border-gray-400  ">
          <div className="grid grid-rows-5 grid-cols-6 h-full w-full">
            <div className="row-start-1 row-span-5 col-span-1 col-start-1 flex justify-center items-center">
              <div className=" w-[70%] h-[90%] border border-collapse bg-white border-gray-400">
                {/* ใส่ภาพ */}
              </div>
            </div>
            <div className=" row-start-1 row-span-1 col-span-2 col-start-2 flex justify-start space-x-1 items-center">
              <span className="font-bold">รหัสยา : </span>
              <span className="font-bold">{selectedDrug.orderitemcode}</span>
            </div>
            <div className=" row-start-2 row-span-1 col-span-2 col-start-2 flex justify-start space-x-1 items-center">
              <span className="font-bold">ชื่อยา : </span>
              <span className="font-bold">{selectedDrug.orderitemENname}</span>
            </div>
            <div className=" row-start-4 row-span-1 col-span-1 col-start-2 flex justify-start space-x-1 items-center">
              <span className="font-bold">Max : </span>
              <span className="font-bold">{'0'}</span>
            </div>
            <div className="row-start-5 row-span-1 col-span-1 col-start-2 flex justify-start items-center space-x-1">
              <span className="font-bold">รับเข้า : </span>
              <span className="font-bold">{receive}</span>
            </div>
            <div className=" row-start-4 row-span-1 col-span-1 col-start-3 flex justify-start items-center space-x-1">
              <span className="font-bold">Min : </span>
              <span className="font-bold">{'0'}</span>
            </div>
            <div className="row-start-5 row-span-1 col-span-1 col-start-3 flex justify-start items-center space-x-1">
              <span className="font-bold">จ่ายออก : </span>
              <span className="font-bold">{dispense}</span>
            </div>

            <div className="row-start-4 row-span-1 col-span-1 col-start-4 flex justify-start items-center space-x-1">
              <button className="w-10 h-10 rounded-sm text-black font-bold bg-gray-400 hover:bg-slate-200 active:bg-slate-300 flex flex-col items-center justify-center space-x-2">
                <img src={addDoc} alt={'ค้นหา'} className="w-6 h-6" />
              </button>
            </div>
            <div className="row-start-5 row-span-1 col-span-1 col-start-4 flex justify-start items-center space-x-1">
              <span className="font-bold">คงเหลือ : </span>
              <span className="font-bold">{balance}</span>
            </div>
          </div>
        </div>
        <div className=" w-full h-[80%] border border-collapse border-gray-400">
          <div className="grid grid-rows-3 grid-cols-12 h-[15%] w-full">
            <div className="flex row-start-1 row-span-1 col-start-1 col-span-2 px-2 items-end">
              <span className="font-bold text-lg">ประวัติการใช้ยา</span>
            </div>
            <div className="row-start-2 row-span-2 col-start-1 col-span-3  px-2 flex justify-center space-x-2 items-center">
              <span className="font-bold">วันที่ : </span>
              <input
                type="date"
                className="h-[60%] w-[80%] border border-collapse border-gray-400 px-2"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="row-start-2 row-span-2 col-start-4 col-span-3 px-2 flex justify-center space-x-2 items-center">
              <span className="font-bold">ถึง : </span>
              <input
                type="date"
                className="h-[60%] w-[80%] border border-collapse border-gray-400 px-2"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className="row-start-2 row-span-2 col-start-7 col-span-1 px-2 flex justify-center space-x-2 items-center ">
              <button className="w-[80%] h-[80%] rounded-sm text-black font-bold bg-green-400 hover:bg-slate-200 active:bg-slate-300 flex flex-col items-center justify-center space-x-2">
                <img src={searchBlack} alt={'ค้นหา'} className="w-6 h-6" />
              </button>
            </div>
            <div className="row-start-2 row-span-2 col-start-8 col-span-1 px-2 flex justify-center space-x-2 items-center ">
              <button className="w-[80%] h-[80%] rounded-sm text-black font-bold bg-blue-400 hover:bg-slate-200 active:bg-slate-300 flex flex-col items-center justify-center space-x-2 ">
                <img src={print} alt={'ค้นหา'} className="w-12 h-12" />
              </button>
            </div>
            <div className="row-start-2 row-span-1 col-start-9 col-span-2 px-2 flex justify-start space-x-2 items-center">
              <span className="font-bold">รับเข้า : </span>
              <span className="font-bold">{'0'}</span>
            </div>
            <div className="row-start-3 row-span-1 col-start-9 col-span-2 px-2 flex justify-start space-x-2 items-center">
              <span className="font-bold">จ่ายออก : </span>
              <span className="font-bold">{'0'}</span>
            </div>
            <div className="row-start-2 row-span-1 col-start-11 col-span-2 px-2 flex justify-start space-x-2 items-center">
              <span className="font-bold">คืนยา : </span>
              <span className="font-bold">{'0'}</span>
            </div>
            <div className="row-start-3 row-span-1 col-start-11 col-span-2 px-2 flex justify-start space-x-2 items-center">
              <span className="font-bold">คงเหลือ : </span>
              <span className="font-bold">{balance}</span>
            </div>
          </div>
          <div className="h-[85%] w-full p-2">
            <div className=" border border-collapse border-black w-full h-full bg-white">
              <div className="max-h-full w-full overflow-auto">
                <table className="w-full border-collapse bg-white border border-gray-400">
                  <thead className="stick top-0 ">
                    <tr>
                      <th className="border border-gray-300 p-2 text-xs min-w-[120px]">
                        วันที่ (ordercreatedate)
                      </th>
                      <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                        ใบเบิก (prescriptionno)
                      </th>
                      <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                        รับเข้า (Qty)
                      </th>
                      <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                        คืนยา (RETURN_Qty)
                      </th>
                      <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                        จ่ายออก (IN_Qty)
                      </th>
                      <th className="border border-gray-300 p-2 text-xs  min-w-[120px]">
                        คงเหลือ (Balance)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-2 text-xs">
                          {item.ordercreatedate}
                        </td>
                        <td className="border border-gray-300 p-2 text-xs">
                          {item.prescriptionno}
                        </td>
                        <td className="border border-gray-300 p-2 text-xs">
                          {item.Qty}
                        </td>
                        <td className="border border-gray-300 p-2 text-xs">
                          {item.RETURN_Qty}
                        </td>
                        <td className="border border-gray-300 p-2 text-xs">
                          {item.IN_Qty}
                        </td>
                        <td className="border border-gray-300 p-2 text-xs">
                          {item.balance} {/* แสดงค่าคงเหลือ */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
