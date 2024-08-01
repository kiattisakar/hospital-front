import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import cart1 from '../../../../../img/cart1.png';
import cart2 from '../../../../../img/cart2.png';
import DoseIntoCart from './DoseIntoCart';
import StateDoseIntoCart from './StateDoseIntoCart';
export default function MadTranfer() {
  const [selectedButton, setSelectedButton] = useState('doseintocart');
  const navigate = useNavigate();
  useEffect(() => {
    navigate(selectedButton);
  }, [selectedButton, navigate]);

  return (
    <div className="w-full h-full ">
      <div className="w-[100%] h-[8%] flex space-x-1">
        <ButtonWithMenu
          w={'[200px]'}
          label={'บรรจุยาเข้ารถเข็น'}
          icon={cart1}
          path={'doseintocart'}
          isSelected={selectedButton === 'doseintocart'}
          onClick={() => setSelectedButton('doseintocart')}
        />
        <ButtonWithMenu
          w={'[200px]'}
          label={'สถานะบรรจุยาเข้ารถเข็น'}
          icon={cart2}
          path={'statedoseintocart'}
          isSelected={selectedButton === 'statedoseintocart'}
          onClick={() => setSelectedButton('statedoseintocart')}
        />
      </div>
      <div className="w-[100%] h-[92%] ">
        <Routes>
          <Route path="doseintocart" element={<DoseIntoCart />} />
          <Route path="statedoseintocart" element={<StateDoseIntoCart />} />
        </Routes>
      </div>
    </div>
  );
}

const ButtonWithMenu = ({ icon, label, path, isSelected, onClick, w }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`w-${w} h-[90%] text-black font-bold space-x-1 bg-white border border-collapse border-black hover:bg-slate-100 active:bg-slate-300 flex items-center justify-center ${isSelected ? 'bg-blue-400' : ''}`}
      onClick={() => {
        if (path) navigate(path);
        onClick();
      }}
    >
      <img src={icon} alt={label} className="w-7 h-7" />
      <span className="text-[14px]">{label}</span>
    </button>
  );
};
