import React from 'react';
import FrmDataTebleIPD from './FrmDataTableIpd';
import FrmDataTable2 from './FrmDataTable2';
import Screenning from './Screenning';
import IpdHeader from '../header/IpdHeader';
import Footer from '../header/Footer';
import FrmProfile from './Profile/FrmProfile';
import Test from './Profile/Test';
export default function FrmMainIpd() {
  return (
    //xl:text-[9px] 2xl: 3xl:text-[16px] 4xl:text-[17px]
    <div className="font-sans flex flex-col h-screen w-screen text-[12px] ">
      <header>
        <IpdHeader />
      </header>
      <main className="flex-grow flex flex-col">
        <FrmDataTebleIPD />
        {/* <FrmDataTable2 /> */}
        {/* <FrmProfile /> */}
        {/* <Test /> */}
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
