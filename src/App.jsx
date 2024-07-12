
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FrmMainIpd from './components/FrmMainIpd';
import Login from './login/Login';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {!isAuthenticated ? (
          <Route path="/*" element={<Navigate to="/login" />} />
        ) : (
          <Route path="/*" element={<FrmMainIpd user={user} />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FrmMainIpd from './components/FrmMainIpd';
// import Login from './login/Login';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/*" element={<FrmMainIpd />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
