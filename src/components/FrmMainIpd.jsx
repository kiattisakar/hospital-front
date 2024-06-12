import React from 'react';
import IpdHeader from '../header/IpdHeader';
import FrmDataTebleIPD from './FrmDataTableIpd';
import Footer from '../header/Footer';

export default function FrmMainIpd() {
  return (
    <div className="font-sans h-screen min-h-screen">
      <FrmDataTebleIPD />
    </div>
  );
}
