import React from 'react';

export default function DataTable() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full overflow-auto">
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="sticky top-0 h-5">
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[120px]">
                สถานะ
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[30px]">
                <input type="checkbox" />
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[60px]">
                group
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[30px]">
                L
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[30px]">
                M
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[30px]">
                V
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[30px]">
                C
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[30px]">
                T
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[120px]">
                ใบอนุมัติ
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[120px]">
                DUE Online
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[30px]">
                MRC
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[30px]">
                Type
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[250px]">
                ชื่อยา
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[20px]"></th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[70px]">
                วิธีคำนวณ
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[60px]">
                คำนวณ
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                จำนวนที่ใช้
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                หน่วย
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[50px]">
                วิธีใช้
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                ความถี่
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                เวลา
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[70px]">
                จำนวนจ่าย
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                หน่วยขาย
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                Firstdose
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[150px]">
                วันที่เริ่ม
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                วันสุดท้ายที่หยุดยา
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                จำนวนวัน
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                ราคาต่อหน่วย
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                ราคารวม
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[300px]">
                วิธีใช้ยา
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                สถานะหยุดยา
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[100px]">
                imecount
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                ผู้สั่ง
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                varymealtime
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                voiddatetime
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                วันที่กิน
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                statusevent
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                tmtcode
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                pricetype
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                dediluentcode
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                didluentstatus
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                displaycolour
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                varymealstatus
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                AppUpto
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                oddatetime
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[80px]">
                วันเว้นวัน
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                freetext3
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[90px]">
                paytype
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                firstdosestatus
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[280px]">
                ordercreatedatetime
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[150px]">
                firsttimecount
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[150px]">
                DIDcode
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[150px]">
                continuestatus
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[150px]">
                holddatetime
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[150px]">
                doctorcode
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[180px]">
                doctorname
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[90px]">
                สถานะเวลาหยุด
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[70px]">
                เวลาเริ่ม
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[70px]">
                เวลาหยุดยา
              </th>
              <th className="p-2 text-center border-collapse border border-gray-200 min-w-[50px]">
                วัน
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
