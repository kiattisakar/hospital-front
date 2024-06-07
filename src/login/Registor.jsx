import React from 'react';

export default function Registor() {
  return (
    <div className="flex items-center justify-center  min-h-screen pt-24 bg-center ">
      <div className="bg-white bg-opacity-90 p-10 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-5 mt-20 text-center">ลงทะเบียน</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              ชื่อ
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="lastname"
            >
              สกุล
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="position"
            >
              ตำแหน่ง
            </label>
            <input
              type="text"
              id="position"
              name="position"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="department"
            >
              แผนก
            </label>
            <input
              type="text"
              id="department"
              name="department"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="room">
              ห้อง
            </label>
            <select
              id="room"
              name="room"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">เลือกห้อง</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="department"
            >
              แผนก
            </label>
            <input
              type="text"
              id="department"
              name="department"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="profile-picture"
            >
              รูปภาพ
            </label>
            <input
              type="file"
              id="profile-picture"
              name="profile-picture"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-32 bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              เข้าสู่ระบบ
            </button>
            <button className="w-32 bg-red-500 text-white py-2 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
