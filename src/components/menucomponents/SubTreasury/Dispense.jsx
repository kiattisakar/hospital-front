import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import chse from '../../../../img/icon4.png';
import SaveDose from './Dispense/SaveDose';
import ChooseDose from './Dispense/ChooseDose';

export default function Dispense() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState('choosedose');

  useEffect(() => {
    navigate(selectedButton);
  }, [selectedButton, navigate]);

  return (
    <div className="w-full h-full">
      <div className="w-[100%] h-[7%] flex justify-start items-center space-x-1">
        <ButtonWithClick
          label={'เบิกจ่าย'}
          icon={chse}
          path={'choosedose'}
          isSelected={selectedButton === 'choosedose'}
          onClick={() => setSelectedButton('choosedose')}
        />
        <ButtonWithClick
          label={'เบิกจ่ายแล้ว'}
          icon={chse}
          path={'savedose'}
          isSelected={selectedButton === 'savedose'}
          onClick={() => setSelectedButton('savedose')}
        />
      </div>
      <div className="w-[100%] h-[93%] bg-white">
        <Routes>
          <Route path="savedose" element={<SaveDose />} />
          <Route path="*" element={<ChooseDose />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

const ButtonWithClick = ({ icon, label, path, isSelected, onClick }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`w-[10%] h-[90%] text-black font-bold space-x-2 bg-white border border-collapse border-black hover:bg-slate-100 active:bg-slate-300 flex items-center justify-center ${isSelected ? 'bg-green-300' : ''}`}
      onClick={() => {
        if (path) navigate(path);
        onClick();
      }}
    >
      <img src={icon} alt={label} className="w-7 h-7" />
      <div className="h-full flex flex-col justify-center font-bold items-center">
        <span>{label}</span>
      </div>
    </button>
  );
};
