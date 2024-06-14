import React from 'react';
import './index.css';
import FrmDataTebleIPD from './components/FrmDataTableIpd';
import FrmMainIpd from './components/FrmMainIpd';
import Login from './login/Login';
function App() {
  return (
    <div className="h-screen">
      <FrmMainIpd />
      {/* <Login /> */}
    </div>
  );
}

export default App;
