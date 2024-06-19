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
    <div className="w-screen h-full flex flex-col mt-1 ">
      <div className="w-screen h-2/5 ">
        <div className="w-screen h-[87%] flex ">
          <div className="h-full w-[12%] text-[10px] flex flex-col">
            <div className="w-full h-[15%]  flex justify-center  items-center">
              <button className="w-3/4 h-full flex justify-center items-center rounded-sm 2xl:text-[13px] 3xl:text-[15px] 4xl:text-[14px] bg-gray-500 text-xs text-white hover:bg-gray-800 active:bg-gray-400">
                รายละเอียดผู้ป่วย
              </button>
            </div>
            <div className="w-full h-[63%] mt-1 ">
              <div className="flex w-full h-full">
                <div className="flex flex-col justify-start pl-2 2xl:text-[11px] 3xl:text-[15px] 4xl:text-[14px] w-1/2 h-full">
                  <div className="w-[70%] h-[55%] bg-gray-300  flex items-center justify-center mb-2">
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
                <div className="ml-4 flex flex-col justify-top 2xl:text-[13px] 3xl:text-[16px] 4xl:text-[18px] items-end">
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
                      <p>เลขบัตรปชช: </p>
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
            <div className="w-full h-[22%] flex justify-between px-2 items-center 2xl:text-[13px] 3xl:text-[15px] my-1 ">
              <button className="w-2/5 h-full flex justify-center items-center rounded-sm p-1 bg-white text-white border-2 border-gray-700 hover:bg-gray-400 active:bg-gray-100">
                <img src={homeIcon} alt="บ้าน" className="w-6 h-6" />
              </button>
              <button className="w-2/5 h-full flex justify-center  items-center rounded-sm p-1 text-gray-700 font-bold bg-yellow-400 hover:text-white hover:bg-yellow-600 border-2 border-gray-700 active:bg-yellow-400">
                <span>จ่ายแบบ ROBOT</span>
              </button>
            </div>
          </div>
          <div className="h-full w-[53%] ">
            <div className="h-[15%] w-full flex justify-start ">
              <div className="h-     w-full flex justify-start ">
                <ButtonWithIcon icon={profileIcon} label="Medication Profile" />
                <ButtonWithIcon icon={noteBookIcon} label="รายการสั่งยา" />
                <ButtonWithIcon icon={editIcon} label="Medical Reconcile" />
                <ButtonWithIcon icon={drugFile} label=" Drug Profile" />
                <ButtonWithIcon icon={labImg} label="LAB" />
                <ButtonWithIcon icon={drug} label="ME/DRP" />
                <ButtonWithIcon icon={note} label="Note" />
              </div>
              <div className=" flex justify-end">
                <ButtonWithIcon icon={back} label="[ Ctrl+E ] กลับ" />
              </div>
            </div>
            <div className="w-full my-1 h-[83%]">
              <div className="flex  w-full h-[65%] ">
                <div className="ml-2  h-full w-[23%] ">
                  <div className="  flex justify-start w-full  boeder-[2px] mb-1">
                    <div className="  w-[45%] border-[1px] border-gray-700 flex justify-center items-center font-medium">
                      65078921
                    </div>
                    <div className="mx-2 w-[10%] flex justify-center font-medium items-end">
                      AN:
                    </div>
                    <div className=" w-[45%] border-[1px] font-medium border-gray-700 flex justify-center items-center">
                      65078921
                    </div>
                  </div>
                  <div className="mb-1 w-full  mt-[1px] font-medium border-[1px] border-gray-700 flex px-1">
                    นาย วิศรุต เชื้อคำ
                  </div>
                  <div className="w-full mb-1 mt-[1px] font-medium border-[1px] border-gray-700 flex px-1">
                    1419901859xxx
                  </div>
                  <div className="w-full mb-1  mt-[1px] font-medium border-[1px] border-gray-700 flex px-1">
                    ศัลยกรรมชาย 1
                  </div>
                  <div className="w-full mb-1 mt-[1px] font-medium border-[1px] border-gray-700 flex px-1">
                    นาย วิศรุต เชื้อคำ
                  </div>
                </div>
                <div className=" h-full w-[38%] ">
                  <div className="flex w-full mb-1">
                    <div className="w-[15%] flex justify-end">วันเกิด:</div>
                    <div className="w-[35%]  border-[1px] border-gray-700 flex justify-center items-center font-medium">
                      20/07/1999
                    </div>
                    <div className="w-[15%] flex justify-end">อายุ:</div>
                    <div className="w-[35%] border-[1px] border-gray-700 flex justify-center items-center font-medium">
                      20/07/1999
                    </div>
                  </div>
                  <div className="flex w-full ">
                    <div className="w-[15%] flex justify-end">ที่อยู่:</div>
                    <textarea
                      className=" p-[2px] w-[85%] mb-1 border-[1px] cursor-default bg-gray-200 border-gray-700 flex justify-center items-center font-medium"
                      value={
                        'บ้านเลขที่ 163 หมู่3 ต.เชียงยืน อ.เมือง จ.อุดรธานี 41000'
                      }
                      readonly
                    />
                  </div>
                  <div className="flex w-full mb-1 justify-end">
                    <div className="w-[33%] h-full flex justify-end item-center">
                      <div>ห้อง : </div>
                      <input
                        className="ml-1 cursor-default h-full w-[55%] bg-gray-200 border-[1px] border-gray-700 flex justify-center items-center font-medium px-2 "
                        type="text"
                        readOnly
                      />
                    </div>
                    <div className="w-[33%] h-full flex justify-end item-center">
                      <div>เตียง : </div>
                      <input
                        className="ml-1 cursor-default h-full w-[55%] bg-gray-200 border-[1px] border-gray-700 flex justify-center items-center font-medium px-2"
                        type="text"
                        readOnly
                      />
                    </div>
                    <div className="w-[33%] h-full flex justify-end item-center">
                      <div>เพศ : </div>
                      <input
                        className="ml-1 cursor-default h-full w-[55%] bg-gray-200 border-[1px] border-gray-700 flex justify-center items-center font-medium px-2"
                        type="text"
                        value={'ชาย'}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="flex w-full space-x-5">
                    <div className="w-[15%]"></div>
                    <p>profile = 0</p>
                    <p>copy = 0</p>
                  </div>
                </div>
                <div className=" h-full w-[39%] ">
                  <div className="flex mb-1 w-full">
                    <div className="ml-1 w-[15%] flex justify-end">
                      แพทย์ :{' '}
                    </div>
                    <input
                      type="text"
                      className="w-[85%] border-[1px] bg-green-50 border-gray-700 px-2 cursor-default"
                      value={'น.พ.กิตติธรรม ผดุงเวียง'}
                      readOnly
                    />
                  </div>
                  <div className="flex mb-1 w-full">
                    <div className="w-[50%] h-full flex">
                      <div className="w-[31%] ml-1 flex justify-end">
                        น้ำหนัก:
                      </div>
                      <input
                        type="text"
                        className="w-[35%]  border-[1px] bg-green-50 text-red-500 border-gray-700 text-center cursor-default mr-1"
                        value={'57'}
                        readOnly
                      />
                      <div className="w-[34%] ">kg. </div>
                    </div>
                    <div className="w-[50%] h-full flex">
                      <div className="w-[30%] ml-1 text-right flex justify-end">
                        BSA:
                      </div>
                      <input
                        type="text"
                        className="w-[35%]  border-[1px] bg-yellow-50 text-red-500 border-gray-700 text-center cursor-default mr-1"
                        value={'1.59'}
                        readOnly
                      />
                      <div className="w-[35%] ">m2 </div>
                    </div>
                  </div>
                  <div className="flex mb-1 w-full">
                    <div className="w-[50%] h-full flex">
                      <div className="w-[31%] ml-1 flex justify-end">
                        ส่วนสูง :{' '}
                      </div>
                      <input
                        type="text"
                        className="w-[35%]  border-[1px] bg-green-50 text-red-500 border-gray-700 text-center cursor-default mr-1"
                        value={'168'}
                        readOnly
                      />
                      <div className="w-[34%] ">cm. </div>
                    </div>
                    <div className="w-[50%] h-full flex">
                      <div className="w-[30%] ml-1 text-right">eGFR:</div>
                      <input
                        type="text"
                        className="w-[35%]  border-[1px] bg-yellow-50 text-red-500 border-gray-700 text-center cursor-default mr-1"
                        value={'130'}
                        readOnly
                      />
                      <div className="w-[35%] "></div>
                    </div>
                  </div>
                  <div className="w-full flex  ">
                    <div className="w-[40%] ">
                      <div className="flex justify-end items-end p-0 mb-1">
                        <div className="w-[20%] ml-1 text-right">scr :</div>
                        <input
                          type="text"
                          className="w-[42%]  border-[1px] bg-yellow-50 text-red-500 border-gray-700 text-center cursor-default ml-2 mr-1"
                          value={'0'}
                          readOnly
                        />
                        <div className="w-[15.2%]"> </div>
                      </div>{' '}
                      <div className="flex justify-end items-end p-0">
                        <div className="w-[%] ml-1 text-right">WBC:</div>
                        <input
                          type="text"
                          className="w-[42%]  border-[1px] bg-yellow-50 text-red-500 border-gray-700 text-center cursor-default ml-2 mr-1"
                          value={'0'}
                          readOnly
                        />
                        <div className="w-[15.2%]"></div>
                      </div>
                    </div>
                    <div className="w-[42.3%] ">
                      <div className="flex justify-end items-end p-0 mb-1">
                        <div className=" ml-1 text-right">Clcr :</div>
                        <input
                          type="text"
                          className="w-[40%]  border-[1px] bg-yellow-50 text-red-500 border-gray-700 text-center cursor-default  ml-1"
                          value={'0'}
                          readOnly
                        />
                      </div>{' '}
                      <div className="flex justify-end items-end p-0">
                        <div className=" ml-1 text-right">Neutrophil:</div>
                        <input
                          type="text"
                          className="w-[40%]  border-[1px] bg-yellow-50 text-red-500 border-gray-700 text-center cursor-default ml-1 "
                          value={'0'}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="w-[17.7%]  flex justify-center items-center p-1">
                      <ButtonWithSave icon={saveImg} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[35%] flex ">
                <div className="mx-2 h-full w-[50%] ">
                  <textarea
                    name=""
                    id="1"
                    className=" w-full h-full border-[2px] border-gray-700 bg-yellow-50"
                  ></textarea>
                </div>
                <div className="h-full w-[50%]  ">
                  <div className="flex mt-1 h-1/3 w-full">
                    <div className="flex justify-start items-start p-0 h-full  2xl:w-[50%] 3xl:w-[60%]">
                      <p className="mr-1 ">Band form Neutrophil%:</p>
                      <input
                        type="text"
                        className="w-[26.5%]  border-[1px] bg-yellow-50 text-red-500 border-gray-700 text-center cursor-default  ml-1"
                        value={'0'}
                        readOnly
                      />
                    </div>{' '}
                    <div className="flex justify-start item-start h-full 2xl:w-[50%] 3xl:w-[40%]">
                      <div className="text-right w-[42.8%] ">ANC:</div>
                      <input
                        type="text"
                        className=" w-[25.7%] border-[1px] bg-yellow-50 text-red-500 border-gray-700 text-center cursor-default ml-1 "
                        value={'0'}
                        readOnly
                      />
                      <div className=" ml-1 text-right">cells/mL</div>
                    </div>
                  </div>
                  <div className="flex w-full h-1/3">
                    <div className="flex justify-start items-start p-0 h-full w-full ">
                      <p className="mr-1">วินิจฉัยโรค :</p>
                      <input
                        type="text"
                        className="w-[69.5%] border-[1px] bg-white px-2 border-gray-700 ml-1"
                      />
                      <button className="bg-black text-white w-[5%] h-hull rotate-180 ml-[5%] hover:text-gray-800 hover:bg-gray-400 active:bg-slate-500">
                        {'^'}
                      </button>
                    </div>{' '}
                  </div>
                  <div className="flex w-full h-1/3">
                    <div className="flex justify-start items-start p-0 h-full w-full ">
                      <p className="mr-1 2xl:w-[14.3%] 3xl:w-[16.3%]">
                        Protocol :
                      </p>
                      <input
                        type="text"
                        className="w-[69.6%] border-[1px] bg-white px-2 border-gray-700 ml-1"
                      />
                      <button className="bg-black text-white w-[5%] h-hull rotate-180 ml-[5%] hover:text-gray-800 hover:bg-gray-400 active:bg-slate-500">
                        {'^'}
                      </button>
                    </div>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-[35%] bg-red-300"></div>
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
      <div className="w-screen h-3/5 bg-yellow-600"></div>
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
