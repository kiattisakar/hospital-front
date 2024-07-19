// src/component/FrmMainlpd.jsx
import React from 'react';
import FrmDataTebleIPD from './FrmDataTableIpd';
import FrmDataTable2 from './FrmDataTable2';
import Screenning from './Screenning';
import IpdHeader from '../header/IpdHeader';
import Footer from '../header/Footer';
import { Route, Routes } from 'react-router-dom';

export default function FrmMainIpd() {
  return (
    <div className=" font-sans flex flex-col h-screen w-screen text-[12px]">
      <header className="h-[3%]">
        <IpdHeader />
      </header>
      <main className=" flex bg-custom-or w-full h-[90%]">
        <Routes>
          <Route path="/mainIPD" element={<FrmProfile />} />
          <Route path="/screening" element={<Screenning />} />
        </Routes>
      </main>

      <div className="h-[7%] bg-blue-100 py-4 text-xs w-full relative bottom-0 left-0 border-y-2 border-white-300">
        <div className="container mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

import FrmProfile from './Profile/FrmProfile';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FrmMainIpd from './components/FrmMainIpd';
// import Login from './login/Login';

// function App() {
//   return (
//     <Router>
//       <Routes>
// <Route path="/" element={<Screenning />} />
//         {/* เช่น */}
//         <Route path="/screen" element={<FrmMainIpd />} />
//         {/* หรือตามที่คุณต้องการให้มันแสดงผล */}
//         <Route path="/login" element={<Login />} />
//         {/* และ Route อื่น ๆ ตามที่ต้องการ */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
