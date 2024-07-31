import React from 'react';

export default function Dispense() {
  return (
    <div className="w-full h-full bg-red-200">
      <div className="w-[100%] h-[5%] bg-blue-100">
        {/* <button>เบิกจ่าย</button> */}
      </div>
      <div className="w-[100%] h-[15%] bg-blue-200">
        <div className="w-[100%] h-[100%] bg-red-100 grid grid-rows-2 grid-cols-7 ">
          <div className="w-[100%] h-[100%] row-start-1 row-span-1 col-start-1 col-span-3 bg-green-100 flex justify-end items-center space-x-1">
            <span className="text-right w-[40%]">เลขที่ใบขอเบิก : </span>
            <input
              type="text"
              className="w-[40%] h-[60%] border border-gray-400"
            />
          </div>
          <div className="row-start-2 row-span-1 col-start-1 col-span-3 bg-green-200  flex justify-end items-center space-x-1">
            <span className="text-right w-[40%]">หน่วยงานที่ขอเบิก : </span>
            <select
              className="w-[40%] h-[60%] border border-gray-400 "
              name="ward"
              id="1"
            >
              <option value="1">ห้อง IPD</option>
              <option value="2">ห้อง เตรียมยาอาคารเภสัช</option>
              <option value="3">ห้องยา OPD อาคารรังสี</option>
              <option value="4">ห้องยา ER</option>
              <option value="5">ห้องยา D/C</option>
            </select>
          </div>
          <div className="row-start-1 row-span-1 col-start-4 col-span-2 bg-green-300"></div>
          <div className="row-start-2 row-span-1 col-start-4 col-span-2 bg-green-400"></div>
        </div>
      </div>
      <div className="w-[100%] h-[80%] bg-blue-300">
        <div></div>
      </div>
    </div>
  );
}

// import React from 'react';

// function MyButton({ onClick, children }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-blue-200 hover:bg-blue-700 text-black font-bold py-3 px-4 rounded "
//     >
//       {children}
//     </button>
//   );
// }
// function BigButton({ onClick, children }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-red-400 hover:bg-blue-300 text-black font-bold py-4 px-7 rounded"
//     >
//       {children}
//     </button>
//   );
// }
// function Big2Button({ onClick, children }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-green-500 hover:bg-blue-300 text-black font-bold py-4 px-7 rounded"
//     >
//       {children}
//     </button>
//   );
// }

// export default function Dispense() {
//   const handleClick1 = () => {
//     alert('Button clicked!');
//   };
//   const handleClick2 = () => {
//     alert('Click 2');
//   };
//   const handleClick3 = () => {
//     alert('Click 3 !!');
//   };
//   const handleClick4 = () => {
//     alert('Click 4 !!');
//   };

//   return (
//     <div className="App h-full w-full">
//       <div className="space-x-1">
//         <MyButton onClick={handleClick1}>เบิกจ่าย</MyButton>
//         <MyButton onClick={handleClick2}>เบิกจ่ายแล้ว</MyButton>
//       </div>
//       <div className="h-full w-full grid grid-rows-7 grid-cols-4 space-y-2 ">
//         <div className="h-full w-full grid grid-rows-3 grid-cols-2 row-start-1 row-span-1 col-start-1 col-span-2 ">
//           <div className="row-start-2 row-span-1 col-start-1 col-span-2 flex justify-start items-center space-x-3">
//             <label className="w-[20%] text-right font-bold">
//               เลขที่ใบขอเบิก :{' '}
//             </label>
//             <input
//               text="text"
//               className=" border border-collapse w-[20%] h-[80%] text-center border-gray-400"
//             />
//           </div>
//           <div className="h-full w-full grid grid-rows-1 grid-cols-3 row-start-1 row-span-2 col-start-2 col-span-1  justify-center  items-center">
//             <div className="row-start-1 row-span-1 col-start-1 col-span-1 flex justify-center item-center ">
//               <BigButton onClick={handleClick3}>เลือกยา</BigButton>
//             </div>
//             <div className=" row-start-1 row-span-1 col-start-2 col-span-1 flex justify-center  item-center ">
//               <Big2Button onClick={handleClick4}>บันทึก</Big2Button>
//             </div>
//             <label className=" text-right text-red-500 font-bold text-center">
//               จำนวน {'0'} รายการ
//             </label>
//           </div>
//           <div className="row-start-3 row-span-1 col-start-1 col-span-2  flex  justify-start  items-center space-x-3">
//             <label className="w-[20%] text-right font-bold">
//               หน่วยงานที่ขอเบิก :{' '}
//             </label>
//             <select
//               className="w-[20%] h-[80%] border border-collapse border-gray-40 "
//               name="ward"
//               id="1"
//             >
//               <option value="1">ห้อง IPD</option>
//               <option value="2">ห้อง เตรียมยาอาคารเภสัช</option>
//               <option value="3">ห้องยา OPD อาคารรังสี</option>
//               <option value="4">ห้องยา ER</option>
//               <option value="5">ห้องยา D/C</option>
//             </select>
//             <label className=" text-right font-bold">หอผู้ป่วย : </label>
//             <select
//               className="w-[30%] h-[80%] border border-collapse border-gray-40 "
//               name="ward"
//               id="1"
//             >
//               <option value="1">ว่าง1</option>
//               <option value="2">ว่าง2</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
