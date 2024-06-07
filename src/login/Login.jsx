import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../img/Background1.png';
import kkhLogo from '../../img/KKHHOSPITAL.jpg';
import CardSwitcher from './SelectRoom';

export default function login() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };

  return (
    <div style={backgroundStyle}>
      <img src={kkhLogo} alt="ตราโรงบาล" className="w-26 h-24 m-8 fixed" />
      <div className="h-screen flex ml-44">
        <CardSwitcher />
      </div>
    </div>
  );
}
