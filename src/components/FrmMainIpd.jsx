import React from 'react';
import FrmDataTebleIPD from './FrmDataTableIpd';
import FrmDataTable2 from './FrmDataTable2';
import Screenning from './Screenning';
import IpdHeader from '../header/IpdHeader';
import Footer from '../header/Footer';
import FrmProfile from './Profile/FrmProfile';
export default function FrmMainIpd() {
  return (
    <div className="font-sans flex flex-col h-[100%]">
      <header>
        <IpdHeader />
      </header>
      <main className="flex-grow flex flex-col  ">
        {/* <FrmDataTebleIPD /> */}
        {/* <FrmDataTable2 /> */}
        <FrmProfile />
        {/* <Screenning /> */}
      </main>

      <footer className="bg-gray-500 text-white py-4 text-xs w-full relative bottom-0 left-0 border-y-2 border-white-300">
        <div className="container mx-auto ">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
