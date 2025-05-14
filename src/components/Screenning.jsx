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
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

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

const DataTable = () => {};

export default function () {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients5 = [
    { id: 1, name: 'NEURO SURGE', room: 'รถ-IV' },
    { id: 2, name: 'คนไข้พิเศษ', room: 'รถ' },
    { id: 3, name: 'Ward 1', room: 'รถ-IV' },
    // Add more patients as needed
  ];

  const data2 = {
    patients: [
      {
        takedate: '14/06/2024',
        ordertype: 0,
        prescriptionno: '24061400825',
        hn: '65114449',
        an: '6738028',
        name: 'นาง จำดี มุนเสิน',
        ward: 'ICUTM (IV)',
        status: 'รอ Screen',
        room: 'ห้องยา IPD[001]',
      },
    ],
  };

  const [selectedButton, setSelectedButton] = useState(''); // เก็บปุ่มที่กดล่าสุด

  const handleButtonClick = (buttonLabel) => {
    setSelectedButton(buttonLabel);
  };

  const [selectedRoom, setSelectedRoom] = useState('ห้องยา IPD[001]');
  const [wards, setWards] = useState([]); // สร้าง state สำหรับเก็บข้อมูล wards ที่ได้รับ

  // ฟังก์ชันที่ใช้สำหรับการส่งข้อมูลไปยัง Backend
  const sendRoomData = async () => {
    try {
      const response = await axios.post(API_URL + '/screen', {
        selectroom: selectedRoom,
      });
      setWards(response.data); // เก็บข้อมูลที่ได้รับใน state
      console.log('ข้อมูลที่ได้รับจาก Backend:', response.data);
      console.log('Room:', selectedRoom);
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
    }
  };

  const handleApiCall = async (endpoint, buttonLabel) => {
    console.log(`🔄 Calling API: ${API_URL}/${endpoint}`);
    console.log('📢 selectedButton เปลี่ยนค่า:', selectedButton);
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`);
      console.log('✅ API Response:', response.data);

      setWards(response.data); // ✅ เปลี่ยนจาก setData เป็น setWards เพื่อให้ข้อมูลแสดงผล
      setSelectedButton(buttonLabel);
    } catch (error) {
      console.error('❌ Error fetching API:', error);
    }
  };

  useEffect(() => {
    // sendRoomData();
    handleApiCall();
  }, [selectedRoom]);

  // ฟังก์ชันที่เรียกใช้เมื่อมีการเปลี่ยนแปลงค่าใน select
  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value); // ตั้งค่าห้องที่เลือก
  };

  const [selectedWard, setSelectedWard] = useState([]);
  const [patients, setPatients] = useState([]);

  // const handleWardClick = async (wardcode) => {
  //   try {
  //     const response = await axios.post(API_URL + '/screentwo', {
  //       wardcode,
  //       selectroom: selectedRoom, // ส่งค่า selectedRoom ไปด้วย
  //     });
  //     console.log('ข้อมูลที่ได้รับจากการกรอง:', response.data);
  //     setPatients(response.data); // เก็บข้อมูลที่ได้รับใน state patients
  //   } catch (error) {
  //     console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
  //   }
  // };

  const handleWardClick = async (wardcode, button) => {
    let endpoint = '/screentwo'; // ค่าเริ่มต้น
    if (selectedButton === 'ยา Stat') {
      endpoint = '/screenStat_2';
    } else if (selectedButton === 'ยา Stat อัดแล้ว') {
      endpoint = '/screenStat_Finish_2';
    } else if (selectedButton === 'ยารอ screen และส่งจัดยา') {
      endpoint = '/ward2';
    } else if (selectedButton === 'ยารอ screen และส่งจัดยาแล้ว') {
      endpoint = '/wardApiForScreenSendFinish';
    }
    // const handleWardClick = async (wardcode, button) => {
    //   let endpoint = "/screentwo"; // ค่าเริ่มต้น
    //   if (selectedButton === "ยา Stat") {
    //     endpoint = "/screenStat_2";
    //   } else if (selectedButton === "ยา Stat อัดแล้ว") {
    //     endpoint = "/screenStat_Finish_2";
    //   } else if (selectedButton === "ยารอ screen และส่งจัดยา") {
    //     endpoint = "/ward2";
    //   } else if (selectedButton === "ยารอ screen และส่งจัดยาแล้ว") {
    //     endpoint = "/wardApiForScreenSendFinish";
    //   }

    try {
      const response = await axios.post(API_URL + endpoint, {
        wardcode,
        selectroom: selectedRoom,
      });

      console.log(`🔄 เรียก API 2: ${API_URL + endpoint}`);
      console.log('✅ ข้อมูลที่ได้รับจากการกรองรอบที่2:', response.data);
      console.log('📢 selectedButton เปลี่ยนค่า:', selectedButton);

      setPatients(response.data);
    } catch (error) {
      console.error('❌ เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
    }
  };

  const [prescrip, setPrescrip] = useState([]);

  const setSelectedprescriptionno = async (prescriptionno) => {
    try {
      const response = await axios.post(API_URL + '/screenthree', {
        prescriptionno,
        selectroom: selectedRoom, // ส่งค่า selectedRoom ไปด้วยถ้าจำเป็น
      });
      console.log('ข้อมูลที่ได้รับจากการกรอง:', response.data);
      setPrescrip(response.data); // เก็บข้อมูลที่ได้รับใน state prescrip
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
    }
  };

  const navigate = useNavigate();

  const handleDoubleClick = async (an, hn) => {
    try {
      const fetchWithErrorHandling = (apiCall) => {
        return apiCall.catch((error) => {
          console.error('Error in API call:', error);
          return null; // Return null or default value
        });
      };

      const [
        responseView,
        response144,
        responselabResult,
        responsenoteDrp,
        responsemedIPD,
        responsedrugallergy,
      ] = await Promise.all([
        fetchWithErrorHandling(
          axios.post(API_URL + '/Profile_private_hn', { hn })
        ),
        fetchWithErrorHandling(
          axios.post(API_URL + '/Profile_private_an', { an })
        ),
        fetchWithErrorHandling(axios.post(API_URL + '/labResult', { hn })),
        fetchWithErrorHandling(axios.post(API_URL + '/noteDrp', { hn })),
        fetchWithErrorHandling(axios.post(API_URL + '/medIPD', { an })),
        fetchWithErrorHandling(axios.post(API_URL + '/drugallergy', { hn })),
      ]);

      // console.log('AN sent to backend:', an);
      // console.log('HN sent to backend:', hn);

      // ส่งข้อมูลไปยังหน้า /mainIPD
      navigate('/mainIPD', {
        state: {
          patientDataView: responseView?.data || {},
          patientData144: response144?.data || {},
          labResult: responselabResult?.data || [],
          noteDrp: responsenoteDrp?.data || [],
          medIPD: responsemedIPD?.data || [],
          // drugAllergyData: responsedrugallergy?.data || [],
          drugAllergyData: responsedrugallergy?.data || '',
        },
      });
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    console.log(patient);
  };
  return (
    <div className="flex-grow flex flex-col h-full w-screen">
      <div className="h-full">
        <div className="h-[13%] w-full flex justify-between wards-center mb-2 ">
          <div className="space-x-2 mt-1 ml-4 w-full flex">
            {' '}
            {/* ปุ่มด้านบน */}
            <ButtonWithIcon
              icon={icon1}
              label="ยา Stat"
              bgColor={
                selectedButton === 'ยา Stat'
                  ? 'bg-green-500 text-white'
                  : 'bg-white'
              }
              onClick={() => {
                handleButtonClick('ยา Stat');
                handleApiCall('screenStat_1'); // ✅ เรียก API 1
              }}
            />
            <ButtonWithIcon
              icon={icon2}
              label="ยา Stat อัดแล้ว"
              bgColor={
                selectedButton === 'ยา Stat อัดแล้ว'
                  ? 'bg-green-500 text-white'
                  : 'bg-white'
              }
              onClick={() => {
                handleButtonClick('ยา Stat อัดแล้ว');
                handleApiCall('screenStat_Finish_1'); // ✅ เรียก API 2
              }}
            />
            <ButtonWithIcon
              icon={icon3}
              label="ยารอ screen และส่งจัดยา"
              bgColor={
                selectedButton === 'ยารอ screen และส่งจัดยา'
                  ? 'bg-green-500 text-white'
                  : 'bg-white'
              }
              onClick={() => {
                handleButtonClick('ยารอ screen และส่งจัดยา');
                handleApiCall('screen'); // ✅ เรียก API 3
              }}
            />
            <ButtonWithIcon
              icon={icon4}
              label="ยารอ screen และส่งจัดยาแล้ว"
              bgColor={
                selectedButton === 'ยารอ screen และส่งจัดยาแล้ว'
                  ? 'bg-green-500 text-white'
                  : 'bg-white'
              }
              onClick={() => {
                handleButtonClick('ยารอ screen และส่งจัดยาแล้ว');
                handleApiCall('screenStat_Continue_Finish_1'); // ✅ เรียก API 4
              }}
            />
            <ButtonWithIcon
              icon={icon8}
              label="ยารอส่ง Robot"
              bgColor={
                selectedButton === 'ยารอส่ง Robot'
                  ? 'bg-green-500 text-white'
                  : 'bg-white'
              }
              onClick={() => {
                handleButtonClick('ยารอส่ง Robot');
                handleApiCall('ยังไม่มี'); // ✅ เรียก API 5 ยังไม่มี
              }}
            />
            <ButtonWithIcon
              icon={icon5}
              label="ยารอ screen ทั้งหมด"
              bgColor={
                selectedButton === 'ยารอ screen ทั้งหมด'
                  ? 'bg-green-500 text-white'
                  : 'bg-white'
              }
              onClick={() => {
                handleButtonClick('ยารอ screen ทั้งหมด');
                handleApiCall('screen_Wait_1'); // ✅ เรียก API 6
              }}
            />
            <ButtonWithIcon
              icon={icon7}
              label="ยากลับบ้านรอ screen และส่งจัดยา"
              bgColor={
                selectedButton === 'ยากลับบ้านรอ screen และส่งจัดยา'
                  ? 'bg-green-500 text-white'
                  : 'bg-white'
              }
              onClick={() => {
                handleButtonClick('ยากลับบ้านรอ screen และส่งจัดยา');
                handleApiCall('screen_TakeHome_1'); // ✅ เรียก API 7
              }}
            />
            <ButtonWithIcon
              icon={icon7}
              label="ยากลับบ้าน screen ส่งจัดยา"
              bgColor={
                selectedButton === 'ยากลับบ้าน screen ส่งจัดยา'
                  ? 'bg-green-500 text-white'
                  : 'bg-white'
              }
              onClick={() => {
                handleButtonClick('ยากลับบ้าน screen ส่งจัดยา');
                handleApiCall('screen_TakeHome_Finish_1'); // ✅ เรียก API 8
              }}
            />
            <ButtonWithIcon
              icon={icon6}
              label="รายการยามีปัญหา"
              bgColor={
                selectedButton === 'รายการยามีปัญหา'
                  ? 'bg-green-500 text-white'
                  : 'bg-white'
              }
              onClick={() => {
                handleButtonClick('รายการยามีปัญหา');
                handleApiCall('ว่าง');
              }}
            />
          </div>
        </div>
        <div className="h-[86%] flex w-screen p-1 ">
          <div className="h-full bg-white w-1/5 mr-2 border-2 p-3">
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
              <div className="h-1/2 flex justify-between">
                <button className=" h-full w-[45%] bg-white text-gray-700 border-2 p-1 rounded hover:bg-gray-700 hover:text-white active:bg-gray-300 text-xs flex items-center wards-center ">
                  <img src={inImg} className="h-7 w-6 mr-2" />
                  <span>จัดยาโดยเลือกห้องผู้ป่วย</span>
                </button>
                <div className="h-full w-[55%] flex flex-col ">
                  <div className="h-1/2 flex items-center justify-center">
                    <p className="text-xs mr-2"></p>
                    <select
                      name="room"
                      id="1"
                      className="w-[100%] h-5/6 border border-gray-300 text-xs"
                      value={selectedRoom}
                      onChange={handleRoomChange} // เรียกใช้เมื่อมีการเปลี่ยนแปลงค่า
                    >
                      <option value="ห้องยา IPD[001]">ห้องยา IPD[001]</option>
                      <option value="ห้องเตรียมยาอาคารเภสัชกรรม[002]">
                        ห้องเตรียมยาอาคารเภสัชกรรม
                      </option>
                      <option value="ห้องยา ICU[003]">ห้องยา ICU[003]</option>
                    </select>
                  </div>
                  <div className="h-1/2 flex justify-center wards-center">
                    <input
                      type="date"
                      className="h-3/4 border border-gray-300 w-[80%] p-2 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-4/5 w-full flex flex-col mt-1">
              {/* ตารางด้านซ้าย */}
              <div className="max-h-full overflow-auto">
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
                    {wards.map((ward, index) => (
                      <tr
                        key={index}
                        className="hover:bg-blue-400 hover:text-white active:bg-blue-700 cursor-pointer"
                        // onClick={() => handleWardClick(ward.wardcode)} // ส่งค่า wardcode เมื่อคลิก
                        onClick={() =>
                          handleWardClick(ward.wardcode, selectedButton)
                        }
                      >
                        <td className="border border-gray-300 p-2 text-xs text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="border border-gray-300 p-2 text-xs">
                          [ {ward.wardcode} ] {ward.wardname}
                        </td>
                        <td className="border border-gray-300 p-2 text-xs text-center">
                          {ward.counpres}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="h-full w-4/5 ">
            <div className="border-2 border-gray-400 w-full h-[50%] bg-white p-1">
              <div className="w-full h-[20%]  flex ">
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

              <div className="w-full h-[80%] ">
                {/* ตารางบน */}
                <div className="flex flex-col h-full">
                  <div className=" h-full overflow-auto">
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
                        {patients.map((ward, index) => (
                          <tr
                            key={index}
                            className="hover:bg-blue-400 hover:text-white active:bg-blue-700 cursor-pointer"
                            onClick={() =>
                              setSelectedprescriptionno(ward.prescriptionno)
                            } // ส่งไป prescriptionno
                            onDoubleClick={() => {
                              console.log('AN:', ward.an); // แสดงค่า an ใน console เมื่อมีการดับเบิ้ลคลิก
                              handleDoubleClick(ward.an, ward.hn); // ส่งค่า an และ hn ไปยังฟังก์ชัน handleDoubleClick
                            }}
                          >
                            <td className="border border-gray-300 p-1 text-xs text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {ward.takedate}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {ward.ordertype}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {ward.prescriptionno}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {ward.hn}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {ward.an}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {ward.patientname}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {ward.wardname}
                            </td>

                            <td className="border border-gray-300 p-1 text-xs"></td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {ward.status}
                            </td>
                            <td className="border border-gray-300 p-1 text-xs">
                              {ward.fromlocationname}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[50%] w-full bg-white border-2  border-gray-400 p-1 mt-[2px] ">
              {/* ตารางล่าง */}
              <div className="w-full h-[15%]  flex">
                <button className="bg-white text-gray-700 border-2 p-1 mr-1 rounded hover:bg-gray-700 hover:text-white active:bg-gray-300 text-xs flex justify-center items-center wards-center w-62">
                  <img src={inImg} alt="คืนยา" className="w-6 h-6 mr-2 " />
                  <div className="flex flex-col">
                    <span className="text-center">
                      จัดยาโดยเลือกตามรายการยา
                    </span>
                  </div>
                </button>
                <button className="bg-white text-gray-700 border-2 p-1 mr-1 rounded hover:bg-gray-700 hover:text-white active:bg-gray-300 text-xs flex justify-center items-center wards-center w-32">
                  <img src={printer} alt="คืนยา" className="w-6 h-6 mr-2 " />
                  <div className="flex flex-col">
                    <span className="text-center">Reprint</span>
                  </div>
                </button>
                <div className="flex flex-col justify-center h-full w-52 text-sm">
                  <div>HN : 69855541</div>
                  <div>ชื่อผู้ป่วย : นาย เกียติศักษ์ อารมย์</div>
                </div>
                <div className="flex flex-col justify-center h-full w-52  text-sm">
                  <div>AN : 69855541</div>
                  <div>จำนวน 4 รายการ</div>
                </div>
              </div>
              <div className="h-[85%] w-full">
                {/* <DataTable /> */}

                <div className="flex-grow flex flex-col overflow-auto max-h-56 ">
                  <table className="min-w-full border-collapse border border-gray-400 text-sm">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 p-1">
                          <input type="checkbox" />
                        </th>
                        <th className="border border-gray-300 p-1">วันที่</th>
                        <th className="border border-gray-300 p-1">
                          เวลารับประทาน
                        </th>
                        <th className="border border-gray-300 p-1">รหัสยา</th>
                        <th className="border border-gray-300 p-1">ชื่อยา</th>
                        <th className="border border-gray-300 p-1">Dose</th>
                        <th className="border border-gray-300 p-1">QTY</th>
                        <th className="border border-gray-300 p-1">
                          รหัสวิธีใช้
                        </th>
                        <th className="border border-gray-300 p-1">
                          คำอธิบายวิธีใช้
                        </th>
                        <th className="border border-gray-300 p-1">
                          ที่เก็บยา
                        </th>
                        <th className="border border-gray-300 p-1">Print</th>
                        <th className="border border-gray-300 p-1">ห้อง</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prescrip.map((ward, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 p-1 text-center">
                            <input type="checkbox" />
                          </td>
                          {/* <td className="border border-gray-300 p-1">
                            {ward.takedate}
                          </td>
                          <td className="border border-gray-300 p-1">
                            {new Date(ward.takedate).toLocaleDateString(
                              'th-TH',
                              {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                              }
                            )}
                          </td>
                          <td className="border border-gray-300 p-1">
                            {new Date(ward.takedate).toLocaleDateString(
                              'th-TH',
                              {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                              }
                            )}
                          </td> */}
                          <td className="border border-gray-300 p-1">
                            {new Date(ward.takedate).toLocaleDateString(
                              'en-GB',
                              {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                              }
                            )}
                          </td>
                          <td className="border border-gray-300 p-1">
                            {ward.time}
                          </td>
                          <td className="border border-gray-300 p-1">
                            {ward.drug}
                          </td>
                          <td className="border border-gray-300 p-1">
                            {ward.orderitemname}
                          </td>
                          <td className="border border-gray-300 p-1 text-center">
                            {ward.dosage}
                          </td>
                          <td className="border border-gray-300 p-1 text-center">
                            {ward.orderqty}
                          </td>
                          <td className="border border-gray-300 p-1">
                            {ward.timecode}
                          </td>
                          <td className="border border-gray-300 p-1">
                            {ward.freetext2}
                          </td>
                          <td className="border border-gray-300 p-1">
                            {ward.locationname}
                          </td>
                          <td className="border border-gray-300 p-1 text-center">
                            <input
                              type="checkbox"
                              checked={ward.printstatus}
                              readOnly
                            />
                          </td>
                          <td className="border border-gray-300 p-1">
                            {ward.fromlocationname}
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
    </div>
  );
}

const ButtonWithIcon = ({ icon, label, bgColor, onClick }) => {
  return (
    <button
      className={`border-2 p-1 rounded text-sm flex flex-col justify-center items-center cursor-pointer w-32 ${bgColor}`}
      onClick={onClick} // ต้องเพิ่ม onClick เพื่อให้ปุ่มทำงาน
    >
      <img src={icon} alt={label} className="w-5 h-5" />
      <span className="mt-2 text-[13px] text-center">{label}</span>
    </button>
  );
};

const ButtonCancel = ({ icon, label, label2 }) => {
  return (
    <button className="bg-red-100  border-red-500 text-gray-700 border-2 p-1 mr-1 rounded hover:bg-red-700 cursor-pointer hover:text-white active:bg-red-300 text-xs flex justify-center items-center wards-center w-32">
      <img src={icon} alt={label} className="w-6 h-6 mr-2 " />
      <div className="flex flex-col">
        <span className="text-center">{label}</span>
        <span className="text-center">{label2}</span>
      </div>
    </button>
  );
};
const ButtonGroup = ({ icon, label, label2 }) => {
  return (
    <button className="bg-white text-gray-700 border-2 p-1 mr-1 rounded hover:bg-gray-700 cursor-pointer hover:text-white active:bg-gray-300 text-xs flex justify-center wards-center items-center w-32">
      <img src={icon} alt={label} className="w-6 h-6 mr-2 " />
      <div className="flex flex-col">
        <span className="text-center">{label}</span>
        <span className="text-center">{label2}</span>
      </div>
    </button>
  );
};
