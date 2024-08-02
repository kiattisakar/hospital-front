import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import treasury from '../../../img/treasury.png';
import addDose from '../../../img/addDose.png';
import sendDose from '../../../img/sendDose.png';
import page from '../../../img/page.png';
import para from '../../../img/para.png';

import MARsNewLabel from './NurseStation/MARsNewLabel';
import MarsAllLabel from './NurseStation/MarsAllLabel';
import MarsAllLabelSuccess from './NurseStation/MarsAllLabelSuccess';
import A4MARs from './NurseStation/A4MARs';
import FormA4MARs from './NurseStation/FormA4MARs';
import FootNote from './NurseStation/FootNote';
import MarsCate from './NurseStation/MarsCate';
import SettingPrinter from './NurseStation/SettingPrinter';

export default function FrmNurseStation() {
  const [selectedButton, setSelectedButton] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    navigate(selectedButton);
  }, [selectedButton, navigate]);

  return (
    <div className="w-full h-full p-1 text-sm">
      <div className="w-full h-[7%] flex items-center justify-start px-1 space-x-2">
        <ButtonWithMenu
          w={'36'}
          label={'MARsNewLabel'}
          icon={addDose}
          path={'MARsNewLabel'}
          isSelected={selectedButton === 'MARsNewLabel'}
          onClick={() => setSelectedButton('MARsNewLabel')}
        />
        <ButtonWithMenu
          w={'36'}
          label={'MARsAllLabel'}
          icon={sendDose}
          path={'MarsAllLabel'}
          isSelected={selectedButton === 'MarsAllLabel'}
          onClick={() => setSelectedButton('MarsAllLabel')}
        />
        <ButtonWithMenu
          w={'36'}
          label={'MARsAllLabelSuccess'}
          icon={treasury}
          path={'MarsAllLabelSuccess'}
          isSelected={selectedButton === 'MarsAllLabelSuccess'}
          onClick={() => setSelectedButton('MarsAllLabelSuccess')}
        />
        <ButtonWithMenu
          w={'36'}
          label={'A4MARs'}
          icon={page}
          path={'A4MARs'}
          isSelected={selectedButton === 'A4MARs'}
          onClick={() => setSelectedButton('A4MARs')}
        />{' '}
        <ButtonWithMenu
          w={'[200px]'}
          label={'FormA4MARs'}
          icon={para}
          path={'FormA4MARs'}
          isSelected={selectedButton === 'FormA4MARs'}
          onClick={() => setSelectedButton('FormA4MARs')}
        />
        <ButtonWithMenu
          w={'[200px]'}
          label={'FootNote'}
          icon={para}
          path={'FootNote'}
          isSelected={selectedButton === 'FootNote'}
          onClick={() => setSelectedButton('FootNote')}
        />
        <ButtonWithMenu
          w={'[200px]'}
          label={'MARs สำหรับรถเข็น'}
          icon={para}
          path={'MarsCate'}
          isSelected={selectedButton === 'MarsCate'}
          onClick={() => setSelectedButton('MarsCate')}
        />
        <ButtonWithMenu
          w={'[200px]'}
          label={'Setting Printer'}
          icon={para}
          path={'SettingPrinter'}
          isSelected={selectedButton === 'SettingPrinter'}
          onClick={() => setSelectedButton('SettingPrinter')}
        />
      </div>
      <div className="w-full h-[93%] space-x-1 flex">
        <Routes>
          <Route path="MARsNewLabel" element={<MARsNewLabel />} />
          <Route path="MarsAllLabel" element={<MarsAllLabel />} />
          <Route path="MarsAllLabelSuccess" element={<MarsAllLabelSuccess />} />
          <Route path="A4MARs" element={<A4MARs />} />
          <Route path="FormA4MARs" element={<FormA4MARs />} />
          <Route path="FootNote" element={<FootNote />} />
          <Route path="MarsCate" element={<MarsCate />} />
          <Route path="SettingPrinter" element={<SettingPrinter />} />
        </Routes>
      </div>
    </div>
  );
}

const ButtonWithMenu = ({ icon, label, path, isSelected, onClick, w }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`w-${w} h-[90%] text-black font-bold bg-white border border-collapse border-black hover:bg-slate-100 active:bg-slate-300 flex items-center justify-center ${isSelected ? 'bg-green-300' : ''}`}
      onClick={() => {
        if (path) navigate(path);
        onClick();
      }}
    >
      <img src={icon} alt={label} className="w-10 h-10" />
      <span className="text-[16px]">{label}</span>
    </button>
  );
};
