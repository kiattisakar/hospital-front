import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FrmDataTebleIPD from './FrmDataTableIpd';
import Footer from '../header/Footer';
import editDoc from '../../img/editDoc.png';
import hospitalicon from '../../img/hospitalicon.png';
import IpdHeader from '../header/IpdHeader';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import icon4 from '../../img/icon4.png';
import icon5 from '../../img/icon5.png';
import icon6 from '../../img/icon6.png';
import icon8 from '../../img/icon7.png';
import inImg from '../../img/in.png';
import icon7 from '../../img/homeIcon.png';
import printer from '../../img/printer.png';
import cancel from '../../img/cancel.png';
import doc from '../../img/doc.png';

const data3 = {
  prescrip: [

    {
      date: '17/06/2024',
      time: '12 .. JUN MRPS',
      drug: 'MRNO',
      name: 'ไม่มีประวัติยามาก่อนใน รพ.ของเรา',
      dose: 12,
      qty: 12,
      usageCode: 'MRPS',
      instructions: '. 12 มีคุณเจน .',
      store: 'จัดมือ',
      print: true,
      room: 'ห้องยา IPD[001]',
    },
  ],
};

const DataTable = () => {
  return (
    <div className="flex-grow flex flex-col overflow-auto max-h-56 ">
      <table className="min-w-full border-collapse border border-gray-400 text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 p-1">
              <input type="checkbox" />
            </th>
            <th className="border border-gray-300 p-1">วันที่</th>
            <th className="border border-gray-300 p-1">เวลารับประทาน</th>
            <th className="border border-gray-300 p-1">รหัสยา</th>
            <th className="border border-gray-300 p-1">ชื่อยา</th>
            <th className="border border-gray-300 p-1">Dose</th>
            <th className="border border-gray-300 p-1">QTY</th>
            <th className="border border-gray-300 p-1">รหัสวิธีใช้</th>
            <th className="border border-gray-300 p-1">คำอธิบายวิธีใช้</th>
            <th className="border border-gray-300 p-1">ที่เก็บยา</th>
            <th className="border border-gray-300 p-1">Print</th>
            <th className="border border-gray-300 p-1">ห้อง</th>
          </tr>
        </thead>
        <tbody>
          {data3.prescrip.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-1 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 p-1">{item.date}</td>
              <td className="border border-gray-300 p-1">{item.time}</td>
              <td className="border border-gray-300 p-1">{item.drug}</td>
              <td className="border border-gray-300 p-1">{item.name}</td>
              <td className="border border-gray-300 p-1 text-center">
                {item.dose}
              </td>
              <td className="border border-gray-300 p-1 text-center">
                {item.qty}
              </td>
              <td className="border border-gray-300 p-1">{item.usageCode}</td>
              <td className="border border-gray-300 p-1">
                {item.instructions}
              </td>
              <td className="border border-gray-300 p-1">{item.store}</td>
              <td className="border border-gray-300 p-1 text-center">
                <input type="checkbox" checked={item.print} readOnly />
              </td>
              <td className="border border-gray-300 p-1">{item.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function () {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    { id: 1, name: 'NEURO SURGE', room: 'รถ-IV' },
    { id: 2, name: 'คนไข้พิเศษ', room: 'รถ' },
    { id: 3, name: 'Ward 1', room: 'รถ-IV' },
    // Add more patients as needed
  ];

  const data2 = {
    patients: [
      {
        date: '14/06/2024',
        type: 0,
        order: '24061400825',
        hn: '65114449',
        an: '6738028',
        name: 'นาง จำดี มุนเสิน',
        ward: 'ICUTM (IV)',
        status: 'รอ Screen',
        room: 'ห้องยา IPD[001]',
      }
    ],
  };


//////////////////////////////////////// ส่วนแรก /////////////////////////////////////////////////////////////          
  // กำหนดสถานะเริ่มต้นเป็นข้อมูลว่างเปล่า
  const [data, setData] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลจาก API เมื่อคอมโพเนนต์ถูกสร้างขึ้นมา
    async function fetchData() {
      try {
        const response = await axios.post('http://localhost:3000/api/screen', {
          wardcode: null, // ส่งข้อมูลตามที่ต้องการ ถ้ามี
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
//////////////////////////////////////// ส่วนแรก /////////////////////////////////////////////////////////////          

  
  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };
  return (
    <div className="flex-grow flex flex-col h-full w-screen">
      <div className="h-full">
        <div className="h-[15%] w-full flex justify-between items-center mb-2 ">
          <div className="space-x-2 mt-1 ml-4 w-full flex">
            <ButtonWithIcon icon={icon1} label="ยา Stat" bgColor="bg-white" />
            <ButtonWithIcon
              icon={icon2}
              label="ยา Stat อัดแล้ว"
              bgColor="bg-white"
            />
            <ButtonWithIcon
              icon={icon3}
              label="ยารอ screen และส่งจัดยา"
              bgColor="bg-green-400"
            />
            <ButtonWithIcon
              icon={icon4}
              label="ยารอ screen และส่งจัดยาแล้ว"
              bgColor="bg-white"
            />
            <ButtonWithIcon
              icon={icon8}
              label="ยารอส่ง Robot"
              bgColor="bg-white"
            />
            <ButtonWithIcon
              icon={icon5}
              label="ยารอ screen ทั้งหมด"
              bgColor="bg-white"
            />
            <ButtonWithIcon
              icon={icon7}
              label="ยากลับบ้านรอ screen และส่งจัดยา"
              bgColor="bg-white"
            />
            <ButtonWithIcon
              icon={icon7}
              label="ยากลับบ้านรอ screen และส่งจัดยา"
              bgColor="bg-white"
            />
            <ButtonWithIcon
              icon={icon6}
              label="รายการยามีปัญหา"
              bgColor="bg-white"
            />
          </div>
        </div>
        <div className="h-[85%] flex w-screen p-1 ">
          <div className="h-full w-1/5 mr-2 border-2 p-3">
            <div className="h-1/5 w-full ">
              <div className="h-1/2 ">
                <form onSubmit={''}>
                  <input
                    type="text"
                    placeholder="ค้นหา"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </form>
              </div>
              <div className="h-1/2 flex justify-between items-center">
                <button className=" h-full w-[45%] bg-white text-gray-700 border-2 p-1 rounded hover:bg-gray-700 hover:text-white active:bg-gray-300 text-xs flex items-center">
                  <img src={inImg} className="h-7 w-6 mr-2" />
                  <span>จัดยาโดยเลือกห้องผู้ป่วย</span>
                </button>
                <div className="h-full w-[55%] flex flex-col ">
                  <div className="h-1/2 flex items-center justify-center">
                    <p className="text-xs mr-2">เลือกห้อง</p>
                    <select
                      name="room"
                      id="1"
                      className="w-[50%] h-5/6 border border-gray-300 text-xs "
                    >
                      <option value="1">IPD</option>
                    </select>
                  </div>
                  <div className="h-1/2 flex justify-center items-center">
                    <input
                      type="date"
                      className="h-3/4 border border-gray-300 w-[80%] p-2 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-4/5 w-full flex flex-col mt-1">



      <div className="max-h-96 overflow-auto">
        <table className="min-w-full border-collapse border border-gray-400">
          <thead className="stick top-0">
            <tr>
              <th className="border border-gray-300 p-2 text-xs">
                <input type="checkbox" />
              </th>
              <th className="border border-gray-300 p-2 text-xs">
                หอผู้ป่วย
              </th>
              <th className="border border-gray-300 p-2 text-xs">
                จำนวน
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 text-xs text-center">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2 text-xs">
                   {item.wardname}
                </td>
                <td className="border border-gray-300 p-2 text-xs text-center">
                  {item.counpres}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



    </div>
          </div>
          <div className="h-full w-4/5 ">
            <div className="border-2 border-gray-400 w-full h-[45%] bg-white p-1">
              <div className="w-full h-1/4  flex ">
                <ButtonGroup
                  icon={inImg}
                  label="จัดยา"
                  label2="[L+M]"
                  bgColor="bg-white"
                />
                <ButtonGroup icon={inImg} label="จัดยา" label2="[L+Rx+M]" />
                <ButtonGroup icon={inImg} label="จัดยา" label2="[L]" />
                <ButtonGroup icon={inImg} label="จัดยา" label2="[L+Rx]" />
                <ButtonGroup icon={icon4} label="ส่ง OCS" label2="[M]" />
                <ButtonGroup icon={doc} label="พิมพืใบสั่งยา" label2="[Rx]" />
                <ButtonGroup icon={printer} label="พิมพ์ชื่อคนไข้สติ๊กเกอร์" />
                <div className="w-[40%] h-full  flex px-2">
                  <div className="w-2/3 h-full text-xs flex flex-col justify-center">
                    <p>รหัสหอผู้ป่วย : 45</p>
                    <p>หอผู้ป่วย : จักษุ</p>
                    <p>จำนวน : 1</p>
                  </div>
                  <div className="w1/3 flex justify-center  ">
                    <ButtonCancel icon={cancel} label="ยกเลิกใบสั่งยา" />
                  </div>
                </div>
              </div>
              <div className="w-full h-3/4 ">
                <div className="flex flex-col h-full">
                  <div className="flex-grow overflow-auto">
                    <table className="min-w-full border-collapse border border-gray-400">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 p-1 text-xs">
                            <input type="checkbox" />
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            วันที่
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            ประเภท
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            ใบสั่งยา
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            HN
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            AN
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            ชื่อ - นามสกุล
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            หอผู้ป่วย
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            STS
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            สถานะใบสั่งยา
                          </th>
                          <th className="border border-gray-300 p-1 text-xs">
                            ห้อง
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data2.patients.map((item, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 p-1 text-xs text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {item.date}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {item.type}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {item.order}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {item.hn}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {item.an}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {item.name}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {item.ward}
                            </td>

                            <td className="border border-gray-300 p-1 text-xs"></td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {item.status}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {item.room}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[55%] w-full  border-2 border-gray-400 p-1 mt-[2px] ">
              <div className="w-full h-[20%]  flex">
                <div className="bg-white text-gray-700 border-2 p-1 mr-1 rounded hover:bg-gray-700 hover:text-white active:bg-gray-300 text-xs flex justify-center items-center w-62">
                  <img src={inImg} alt="คืนยา" className="w-6 h-6 mr-2 " />
                  <div className="flex flex-col">
                    <span className="text-center">
                      จัดยาโดยเลือกตามรายการยา
                    </span>
                  </div>
                </div>
                <div className="bg-white text-gray-700 border-2 p-1 mr-1 rounded hover:bg-gray-700 hover:text-white active:bg-gray-300 text-xs flex justify-center items-center w-32">
                  <img src={printer} alt="คืนยา" className="w-6 h-6 mr-2 " />
                  <div className="flex flex-col">
                    <span className="text-center">Reprint</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center h-full w-52 text-sm">
                  <div>HN : 69855541</div>
                  <div>ชื่อผู้ป่วย : นาย เกียติศักษ์ อารมย์</div>
                </div>
                <div className="flex flex-col justify-center h-full w-52  text-sm">
                  <div>AN : 69855541</div>
                  <div>จำนวน 4 รายการ</div>
                </div>
              </div>
              <div className="h-[80%] w-full">
                <DataTable />
              </div>
            </div>
          </div>
        </div>
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
const ButtonCancel = ({ icon, label, label2 }) => {
  return (
    <div className="bg-red-100  border-red-500 text-gray-700 border-2 p-1 mr-1 rounded hover:bg-red-700 hover:text-white active:bg-red-300 text-xs flex justify-center items-center w-28">
      <img src={icon} alt={label} className="w-6 h-6 mr-2 " />
      <div className="flex flex-col">
        <span className="text-center">{label}</span>
        <span className="text-center">{label2}</span>
      </div>
    </div>
  );
};
const ButtonGroup = ({ icon, label, label2 }) => {
  return (
    <div className="bg-white text-gray-700 border-2 p-1 mr-1 rounded hover:bg-gray-700 hover:text-white active:bg-gray-300 text-xs flex justify-center items-center w-32">
      <img src={icon} alt={label} className="w-6 h-6 mr-2 " />
      <div className="flex flex-col">
        <span className="text-center">{label}</span>
        <span className="text-center">{label2}</span>
      </div>
    </div>
  );
};
