// src/component/FrmMainlpd.jsx
import React from 'react';
import FrmDataTebleIPD from './FrmDataTableIpd';
import FrmDataTable2 from './FrmDataTable2';
import Screenning from './Screenning';
import IpdHeader from '../header/IpdHeader';
import Footer from '../header/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function FrmMainIpd() {
  return (
    <div className=" font-sans flex flex-col h-screen w-screen text-[12px]">
      <header className="h-[3%]">
        <IpdHeader />
      </header>
      <main className=" flex bg-custom-or w-full h-[92%]">
        <Routes>
          <Route path="/mainIPD" element={<FrmProfile />} />
          <Route path="/subtreasury/*" element={<FrmSubTreasury />} />
          <Route path="/screening" element={<Screenning />} />
        </Routes>
      </main>

      <div className="h-[5%] bg-blue-100 py-4 text-xs w-full relative  flex justify-between items-center bottom-0 left-0 border-y-2 border-white-300">
        <div className="container mx-auto  flex justify-between items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

import FrmProfile from './Profile/FrmProfile';
import FrmSubTreasury from './menucomponents/FrmSubTreasury';
