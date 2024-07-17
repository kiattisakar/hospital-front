import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FrmDataTable() {
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState(null);
  const [patients, setPatients] = useState([]);
  const [orderdate, setOrderdate] = useState('2024-05-30');
  const [ptstatus, setPtstatus] = useState('');

  // Fetch ward data on component mount
  useEffect(() => {
    axios
      .post('http://localhost:3000/api/first')
      .then((response) => {
        setWards(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the ward data!', error);
      });
  }, []);

  // Fetch patient data when selectedWard, orderdate, or ptstatus changes
  useEffect(() => {
    if (selectedWard) {
      axios
        .post('http://localhost:3000/api/second', {
          orderdate: orderdate,
          ptstatus: ptstatus,
          wardcode: selectedWard.wardcode,
        })
        .then((response) => {
          setPatients(response.data);
        })
        .catch((error) => {
          console.error('There was an error fetching the patient data!', error);
        });
    }
  }, [selectedWard, orderdate, ptstatus]);
  const [selectedRadio, setSelectedRadio] = useState('all');

  const handleRadioAdmit = (event) => {};
  return (
    <div className=" h-full flex w-screen">
      <div className="h-full w-1/4 border-2 border-gray-300 flex flex-col px-2">
        <div className="h-full overflow-auto px-2 ">
          <table className="w-full min-w-full">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-4 py-2 border border-gray-300">หอผู้ป่วย</th>
                <th className="px-4 py-2 border border-gray-300">จำนวน</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {wards.map((ward, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-400 hover:text-white active:bg-blue-700 cursor-pointer"
                  onClick={() => setSelectedWard(ward)}
                >
                  <td className="px-4 py-2 border border-gray-300">
                    {ward.warddesc}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    {ward.countadmit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-3/4 max-h-full   border-2 border-gray-300 ml-2 overflow-auto ">
        <div className="w-full h-8 bg-blue-200 flex justify-between items-center">
          <div className="w-2/4 h-full flex justify-around items-center px-5">
            <h4 className="font-bold">
              รหัสหอผู้ป่วย : {selectedWard ? selectedWard.wardcode : ''}
            </h4>
            <h4 className="font-bold">
              ชื่อหอผู้ป่วย : {selectedWard ? selectedWard.warddesc : ''}
            </h4>
          </div>
          <div className="w-2/4 h-full flex justify-around items-center px-5">
            <div>
              <label className="mr-2">แสดงทั้งหมด</label>
              <input
                value="all"
                checked={selectedRadio === 'all'}
                type="radio"
                name="patientStatus"
                onChange={(event) => {
                  setSelectedRadio(event.target.value);
                  setPtstatus('');
                }}
              />
            </div>
            <div>
              <label className="mr-2">ไม่มีใบสั่งยา</label>
              <input
                type="radio"
                name="patientStatus"
                value="haveNot"
                checked={selectedRadio === 'haveNot'}
                onChange={(event) => {
                  setSelectedRadio(event.target.value);
                  setPtstatus(' AND dbo.ms_patientadmit.DCdatetime is null');
                }}
              />
            </div>
            <div>
              <label className="mr-2">มีใบสั่งยา</label>
              <input
                type="radio"
                name="patientStatus"
                value="have"
                checked={selectedRadio === 'have'}
                onChange={(event) => {
                  const startDate = new Date();
                  const endDate = new Date();

                  setSelectedRadio(event.target.value);
                  endDate.setHours(23, 59, 59);
                  setPtstatus(
                    ` AND dbo.ms_patientadmit.DCdatetime BETWEEN '${startDate
                      .toISOString()
                      .slice(0, 19)
                      .replace('T', ' ')}' AND '${endDate
                      .toISOString()
                      .slice(0, 19)
                      .replace('T', ' ')}'`
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="">
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200 sticky top-0">
                <th className="text-left p-2">Admit Date</th>
                {/* <th className="text-left p-2">Discharged Date</th> */}
                <th className="p-2 text-center">HN</th>
                <th className="p-2 text-center">AN</th>
                <th className="p-2 text-center">ชื่อ - นามสกุล</th>
                <th className="p-2 text-center">จำนวนใบสั่งยา</th>
                <th className="p-2 text-center">หอผู้ป่วย</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((record, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-400 hover:text-white active:bg-blue-700 cursor-pointer"
                  onClick={() => setSelectedWard(ward)}
                >
                  <td className="p-2">
                    {new Date(record.admitteddate).toLocaleDateString()}
                  </td>
                  {/* <td className="p-2">{record.dischargeddate ? new Date(record.dischargeddate).toLocaleDateString() : 'N/A'}</td> */}
                  <td className="p-2 text-center">{record.hn}</td>
                  <td className="p-2 text-center">{record.an}</td>
                  <td className="p-2 text-center">{record.patientname}</td>
                  <td className="p-2 text-center">{record.SumPresc}</td>
                  <td className="p-2 text-center">{record.warddesc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
