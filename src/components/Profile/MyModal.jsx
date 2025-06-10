import { useState } from 'react';

const MyModal = ({ onClose }) => {
  const [selected, setSelected] = useState(null); // ค่าเริ่มต้นคือยังไม่เลือกอะไรเลย

  const handleToggle = (value) => {
    if (selected === value) {
      setSelected(null); // ถ้าคลิกซ้ำที่อันเดิม → ยกเลิกการเลือก
    } else {
      setSelected(value); // ถ้าคลิกอันใหม่ → เลือกอันนั้น
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const [selectedOption, setSelectedOption] = useState('unit');

  const options = [
    { value: 'unit', label: 'ตามหน่วยย่อย' },
    { value: 'adjusted', label: 'หน่วยย่อยแล้วปรับหน่วยขาย' },
    { value: 'fulltime', label: 'เต็มหน่วยเวลา' },
    { value: 'short', label: 'จ่ายขาด' },
  ];

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

  const [group1, setGroup1] = useState('');
  const [group2, setGroup2] = useState('');

  const handleGroup1Change = (value) => {
    setGroup1((prev) => (prev === value ? '' : value));
  };

  const handleGroup2Change = (value) => {
    setGroup2((prev) => (prev === value ? '' : value));
  };

  const [value, setValue] = useState('yes');

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
            <div className="bg-red-500 flex flex-col w-[60%]">
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
                    <input
                      type="text"
                      defaultValue="0"
                      className="border border-gray-400 rounded px-2 py-1 w-[25px] text-right"
                    />

                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300">
                      Down
                    </button>
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
                          <div className=" flex flex-row items-center">
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
                          <div className="flex flex-row items-center p-0.5">
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
                              <div className="flex flex-row items-center px-0.5 py-0.5">
                                <label className="pl-14 px-1">
                                  วันที่เริ่มยา :
                                </label>
                                <input
                                  type="date"
                                  value={startDate}
                                  onChange={(e) => setStartDate(e.target.value)}
                                  className="border border-gray-400 rounded px-1 py-0.5 mt-1 "
                                />
                              </div>

                              <div className="flex flex-row items-center">
                                <label className="pl-[54px] px-1">
                                  วันที่หยุดยา :
                                </label>
                                <input
                                  type="date"
                                  value={endDate}
                                  onChange={(e) => setEndDate(e.target.value)}
                                  className="border border-gray-400 rounded px-1 py-0.5 "
                                />
                                <input
                                  type="text"
                                  defaultValue="1"
                                  className="border border-gray-400 rounded h-[25px] bg-blue-200 text-blue-500 text-center w-[30px] focus:outline-none "
                                />
                              </div>
                            </div>
                            <div className="flex flex-row p-1">
                              <label className="pl-[120px] inline-flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={selected === 'option1'}
                                  onChange={() => handleToggle('option1')}
                                  className="form-checkbox h-3  text-blue-600"
                                />
                                <span>กำหนดวัน off ยา</span>
                              </label>

                              <label className="inline-flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={selected === 'option2'}
                                  onChange={() => handleToggle('option2')}
                                  className="form-checkbox h-3 ml-[30px] text-blue-600"
                                />
                                <span>กำหนดเวลา off ยา</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[40%] space-y-1">
                        <span className="px-2">คำนวนราคา</span>
                        {options.map((opt) => (
                          <label
                            key={opt.value}
                            className="flex items-center space-x-1"
                          >
                            <input
                              type="radio"
                              name="unit-option"
                              value={opt.value}
                              checked={selectedOption === opt.value}
                              onChange={() => setSelectedOption(opt.value)}
                              className="form-radio text-blue-600 ml-2 h-3 w-4"
                            />
                            <span className="text-green-500 font-semibold">
                              {opt.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="bg-red-200 flex items-center w-full h-[20%] p-1 ">
                      <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-wrap items-center gap-4 p-2 border border-gray-500 rounded">
                          {/* กลุ่มที่ 1 */}
                          <label className="inline-flex items-center space-x-1 text-blue-600">
                            <input
                              type="checkbox"
                              checked={group1 === 'label'}
                              onChange={() => handleGroup1Change('label')}
                              className="form-checkbox h-3 w-3"
                            />
                            <span>พิมพ์ฉลาก</span>
                          </label>

                          <label className="inline-flex items-center space-x-1 text-blue-600">
                            <input
                              type="checkbox"
                              checked={group1 === 'machine'}
                              onChange={() => handleGroup1Change('machine')}
                              className="form-checkbox h-3 w-3"
                            />
                            <span>ส่งเครื่อง</span>
                          </label>

                          <label className="inline-flex items-center space-x-1 text-blue-600">
                            <input
                              type="checkbox"
                              checked={group1 === 'produce'}
                              onChange={() => handleGroup1Change('produce')}
                              className="form-checkbox h-3 w-3"
                            />
                            <span>ส่งผลิต</span>
                          </label>

                          {/* กลุ่มที่ 2 */}
                          <label className="inline-flex items-center space-x-1 text-orange-600">
                            <input
                              type="checkbox"
                              checked={group2 === 'chemo'}
                              onChange={() => handleGroup2Change('chemo')}
                              className="form-checkbox h-3 w-3"
                            />
                            <span>ส่ง chemo</span>
                          </label>

                          <label className="inline-flex items-center space-x-1 text-orange-500">
                            <input
                              type="checkbox"
                              checked={group2 === 'tpn'}
                              onChange={() => handleGroup2Change('tpn')}
                              className="form-checkbox h-3 w-3"
                            />
                            <span>ส่ง TPN</span>
                          </label>
                        </div>

                        <div className=" border border-gray-500 rounded p-2 w-fit">
                          <div className="flex space-x-4">
                            <span>ยาเรื้อรัง</span>
                            <label className="inline-flex items-center space-x-1">
                              <input
                                type="radio"
                                name="chronic"
                                value="yes"
                                checked={value === 'yes'}
                                onChange={() => setValue('yes')}
                                className="form-radio text-green-600"
                              />
                              <span className="text-green-600 font-light">
                                เป็น
                              </span>
                            </label>

                            <label className="inline-flex items-center space-x-1">
                              <input
                                type="radio"
                                name="chronic"
                                value="no"
                                checked={value === 'no'}
                                onChange={() => setValue('no')}
                                className="form-radio text-green-600"
                              />
                              <span className="text-green-600 font-light">
                                ไม่เป็น
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-800 w-[40%]">
              <div className="bg-blue-200 h-[20%]">
                <div className="p-4">
                  <table className="w-full border border-black text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-black px-2  text-center">
                          ชื่อยา
                        </th>
                        <th className="border border-black px-2  text-center">
                          จำนวน
                        </th>
                        <th className="border border-black px-2  text-center">
                          หน่วย
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black px-2 ">
                          <input
                            type="text"
                            placeholder="กรอกชื่อยา"
                            className="w-full outline-none"
                          />
                        </td>
                        <td className="border border-black px-2 ">
                          <input
                            type="number"
                            placeholder="0"
                            className="w-full text-right outline-none"
                          />
                        </td>
                        <td className="border border-black px-2 ">
                          <input
                            type="text"
                            placeholder="เช่น เม็ด"
                            className="w-full outline-none"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-blue-300 flex justify-center items-center h-[30%] flex-col">
                <div className="w-full p-0.5">
                  <label
                    htmlFor="note"
                    className="block text-sm font-medium mb-1"
                  >
                    ข้อความฉลาก:
                  </label>
                  <textarea
                    id="note"
                    rows="4"
                    className="w-full h-[150px] border border-gray-300 rounded-md  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <div className="bg-blue-400  flex flex-col h-[25%]">
                <div className="w-full p-0.5">
                  <textarea
                    id="note"
                    rows="4"
                    className="w-full h-[120px] border border-gray-300 rounded-md  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <label className="inline-flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked=""
                        onChange=""
                        className="form-checkbox text-green-500 h-4 w-4"
                      />
                      <span className="text-gray-700">เลือกเพียง 1 อัน</span>
                    </label>
                  </div>

                  <div className="pr-10">ชิดขวา</div>
                </div>
              </div>
              <div className="flex flex-row"> </div>
              <div className="bg-blue-500 p-1  h-[25%]">
                <div className="">
                  <table className="w-full border border-black text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-black px-2  text-center">
                          เวลา
                        </th>
                        <th className="border border-black px-2  text-center">
                          คำอธิบายเวลา
                        </th>
                        <th className="border border-black px-2  text-center">
                          หน่วย
                        </th>
                        <th className="border border-black px-2  text-center">
                          วันที่
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black px-2 ">
                          <input
                            type="text"
                            placeholder="กรอกชื่อยา"
                            className="w-full outline-none"
                          />
                        </td>
                        <td className="border border-black px-2 ">
                          <input
                            type="text"
                            placeholder=""
                            className="w-full text-right outline-none"
                          />
                        </td>
                        <td className="border border-black px-2 ">
                          <input
                            type="text"
                            placeholder="เช่น เม็ด"
                            className="w-full outline-none"
                          />
                        </td>
                        <td className="border border-black px-2 ">
                          <input
                            type="text"
                            placeholder="เช่น เม็ด"
                            className="w-full outline-none"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[10%] w-full bg-yellow-300 flex flex-row">
            <div className="bg-yellow-400 p-1 flex justify-center items-center w-[60%]">
              {/* ปุ่มสถานะ */}
              <div className="pr-10">
                <button className="flex items-center justify-center border border-black bg-white px-6 py-3 hover:bg-green-100 ">
                  <img
                    src="/icons/save.png"
                    alt="save"
                    className="w-8 h-7 mr-3"
                  />
                  <span className="font-bold">สถานะการจ่าย</span>
                </button>
              </div>
              <div className="flex items-center border border-black">
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="p-1 bg-[#ffe8ba] h-6 w-40 border-b border-black"
                    placeholder=""
                  />
                  <input
                    type="text"
                    value="20250528003158"
                    readOnly
                    className="p-1 bg-[#d9d9f3] h-6 w-40 text-center"
                  />
                </div>
              </div>
              <div className="pl-12 flex flex-row">
                {/* ปุ่มบันทึก */}
                <div className="flex p-0.5">
                  <button className="flex items-center justify-center border border-black bg-white px-6 py-3 hover:bg-green-100 ">
                    <img
                      src="/icons/save.png"
                      alt="save"
                      className="w-8 h-7 mr-3"
                    />
                    <span className="font-bold">บันทึก</span>
                  </button>
                </div>
                {/* ปุ่มยกเลิก */}
                <div className="flex p-0.5">
                  <button className="flex items-center justify-center border border-black bg-white px-6 py-3 hover:bg-red-100">
                    <img
                      src="/icons/cancel.png"
                      alt="cancel"
                      className="w-8 h-7 mr-3"
                    />
                    <span className="font-bold">ยกเลิก</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-yellow-500 p-1 flex justify-center items-center w-[40%]">
              <div className="flex items-center justify-between w-full">
                {/* ซ้าย */}
                <div>ชิดซ้าย</div>

                {/* ขวา */}
                <div className="flex flex-col ml-auto">
                  <div className="flex items-center justify-end space-x-2">
                    <span>ราคา/หน่วย :</span>
                    <input
                      type="text"
                      defaultValue="0"
                      readOnly
                      className="border bg-black border-gray-400 rounded text-center text-green-300 px-2 py-1 w-[80px]"
                    />
                  </div>
                  <div className="flex items-center justify-end space-x-2 mt-1">
                    <span>ราคารวม :</span>
                    <input
                      type="text"
                      defaultValue="0"
                      readOnly
                      className="border bg-black border-gray-400 rounded text-center text-green-300 px-2 py-1 w-[80px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
