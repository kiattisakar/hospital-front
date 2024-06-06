import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <div className="font-sans w-2/4 h-screen p-40 grid">
        <h1 className=" text-4xl justify-center h-14">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-400 h-10 p-2"
        />
        <input
          type="text"
          placeholder="Password"
          className="border border-gray-400 h-10 p-2"
        />
        <select>
          <option value="1">ห้อง 1</option>
          <option value="2">ห้อง 2</option>
        </select>
        <button
          type="button"
          className="bg-green-700 w-3/4 h-12 rounded cursor-pointer text-white font-bold hover:bg-green-500"
        >
          Login
        </button>
      </div>
    </div>
  );
}
