import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import noCam from '../../../../img/no-pictures-no-camera.svg';
import { getDoseById } from '../../../service/DoseService';
export default function AddMainDoseData() {
  const [dataDose, setDataDose] = useState([]);
  const { orderitemcode } = useParams();
  const [openWork, setOpenWork] = useState('N');
  const [chemoStatus, setChemoStatus] = useState('N');
  const [diluentStatus, setDiluentStatus] = useState('N');
  const [sendChemo, setSendChemo] = useState('sendChemo');
  const [sendMachine, setSendMachine] = useState('rdNotsendmachine');
  const [multiDose, setMultiDose] = useState('rdNotsendmultidose');
  const [printStatus, setPrintStatus] = useState('rdNotPrint');
  const [selectDoseType, setSelectDoseType] = useState('ยาฉีด');
  const [selectDescription, setSelectDescription] = useState('Capsule');
  const [sendStore, setSendStore] = useState('0');
  const [sendF3F4, setSendF3F4] = useState('');
  const [txtPack, setTxtPack] = useState('');
  const [DrugAge, setTxtDrugAge] = useState('');
  const [generalChemo, setGeneralChemo] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  useEffect(() => {
    const showdataDrugInformation = async () => {
      try {
        const data = await getDoseById(orderitemcode);
        setDataDose(data[0]); // บันทึกลง state
        setChemoStatus(data[0].ChemicalStatus);
        setDiluentStatus(data[0].diluentstatus);
        setSelectDoseType(data[0].drugform);
        setSelectDescription(data[0].description);
        setSendStore(data[0].sendStore);
        setSendF3F4(data[0].sendF3F4);
        setTxtPack(data[0].pack);
        setTxtDrugAge(data[0].DrugAge);
        setGeneralChemo(data[0].GeneralChemo);
        setVehicleType(data[0].vehicletype);
        if (data[0].unused === 'Y') {
          setOpenWork('Y');
        } else {
          setOpenWork('N');
        }
        if (data[0].sendmix === 'N') {
          setSendChemo('sendNotMix');
          if (data[0].sendTPN === 'Y') {
            setSendChemo('sendTNP');
          }
          if (data[0].sendChemo === 'Y') {
            setSendChemo('sendChemo');
          }
        } else {
          setSendChemo('sendMix');
        }
        if (data[0].sendmachine === 'N') {
          setSendMachine('rdNotsendmachine');
        } else {
          setSendMachine('rdsendmachine');
        }
        if (data[0].multidose === 'N') {
          setMultiDose('rdNotsendmultidose');
        } else {
          setMultiDose('rdsendmultidose');
        }
        if (data[0].printstatus === 'N') {
          setPrintStatus('rdNotPrint');
        } else {
          setPrintStatus('rdPrint');
        }
      } catch (err) {
        console.error(err);
      }
    };
    showdataDrugInformation();
  }, [orderitemcode]);

  return (
    <div className="w-full h-full flex border border-gray-700 bg-gray-100">
      <div className="w-56 h-full px-1 pt-2 pb-3 flex flex-col items-center border-r-2 border-gray-400 overflow-y-auto">
        <img
          src={noCam}
          alt="กล้อง"
          className="w-[95%] h-42 border border-gray-400 p-2"
        />

        <input type="file" class="file-input" />
        <div className="flex space-x-2">
          <span>เปิดใช้งาน : </span>{' '}
          <input
            type="checkbox"
            checked={openWork === 'Y'}
            onChange={(e) => setOpenWork(e.target.checked ? 'Y' : 'N')}
            className="toggle checked:bg-green-300 checked:text-green-800"
          />
        </div>
        <label className="label">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checked:bg-blue-500 checked:text-white"
          />
          <p className="text-red-700">ค้นหาชื่อยาด้วยรหัส</p>
        </label>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border px-4">
          <legend className="fieldset-legend w-full">สารเคมี</legend>
          <div className="flex justify-around items-center">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="chemo"
                value="N"
                checked={chemoStatus === 'N'}
                onChange={(e) => setChemoStatus(e.target.value)}
                className="radio checked:bg-blue-400 radio-xs"
              />
              <span className="text-black">ไม่เป็น</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="chemo"
                value="Y"
                checked={chemoStatus === 'Y'}
                onChange={(e) => setChemoStatus(e.target.value)}
                className="radio checked:bg-blue-400 radio-xs"
              />
              <span className="text-black">เป็น</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border px-4">
          <legend className="fieldset-legend w-full">ตัวทำละลาย</legend>
          <div className="flex justify-around items-center">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="uli"
                value={'N'}
                checked={diluentStatus === 'N'}
                onChange={(e) => setDiluentStatus(e.target.value)}
                className="radio checked:bg-blue-400 radio-xs"
              />
              <span className="text-black">ไม่เป็น</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="uli"
                value={'Y'}
                checked={diluentStatus === 'Y'}
                onChange={(e) => setDiluentStatus(e.target.value)}
                className="radio checked:bg-blue-400 radio-xs"
              />
              <span className="text-black">เป็น</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border px-4">
          <legend className="fieldset-legend w-full">ส่งผลิต</legend>
          <div className="flex flex-col justify-around items-start">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="manufacture"
                value={'sendNotMix'}
                onChange={(e) => setSendChemo(e.target.value)}
                checked={sendChemo === 'sendNotMix'}
                className="radio checked:bg-blue-400 radio-xs"
              />
              <span className="text-black">ไม่ส่งผลิต</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="manufacture"
                checked={sendChemo === 'sendMix'}
                value={'sendMix'}
                onChange={(e) => setSendChemo(e.target.value)}
                className="radio checked:bg-blue-400 radio-xs"
              />
              <span className="text-black">ส่งผลิต</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="manufacture"
                checked={sendChemo === 'sendTPN'}
                value={'sendTPN'}
                onChange={(e) => setSendChemo(e.target.value)}
                className="radio checked:bg-blue-400 radio-xs"
              />
              <span className="text-black">ส่ง TPN</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="manufacture"
                checked={sendChemo === 'sendChemo'}
                value={'sendChemo'}
                onChange={(e) => setSendChemo(e.target.value)}
                className="radio checked:bg-blue-400 radio-xs"
              />
              <span className="text-black">ส่ง Chemo</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border px-4">
          <legend className="fieldset-legend w-full">ส่งเครื่อง JVM</legend>
          <div className="flex flex-col justify-around items-center space-y-2">
            <div className="flex space-x-3">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  className="radio checked:bg-blue-400 radio-xs"
                  checked={sendMachine === 'rdNotsendmachine'}
                  value={'rdNotsendmachine'}
                  onChange={(e) => setSendMachine(e.target.value)}
                />
                <span className="text-black">ไม่ส่งเครื่อง</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  className="radio checked:bg-blue-400 radio-xs"
                  checked={sendMachine === 'rdsendmachine'}
                  value={'rdsendmachine'}
                  onChange={(e) => setSendMachine(e.target.value)}
                />
                <span className="text-black">ส่งเครื่อง</span>
              </label>
            </div>
            <div className="flex space-x-3">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="pastic"
                  className="radio checked:bg-blue-400 radio-xs"
                  checked={multiDose === 'rdNotsendmultidose'}
                  value={'rdNotsendmultidose'}
                  onChange={(e) => {
                    setMultiDose(e.target.value);
                  }}
                />
                <span className="text-black">ไม่แยกซอง</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="pastic"
                  className="radio checked:bg-blue-400 radio-xs"
                  checked={multiDose === 'rdsendmultidose'}
                  value={'rdsendmultidose'}
                  onChange={(e) => {
                    setMultiDose(e.target.value);
                  }}
                />
                <span className="text-black">แยกซอง</span>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border px-4">
          <legend className="fieldset-legend w-full">การพิมพ์ฉลาก : </legend>
          <div className="flex justify-around items-center">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="print"
                className="radio checked:bg-blue-400 radio-xs"
                checked={printStatus === 'rdNotPrint'}
                value={'rdNotPrint'}
                onChange={(e) => {
                  setPrintStatus(e.target.value);
                }}
              />
              <span className="text-black">ไม่พิมพ์</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="print"
                className="radio checked:bg-blue-400 radio-xs"
                checked={printStatus === 'rdPrint'}
                value={'rdPrint'}
                onChange={(e) => {
                  setPrintStatus(e.target.value);
                }}
              />
              <span className="text-black">พิมพ์</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border p-2">
          <legend className="fieldset-legend w-full">รูปแบบยา : </legend>

          <select
            id="doseType"
            className="border p-2"
            value={selectDoseType}
            onChange={(e) => setSelectDoseType(e.target.value)}
          >
            <option value="ยาฉีด">ยาฉีด</option>
            <option value="ยาใช้ภายนอก">ยาใช้ภายนอก</option>
            <option value="เวชภัณฑ์ไม่ใช่ยา">เวชภัณฑ์ไม่ใช่ยา</option>
            <option value="ยาน้ำ รับประทาน">ยาน้ำ รับประทาน</option>
            <option value="ยาเม็ด รับประทาน">ยาเม็ด รับประทาน</option>
            <option value="ไม่ใช่ยา">ไม่ใช่ยา</option>
            <option value="สมุนไพร">สมุนไพร</option>
          </select>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border p-2">
          <legend className="fieldset-legend w-full">DosageForm : </legend>

          <select
            id="doseType"
            className="border p-2"
            value={selectDescription}
            onChange={(e) => setSelectDescription(e.target.value)}
          >
            <option value="Capsule">Capsule</option>
            <option value="Cream">Cream</option>
            <option value="Elixir">Elixir</option>
            <option value="Emulsion">Emulsion</option>
            <option value="Injection">Injection</option>
            <option value="Jelly">Jelly</option>
            <option value="Lotion">Lotion</option>
            <option value="Mixture">Mixture</option>
            <option value="Ointment">Ointment</option>
            <option value="Paste">Paste</option>
            <option value="Powder">Powder</option>
            <option value="Shampoo">Shampoo</option>
            <option value="Solution">Solution</option>
            <option value="Suspension">Suspension</option>
            <option value="Syrup">Syrup</option>
            <option value="Tablet">Tablet</option>
          </select>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border px-2">
          <legend className="fieldset-legend w-full">ส่งเบิก :</legend>
          <div className="flex flex-wrap items-center space-x-2">
            <label className="label cursor-pointer ">
              <input
                type="radio"
                name="drew"
                value={0}
                checked={sendStore === 0}
                onChange={(e) => setSendStore(e.target.value)}
                className="radio checked:bg-blue-400 radio-xs"
              />
              <span className="text-black">ไม่ส่ง</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="drew"
                className="radio checked:bg-blue-400 radio-xs"
                value={1}
                checked={sendStore === 1}
                onChange={(e) => setSendStore(e.target.value)}
              />
              <span className="text-black">ส่ง</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="drew"
                className="radio checked:bg-blue-400 radio-xs"
                value={2}
                checked={sendStore === 2}
                onChange={(e) => setSendStore(e.target.value)}
              />
              <span className="text-black">ยาเสพติด</span>
            </label>
          </div>
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="drew-2"
              className="radio checked:bg-blue-400 radio-xs"
              value={1}
              checked={sendF3F4 === 1}
              onChange={(e) => setSendF3F4(e.target.value)}
            />
            <span className="text-black">ส่งชั้น 4</span>
          </label>
          <label className="label">ส่งชั้น 3:</label>
          <div className="flex space-x-1">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="drew-2"
                className="radio checked:bg-blue-400 radio-xs"
                value={0}
                checked={sendF3F4 === 0}
                onChange={(e) => setSendF3F4(e.target.value)}
              />
              <span className="text-black">รพ.ผลิดเอง</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="drew-2"
                className="radio checked:bg-blue-400 radio-xs"
                value={2}
                checked={sendF3F4 === 2}
                onChange={(e) => setSendF3F4(e.target.value)}
              />
              <span className="text-black">ยาฆ่าเชื้อ</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border p-2">
          <legend className="fieldset-legend w-full">Pack : </legend>

          <input
            type="number"
            className="px-2 py-1 w-full border "
            onChange={(e) => {
              setTxtPack(e.target.value);
            }}
            value={txtPack}
          />
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border p-2 flex items-center">
          <legend className="fieldset-legend w-full">อายุของยา :</legend>

          <input
            type="number"
            className="px-2 py-1 w-full border "
            value={DrugAge}
            onChange={(e) => setTxtDrugAge(e.target.value)}
          />
          <p>เดือน</p>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border p-2 flex items-center justify-around">
          <legend className="fieldset-legend w-full">
            เฉพาะการผลิตทั่วไป :
          </legend>
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="onlyGenerate"
              className="radio checked:bg-blue-400 radio-xs"
              value={'N'}
              checked={generalChemo === 'N'}
              onChange={(e) => setGeneralChemo(e.target.value)}
            />
            <span className="text-black">ไม่ใช่</span>
          </label>
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="onlyGenerate"
              className="radio checked:bg-blue-400 radio-xs"
              value={'Y'}
              checked={generalChemo === 'Y'}
              onChange={(e) => setGeneralChemo(e.target.value)}
            />
            <span className="text-black">ใช่</span>
          </label>
        </fieldset>
        <fieldset className="fieldset bg-white border-base-400 rounded-box w-full border p-2">
          <legend className="fieldset-legend w-full">Vehicle : </legend>

          <input
            type="number"
            className="px-2 py-1 w-full border"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          />
        </fieldset>
      </div>

      <div className="h-full w-[80%]">
        <ShowDoseData data={dataDose} />
      </div>
    </div>
  );
}
const ShowDoseData = ({ data }) => {
  console.log(data);
  return <div className="w-full h-full bg-yellow-300 p-2">test</div>;
};
