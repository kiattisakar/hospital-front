import React, { useState } from 'react';
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
      },
    ],
  };

  const data = [
    { id: 6, ward: 'NEURO SURGE(รอ...)', count: 1 },
    { id: 7, ward: 'TRAUMA (รอ)', count: 1 },
    { id: 17, ward: 'ICU MED', count: 3 },
    { id: 19, ward: 'ICUTM (IV)', count: 1 },
    { id: 47, ward: 'ICU ตัดกรรมน 2', count: 1 },
    { id: 91, ward: 'อายุรกรรมหัวใจ', count: 8 },
    { id: 92, ward: 'ICU MED2', count: 1 },
    { id: 93, ward: 'สูติศ์หญิง 2(รอ-IV)', count: 1 },
    { id: 95, ward: 'RICU (IV)', count: 2 },
  ];
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
            <div className=" h-4/5 w-full p-15 flex flex-col justify-center ">
              <div className="  max-h-96 overflow-auto ">
                <table className="min-w-full border-collapse border border-gray-400">
                  <thead className="stick top-0">
                    <tr>
                      <th className="border border-gray-300 p-2">
                        <input type="checkbox" />
                      </th>
                      <th className="border border-gray-300 p-2">หอผู้ป่วย</th>
                      <th className="border border-gray-300 p-2">จำนวน</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="border border-gray-300 p-2">
                          {item.ward}
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          {item.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="h-full w-4/5 bg-yellow-300">
            <div className="border-2 border-gray-400 w-full h-[45%] bg-white p-1    ">
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
                          <th className="border border-gray-300 p-2">
                            <input type="checkbox" />
                          </th>
                          <th className="border border-gray-300 p-2">วันที่</th>
                          <th className="border border-gray-300 p-2">ประเภท</th>
                          <th className="border border-gray-300 p-2">
                            ใบสั่งยา
                          </th>
                          <th className="border border-gray-300 p-2">HN</th>
                          <th className="border border-gray-300 p-2">AN</th>
                          <th className="border border-gray-300 p-2">
                            ชื่อ - นามสกุล
                          </th>
                          <th className="border border-gray-300 p-2">
                            หอผู้ป่วย
                          </th>
                          <th className="border border-gray-300 p-2">STS</th>
                          <th className="border border-gray-300 p-2">
                            สถานะใบสั่งยา
                          </th>
                          <th className="border border-gray-300 p-2">ห้อง</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data2.patients.map((item, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 p-2 text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="border border-gray-300 p-2">
                              {item.date}
                            </td>
                            <td className="border border-gray-300 p-2">
                              {item.type}
                            </td>
                            <td className="border border-gray-300 p-2">
                              {item.order}
                            </td>
                            <td className="border border-gray-300 p-2">
                              {item.hn}
                            </td>
                            <td className="border border-gray-300 p-2">
                              {item.an}
                            </td>
                            <td className="border border-gray-300 p-2">
                              {item.name}
                            </td>
                            <td className="border border-gray-300 p-2">
                              {item.ward}
                            </td>

                            <td className="border border-gray-300 p-2"></td>
                            <td className="border border-gray-300 p-2">
                              {item.status}
                            </td>
                            <td className="border border-gray-300 p-2">
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
            <div className=""></div>
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
