import { useState } from 'react';

const MyModal = ({ onClose }) => {
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState(getTodayDate());

  const [selectedValue, setSelectedValue] = useState('bsa');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    // ใช้งานค่าทันที
    console.log('ผู้ใช้เลือก:', newValue);
    // ตัวอย่าง: เรียก API หรือเปลี่ยนค่าคำนวณ
    // fetch(`/api/data?type=${newValue}`).then(...)
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 rounded-2xl">
      <div className="bg-white w-[85vw] h-[88vh]  shadow-lg relative flex flex-col overflow-hidden rounded-2xl">
        {/* ปุ่มปิด */}
        <div className="bg-gray-500 p-4 text-white">เพิ่ม/แก้ไข รายการยา</div>
        <button
          onClick={onClose}
          className="absolute px-3 top-2 right-2 text-xl font-bold text-gray-700 hover:text-red-500"
        >
          ×
        </button>

        {/* เนื้อหา */}
        <div className="w-full bg-yellow-500 h-full flex flex-col">
          <div className="h-[90%] w-full flex">
            <div className="bg-red-500 flex flex-col w-[55%]">
              <div className="bg-red-200 flex items-center pl-4 h-[10%] space-x-4">
                <span>แพทย์</span>
                <input
                  type="text"
                  placeholder="กรอกชื่อแพทย์"
                  className="border border-gray-400 rounded px-2 py-1 w-[200px]"
                />
                {/* Radio Buttons */}
                <div className="flex items-center space-x-2">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="doctorOption"
                      value="option1"
                      className="form-radio text-blue-600"
                    />
                    <span>เวรเช้า</span>
                  </label>

                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="doctorOption"
                      value="option2"
                      className="form-radio text-blue-600"
                    />
                    <span>เวรบ่าย</span>
                  </label>
                </div>
              </div>

              <div className="bg-green-200 flex flex-row  h-[20%]">
                <div className="bg-green-400 flex flex-col w-[80%] ">
                  <div className="bg-green-600 h-[33.33%] flex flex-row">
                    <div className="bg-red-200 flex flex-row items-center w-[60%]">
                      <span className="ml-auto p-1">ชนิดใบสั่งยา :</span>

                      <input
                        type="text"
                        defaultValue="0"
                        className="border border-gray-400 rounded px-2 py-1 w-[25px] text-right"
                      />

                      <input
                        type="text"
                        defaultValue="ใบสั่งยาผู้ป่วยใน"
                        className="border border-gray-400 rounded mr-2 px-2 py-1 w-[160px]"
                      />
                    </div>
                    <div className="bg-red-300 text-green-900 flex flex-col justify-center w-[40%]">
                      <div className="pl-3">0 = ใบสั่งยาผู้ป่วยใน</div>
                      <div className="pl-3">3 = ใบสั่งยาเพิ่มเติม</div>
                    </div>
                  </div>

                  <div className="bg-green-700 h-[33.33%] flex flex-row ">
                    <div className="bg-red-200 flex flex-row items-center w-[60%] ">
                      <span className="ml-auto p-1">ประเภท :</span>

                      <input
                        type="text"
                        defaultValue="Oneday"
                        className="border border-gray-400 rounded mr-2 px-2 py-1 w-[185px]"
                      />
                    </div>
                    <div className="bg-red-300 flex flex-row items-center w-[40%]">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        className="ml-3 w-4 h-4 text-blue-600 accent-blue-600"
                      />
                      <span className="p-1">เปิดการใช้งานคีย์ยานอก รพ. F3</span>
                    </div>
                  </div>
                  <div className="bg-green-800 h-[33.341%] flex flex-row pl-3 items-center">
                    <span className="ml-auto p-1">ขื่อยา :</span>

                    <input
                      type="text"
                      defaultValue=""
                      className="border border-gray-400 rounded mr-2 px-2 py-1 w-[285px]"
                    />
                    <input
                      type="text"
                      defaultValue="0"
                      className="border text-center border-gray-400 rounded text-red-500 mr-8 px-2 py-1 w-[85px]"
                    />
                  </div>
                </div>
                <div className="bg-green-500 flex flex-col w-[20%]">
                  <div className="bg-green-900 flex flex-row justify-center items-center h-[40%]">
                    <div className="">1</div>
                    <div className="">2</div>
                  </div>
                  <div className="bg-pink-100 flex items-center h-[60%]">2</div>
                </div>
              </div>
              <div className="bg-green-400 flex flex-col h-[10%]">
                <div className="flex items-center gap-1 h-[50%]">
                  <span className="pl-12">ตัวทำละลาย :</span>

                  <input
                    list="options"
                    className="border border-gray-400 rounded px-2 py-1 bg-white text-gray-800 w-[250px] h-[29px] "
                  />
                  <datalist id="options">
                    <option value="ยา 1" />
                    <option value="ยา 2" />
                    <option value="ยา 3" />
                  </datalist>

                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300">
                    Add+
                  </button>
                </div>

                <div className=" flex items-center gap-1 h-[50%]">
                  <span className="flex pl-[92px]">Vol :</span>

                  <input
                    type="text"
                    defaultValue=""
                    className="border border-gray-400 rounded px-3 py-2 h-[29px] w-[100px] focus:outline-none "
                  />
                  <input
                    type="text"
                    defaultValue=""
                    className="border border-gray-400 rounded px-3 py-2 h-[29px] w-[100px] focus:outline-none "
                  />
                  <span className="flex  pl-[100px]">ราคา/หน่วย : </span>
                  <input
                    type="text"
                    defaultValue="0"
                    readOnly
                    className="border bg-black border-gray-400 rounded text-center text-green-300 mr-8 px-2 py-1 w-[80px]"
                  />
                </div>
              </div>
              <div className=" flex flex-col h-[60%]">
                <div className=" flex space-y-0.5 flex-col h-[45%]  w-full mb-0.5">
                  <div className=" flex items-center pl-7 gap-0.5 h-[30px] w-full ">
                    <span className="pl-6 pr-1">รหัสวิธีใช้ยา:</span>

                    <input
                      type="text"
                      defaultValue="0"
                      className="border border-gray-400 rounded h-[30px] bg-orange-100  text-red-500 text-center w-[100px] focus:outline-none "
                    />
                    <input
                      type="text"
                      defaultValue=""
                      className="border border-gray-400 rounded h-[30px] bg-purple-200 text-red-500 text-center w-[100px] focus:outline-none "
                    />
                  </div>

                  <div className=" flex items-center pl-7 gap-0.5 h-[30px] w-full ">
                    <span className="pl-14 pr-1">Dose :</span>

                    <input
                      type="text"
                      defaultValue="0"
                      className="border border-gray-400 rounded h-[30px] bg-orange-100  text-red-500 text-center w-[100px] focus:outline-none "
                    />
                    <input
                      type="text"
                      defaultValue=""
                      className="border border-gray-400 rounded h-[30px] bg-purple-200 text-red-500 text-center w-[100px] focus:outline-none "
                    />
                    <input
                      type="text"
                      defaultValue="0"
                      className="border border-gray-400 rounded h-[30px] bg-blue-200 text-blue-500 text-center w-[100px] focus:outline-none "
                    />
                    <span className="pl-14 pr-1">เลือกการคำนวณ: </span>
                    <select
                      className="border border-gray-400 rounded px-2 py-1 bg-white text-gray-800"
                      value={selectedValue}
                      onChange={handleChange}
                    >
                      <option value="bsa">bsa</option>
                      <option value="clcr">clcr</option>
                      <option value="น้ำหนัก">น้ำหนัก</option>
                    </select>
                  </div>
                  <div className=" flex items-center pl-7 space-x-0.5 h-[30px] w-full">
                    <span className="pl-14 pr-1">วิธีใช้ :</span>

                    <input
                      type="text"
                      defaultValue=""
                      className="border border-gray-400 rounded h-[30px] bg-purple-200  text-red-500 text-center w-[150px] focus:outline-none "
                    />
                    <input
                      type="text"
                      defaultValue=""
                      disabled
                      className="border border-gray-400 rounded h-[30px] bg-gray-200 text-red-500 text-center w-[300px] focus:outline-none"
                    />
                  </div>
                  <div className=" flex items-center pl-7 space-x-0.5 h-[30px] w-full">
                    <span className="pl-12 pr-1">ความถี่ :</span>

                    <input
                      type="text"
                      defaultValue=""
                      className="border border-gray-400 rounded h-[30px] bg-purple-200  text-red-500 text-center w-[150px] focus:outline-none "
                    />
                    <input
                      type="text"
                      defaultValue=""
                      disabled
                      className="border border-gray-400 rounded h-[30px] bg-gray-200 text-red-500 text-center w-[300px] focus:outline-none"
                    />
                  </div>
                  <div className="bg-red-200 flex items-center pl-7 space-x-0.5 h-[30px] w-full ">
                    <span className="pl-14 pr-1">เวลา :</span>

                    <input
                      type="text"
                      defaultValue=""
                      className="border border-gray-400 rounded h-[30px] bg-purple-200  text-red-500 text-center w-[150px] focus:outline-none "
                    />
                    <input
                      type="text"
                      defaultValue=""
                      disabled
                      className="border border-gray-400 rounded h-[30px] bg-gray-200 text-red-500 text-center w-[300px] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="bg-red-700 h-[55%] w-full flex flex-col ">
                  <div className="flex flex-col justify-center items-center bg-red-400 w-full h-full">
                    <div className="bg-red-400 flex flex-row h-[80%] w-full">
                      <div className=" bg-red-300 w-[60%]">
                        <div className="flex flex-col">
                          <div className=" flex flex-row ">
                            <span className="pl-14 pr-1">จำนวนจ่าย :</span>
                            <input
                              type="text"
                              defaultValue="0"
                              className="border border-gray-400 rounded h-[30px] bg-orange-100  text-red-500 text-center w-[100px] focus:outline-none "
                            />
                            <input
                              type="text"
                              defaultValue=""
                              className="border border-gray-400 rounded h-[30px] bg-purple-200 text-red-500 text-center w-[1ถ0px] focus:outline-none "
                            />
                          </div>
                          <div className="flex flex-row p-0.5">
                            <span className="pl-10 pr-1">จำนวนวันแรก :</span>
                            <input
                              type="text"
                              defaultValue="0"
                              className="border border-gray-400 rounded h-[30px] bg-orange-100  text-red-500 text-center w-[100px] focus:outline-none "
                            />
                            <input
                              type="text"
                              defaultValue="0"
                              className="border border-gray-400 rounded h-[30px] bg-orange-100  text-red-500 text-center w-[100px] focus:outline-none "
                            />
                          </div>
                          <div className="bg-yellow-200 flex flex-col">
                            <div className="flex flex-col">
                              <div className="flex flex-row items-center p-1">
                                <label className="">วันที่เริ่มยา:</label>
                                <input
                                  type="date"
                                  value={startDate}
                                  onChange={(e) => setStartDate(e.target.value)}
                                  className="border border-gray-400 rounded px-2 py-1 "
                                />
                              </div>

                              <div className="flex flex-row items-center">
                                <label className="">วันที่หยุดยา:</label>
                                <input
                                  type="date"
                                  value={endDate}
                                  onChange={(e) => setEndDate(e.target.value)}
                                  className="border border-gray-400 rounded px-2 py-1 "
                                />
                              </div>
                            </div>
                            <div>2</div>
                            <div>3</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-200 flex justify-center items-center w-[40%]">
                        2
                      </div>
                    </div>
                    <div className="bg-red-200 flex items-center w-full h-[20%]">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-800 w-[45%]">
              <div className="bg-blue-200 p-1 flex justify-center items-center h-[30px]">
                1
              </div>
              <div className="bg-blue-300 p-1 flex justify-center items-center h-[45%]">
                2
              </div>
              <div className="bg-blue-400 p-1 flex justify-center items-center h-[30%]">
                3
              </div>
            </div>
          </div>
          <div className="h-[10%] w-full bg-yellow-300 flex flex-row">
            <div className="bg-yellow-400 p-1 flex justify-center items-center w-[55%]">
              ซ้าย
            </div>
            <div className="bg-yellow-500 p-1 flex justify-center items-center w-[45%]">
              ขวา
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
