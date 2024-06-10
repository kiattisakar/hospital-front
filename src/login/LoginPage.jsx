import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { Username: username, Password: password });
      setMessage('เข้าสู่ระบบสำเร็จ');
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setMessage('รหัสผ่านหรือชื่อไม่ถึก');
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-full bg-center">
      <div className="bg-white bg-opacity-90 p-10 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">เข้าสู่ระบบ</h2>
        {message && <div className="mb-4 text-center text-red-500">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="username">
              รหัส
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
         

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
