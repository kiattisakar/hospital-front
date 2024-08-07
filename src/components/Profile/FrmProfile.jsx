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
import increase from '../../../img/increase.png';
import chemoRoom from '../../../img/chemoRoom.png';
import IPDRoom from '../../../img/IPDRoom.png';
import TPNRoom from '../../../img/TPNRoom.png';
import IVRoom from '../../../img/IVRoom.png';
import stopIcon from '../../../img/Stop.png';
import playIcon from '../../../img/play.png';
import cancel from '../../../img/cancel.png';
import { Tabs, Tab } from './TabControlProfile';
import LabResult from './LabResult';
import NoteDrp from './NoteDrp';
import IhosDue from './IhosDue';
import DataTable from './DataTable';

// import backIcon from '../../../img/back.png';
export default function FrmProfile() {
  return (
    <div className="w-screen h-full flex flex-col mt-1 ">
      <div className="w-screen h-2/5 ">
        <div className="w-screen h-[87%] flex ">
          <div className="h-full w-[12%] text-[10px] flex flex-col">
            <div className="w-full h-[15%]  flex justify-center  items-center">
              <button className="w-3/4 h-full flex justify-center items-center rounded-sm text-[13px] bg-gray-500 text-xs text-white hover:bg-gray-800 active:bg-gray-400">
                รายละเอียดผู้ป่วย
              </button>
            </div>
            <div className="w-full h-[63%] mt-1 ">
              <div className="flex w-full h-full">
                <div className="flex flex-col justify-center items-center pl-2 text-[11px] w-full h-full">
                  <div className="w-[40%] h-[55%] bg-gray-300  flex items-center justify-center mb-2">
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
              </div>
            </div>
            <div className="w-full h-[22%] flex justify-between px-2 items-center 2xl:text-[13px] 3xl:text-[15px] my-1 ">
              <button className="w-2/5 h-full flex justify-center items-center rounded-sm p-1 bg-white text-white border-2 border-gray-700 hover:bg-gray-400 active:bg-gray-100">
                <img src={homeIcon} alt="บ้าน" className="w-6 h-6" />
              </button>
              <button className="w-2/5 h-full flex justify-center  items-center rounded-sm p-1 text-gray-700 font-bold bg-yellow-400 hover:text-white hover:bg-yellow-600 border-2 border-gray-700 active:bg-yellow-400">
                <span>จ่ายแบบ ROBOT</span>
              </button>
            </div>
          </div>
          <div className="h-full w-[58%] ">
            {' '}
            {/* block2 */}
            <div className="h-[15%] w-full flex justify-start ">
              <div className="h-full w-full flex justify-start ">
                <ButtonWithIcon icon={profileIcon} label="Medication Profile" />
                <ButtonWithIcon icon={noteBookIcon} label="รายการสั่งยา" />
                <ButtonWithIcon icon={editIcon} label="Medical Reconcile" />
                <ButtonWithIcon icon={drugFile} label=" Drug Profile" />
                <ButtonWithIcon icon={labImg} label="LAB" />
                <ButtonWithIcon icon={drug} label="ME/DRP" />
                <ButtonWithIcon icon={note} label="Note" />
              </div>
              <div className=" flex justify-end mr-2">
                <ButtonWithIcon icon={back} label="[ Ctrl+E ] กลับ" />
              </div>
            </div>
            <div className="w-full my-1 h-[83%] grid grid-rows-8 grid-cols-6">
              <div className=" flex row-start-1 row-span-1 col-start-1 col-span-2 ">
                <div className="w-[60%] h-full flex justify-end items-center ">
                  <p className="h-[70%] w-[30%] text-right">HN: </p>
                  <div className="h-[90%] w-[70%] border border-collapse border-gray-400 pl-[2px] flex items-center">
                    รหัส HN
                  </div>
                </div>
                <div className="w-[40%] h-full flex justify-end items-center ">
                  <p className="h-[70%] w-[15%] text-right">AN: </p>
                  <div className="h-[90%] w-[85%] border border-collapse border-gray-400 pl-[2px] flex items-center">
                    รหัส AN
                  </div>
                </div>
              </div>
              <div className=" row-start-1 row-span-1 col-start-3 col-span-4 ">
                <div className="w-[50%] h-full grid grid-cols-2 grid-rows-1">
                  <div className="w-full h-full flex justify-end items-center">
                    <p className="h-[70%] w-[30%] text-right"> วันเกิด :</p>
                    <div className="h-[90%] w-[70%] border border-collapse border-gray-400 pl-[2px] flex items-center">
                      20/7/42
                    </div>
                  </div>
                  <div className="w-full h-full  flex justify-end items-center">
                    <p className="h-[70%] w-[30%] text-right mr-1"> อายุ :</p>
                    <div className="h-[90%] w-[70%] border border-collapse border-gray-400 pl-[2px] flex items-center">
                      อายุ
                    </div>
                  </div>
                </div>
              </div>
              <div className=" row-start-1 row-span-1 col-start-5 col-span-6 ">
                <div className="w-full h-full  flex justify-end items-center">
                  <p className="h-[70%] w-[15%] text-right"> แพทย์ : </p>
                  <input
                    type="text"
                    className="h-[90%] w-[80%] border border-collapse bg-green-50 border-gray-400 pl-[2px] flex items-center"
                  />

                  <p className="w-[5%]"></p>
                </div>
              </div>
              <div className=" row-start-2 row-span-1 col-start-1 col-span-2 flex items-center">
                <p className="h-[70%] w-[25%] text-right"> ชื่อ : </p>
                <div className="h-[90%] w-[75%] border border-collapse border-gray-400 pl-[2px] flex items-center">
                  ชื่อ
                </div>
              </div>
              <div className=" row-start-2 row-span-2 col-start-3 col-span-2 flex justify-end items-center">
                <p className="h-[80%] w-[15%] text-right"> ที่อยู่: </p>
                <div className="h-[90%] w-[85%] border border-collapse border-gray-400 p-[2px] flex items-top">
                  ที่อยู่
                </div>
              </div>
              <div className=" row-start-2 row-span-1 col-start-5 col-span-6 flex items-center">
                <div className="w-[50%] h-full flex justify-end items-center ">
                  <p className="h-[70%] w-[30%] text-right">น้ำหนัก: </p>
                  <div className="h-[90%] w-[40%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500 ">
                    80
                  </div>
                  <p className="h-[70%] w-[30%]">kg.</p>
                </div>
                <div className="w-[50%] h-full flex justify-end items-center ">
                  <p className="h-[70%] w-[30%] text-right">BSA: </p>
                  <div className="h-[90%] w-[40%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500">
                    88
                  </div>
                  <p className="h-[70%] w-[30%]">m2</p>
                </div>
              </div>
              <div className=" row-start-3 row-span-1 col-start-1 col-span-2 flex items-center ">
                <p className="h-[70%] w-[25%] text-right"> บัตรปชช: </p>
                <div className="h-[90%] w-[75%] border border-collapse border-gray-400 pl-[2px] flex items-center">
                  เลขบัตรประชาชน
                </div>
              </div>

              <div className=" row-start-3 row-span-1 col-start-5 col-span-2 flex items-center">
                <div className="w-[50%] h-full flex justify-end items-center ">
                  <p className="h-[70%] w-[30%] text-right">ส่วนสูง: </p>
                  <div className="h-[90%] w-[40%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500 ">
                    120
                  </div>
                  <p className="h-[70%] w-[30%]">cm.</p>
                </div>
                <div className="w-[50%] h-full flex justify-end items-center ">
                  <p className="h-[70%] w-[30%] text-right">eGFR: </p>
                  <div className="h-[90%] w-[40%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500">
                    0
                  </div>
                  <p className="h-[70%] w-[30%]"></p>
                </div>
              </div>
              <div className=" row-start-4 row-span-1 col-start-1 col-span-2 flex items-center">
                <div className="w-full h-full  flex justify-end items-center">
                  <p className="h-[70%] w-[25%] text-right  "> หอผู้ป่วย : </p>
                  <div className="h-[90%] w-[75%] border border-collapse border-gray-400 pl-[2px] flex items-center">
                    หอผู้ป่วย
                  </div>
                </div>
              </div>
              <div className=" row-start-4 row-span-1 col-start-3 col-span-2 flex items-center">
                <div className="grid h-full ml-2 w-full grid-rows-1 grid-col-3">
                  <div className="row-start-1 row-span-1 col-span-1 col-start-1 flex justify-around items-center">
                    <p className="h-[70%] w-[20%] text-right  ">ห้อง:</p>
                    <div className="h-[90%] w-[55%] border border-collapse border-gray-400 pl-[2px] flex items-center"></div>
                  </div>
                  <div className="row-start-1 row-span-1 col-span-1 col-start-2  flex justify-around items-center ">
                    <p className="h-[70%] w-[20%] text-right  ">เตียง:</p>
                    <div className="h-[90%] w-[55%] border border-collapse border-gray-400 pl-[2px] flex items-center"></div>
                  </div>
                  <div className="row-start-1 row-span-1 col-span-1 col-start-3 flex justify-around items-center">
                    <p className="h-[70%] w-[20%] text-right  ">เพศ:</p>
                    <div className="h-[90%] w-[55%] border border-collapse border-gray-400 pl-[2px] flex items-center"></div>
                  </div>
                </div>
              </div>
              <div className=" row-start-4 row-span-2 col-start-5 col-span-2 flex">
                <div className="w-[85%] h-full">
                  <div className="flex w-full h-[50%] ">
                    <div className="w-[50%] h-full flex justify-center items-center ">
                      <p className="h-[70%] w-[33%] text-right">scr: </p>
                      <div className="h-[90%] w-[47%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500 ">
                        0.42
                      </div>
                      <p className="h-[70%] w-[15%]"></p>
                    </div>
                    <div className="w-[50%] h-full flex justify-end items-center ">
                      <p className="h-[70%] w-[55%] text-right">Clcr: </p>
                      <div className="h-[90%] w-[45%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500">
                        118.00
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full h-[50%] ">
                    <div className="w-[45%] h-full flex justify-end items-center ">
                      <p className="h-[70%] w-[33%] text-right">WBC: </p>
                      <div className="h-[90%] w-[51%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500 ">
                        0
                      </div>
                      <p className="w-[7%]"></p>
                    </div>
                    <div className="w-[55%] h-full flex justify-end items-center ">
                      <p className="h-[70%] w-[55%] text-right">
                        Neutrophil%:{' '}
                      </p>
                      <div className="h-[90%] w-[45%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500">
                        118.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[15%] h-full  p-1 flex justify-center items-center">
                  <button className="flex flex-col justify-center items-center border border-collapse border-gray-400  bg-white hover:bg-yellow-50 active:bg-gray-200 ">
                    <img
                      className=" w-[50%] h-[50%] m-[4px]"
                      src={saveImg}
                      alt="save"
                    />
                    <span>บันทึก</span>
                  </button>
                </div>
              </div>
              <div className=" row-start-5 row-span-1 col-start-1 col-span-2 flex items-center">
                <p className="h-[70%] w-[25%] text-right"> สิทธิ์ผู้ป่วย: </p>
                <div className="h-[90%] w-[75%] border border-collapse bg-orange-200 border-gray-400 pl-[2px] flex items-center">
                  สิทธิ์ผู้ป่วย
                </div>
              </div>
              <div className=" row-start-5 row-span-1 col-start-3 col-span-2 flex justify-around items-center">
                <p>profile = {'0'}</p>
                <p>coppy = {'0'}</p>
                <p> - </p>
              </div>
              <div className=" row-start-6 row-span-3 col-start-1 col-span-3 flex items-center justify-center">
                <textarea
                  name=""
                  id=""
                  className="h-[90%] w-[98%] bg-yellow-50 p-2 border border-collapse border-gray-400"
                ></textarea>
              </div>
              <div className=" row-start-6 row-span-3 col-start-4 col-span-3 flex items-center">
                <div className="h-full w-full grid grid-cols-1 grid-rows-3">
                  <div className="row-start-1 row-span-1 col-span-1 col-start-1 w-full h-full flex ml-[8.8%]">
                    <div className="w-[50%] h-full flex justify-end items-center ">
                      <p className="h-[74%] w-[50%] text-right">
                        Band form Neutrophil%:{' '}
                      </p>
                      <div className="h-[90%] w-[26%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500 ">
                        0
                      </div>
                      <p className="w-[4%]"></p>
                    </div>
                    <div className="w-[30%] h-full flex justify-end items-center ">
                      <p className="h-[70%] w-[54%] text-right">ANC:</p>
                      <div className="h-[90%] w-[37%] border border-collapse border-gray-400 pl-[2px] flex justify-center items-center mx-[2px] text-red-500">
                        0
                      </div>
                      <p className="h-[70%] w-[0%] text-right">cell/mL</p>
                    </div>
                  </div>
                  <div className="row-start-2 row-span-1 col-span-1 col-start-1 w-full h-full flex items-center">
                    <span className="w-[20%] text-right">วินิจฉัยโรค:</span>

                    <input
                      type="text"
                      className="h-[90%] w-[70%] border border-collapse border-gray-400 pl-[2px] flex items-center px-3"
                    />

                    <p className="w-[2%]"></p>
                    <button className="w-6 rounded-sm h-6 bg-black hover:bg-gray-500 rotate-180 active:bg-gray-600">
                      <span className="text-white text-[15px] ">^</span>
                    </button>
                  </div>
                  <div className="row-start-3 row-span-1 col-span-1 col-start-1 w-full h-full flex items-center">
                    <span className="w-[20%] text-right">Protocal:</span>

                    <input
                      type="text"
                      className="h-[90%] w-[70%] border border-collapse border-gray-400 pl-[2px] flex items-center px-3"
                    />

                    <p className="w-[2%]"></p>
                    <button className="w-6 rounded-sm h-6 bg-black hover:bg-gray-500 rotate-180 active:bg-gray-600">
                      <span className="text-white text-[15px] ">^</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-[30%] border border-collapse border-gray-400 bg-white">
            {/* block3 */}
            <div className="h-full w-full">
              <Tabs>
                <Tab label="LAB Result">
                  <div className=" w-full h-[85%]">
                    <LabResult />
                  </div>
                </Tab>
                <Tab label="Note Drp">
                  <div className=" w-full h-[85%]">
                    <NoteDrp />
                  </div>
                </Tab>
                <Tab label="IHOS DUE">
                  <div className=" w-full h-[85%]">
                    <IhosDue />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="w-screen h-[13%]  flex items-center space-x-[2px] px-5">
          <ButtonWithIcon icon={IPDRoom} label="ห้องยา IPD" />
          <ButtonWithIcon icon={IVRoom} label="ห้องยา IV" />
          <ButtonWithIcon icon={chemoRoom} label="ห้องยา Chemo" />
          <ButtonWithIcon icon={TPNRoom} label="ห้องยา TPN" />
          <div className="flex">
            <div className=" mx-5 font-bold">รหัสหอผู้ป่วย : {'-'}</div>
            <div className=" mx-5 font-bold">หอผู้ป่วย : {'-'}</div>
          </div>
        </div>
      </div>
      <div className="w-screen h-3/5  bg-yellow-100">
        <div className="w-full h-[85%] bg-white ">
          <DataTable />
        </div>
        <div className="w-full h-[5%] bg-black flex  items-center ">
          <div className=" w-full h-full flex justify-between items-center px-5">
            <div className="flex items-center">
              <input type="checkbox" />
              <label className=" text-white text-sm ml-2">แสดงรายการ Off</label>
              <label className=" text-white text-sm ml-5">จำนวน</label>
              <label className=" text-white text-sm ml-2">{'0'}</label>
              <label className=" text-white text-sm ml-2">รายการ</label>
            </div>
            <div className="flex justify-end items-center">
              <input type="checkbox" />
              <label className=" text-yellow-400 text-sm ml-5 font-bold">
                ให้ยาส่งผลิตจัดมือ
              </label>
            </div>
          </div>
        </div>
        <div className="w-full h-[9%]  flex">
          <div className="flex w-full justify-between px-[1px] items-center">
            <div className="flex h-full items-center space-x-[1px]">
              <ButtonWithUnder
                icon={increase}
                label={'เพิ่ม'}
                shortcut={'[F5]'}
              />
              <ButtonWithUnder icon={note} label={'แก้ไข'} shortcut={'[F7]'} />
              <ButtonWithUnder
                icon={cancel}
                label={'ลบ'}
                shortcut={'[F6,Del]'}
              />
              <ButtonWithUnder
                icon={stopIcon}
                label={'Off ยา'}
                shortcut={'[F4]'}
              />
              <ButtonWithUnder
                icon={playIcon}
                label={'Hold ยา'}
                shortcut={'[F3]'}
              />
              <ButtonWithUnder
                icon={saveImg}
                label={'บันทึก'}
                shortcut={'[Ctrl+s]'}
              />
            </div>
            <div className="flex h-full space-x-[1px] items-center">
              <ButtonWithUnder2
                label={'สร้างรายการยากลับบ้าน'}
                icon={homeIcon}
                shortcut={'[Ctrl+H]'}
              />
              <ButtonWithUnder2
                label={'สร้างรายการยา'}
                icon={editIcon}
                shortcut={'[Ctrl+End]'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const ButtonWithIcon = ({ icon, label }) => {
  return (
    <button className="bg-white 2xl:text-[10px] 3xl:text-[12px] text-gray-700 border-2 rounded h-full px-1 cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-300 flex justify-center items-center w-24">
      <img src={icon} alt={label} className="mr-[2px] w-6 h-6" />
      <span className=" text-center">{label}</span>
    </button>
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
const ButtonWithUnder = ({ icon, label, shortcut }) => {
  return (
    <button className="bg-white text-[15px] text-gray-700 border-[1px] border-black h-full px-1 cursor-pointer hover:bg-gray-200 active:bg-gray-400 flex justify-between items-center w-[100px]">
      <img src={icon} alt={label} className="mr-[2px] w-8 h-8" />
      <div className="flex flex-col items-end">
        {shortcut && (
          <span className="text-gray-500 text-[10px]">{shortcut}</span>
        )}
        <span className="text-center">{label}</span>
      </div>
    </button>
  );
};
const ButtonWithUnder2 = ({ icon, label, shortcut }) => {
  return (
    <button className="bg-white text-[15px] text-gray-700 border-[1px] border-black h-full px-1 cursor-pointer hover:bg-gray-200 active:bg-gray-400 flex justify-between items-center w-[200px]">
      <img src={icon} alt={label} className="mr-[2px] w-8 h-8" />
      <div className="flex flex-col items-end">
        {shortcut && (
          <span className="text-gray-500 text-[10px]">{shortcut}</span>
        )}
        <span className="text-center">{label}</span>
      </div>
    </button>
  );
};
