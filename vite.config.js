import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

//docker
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0', // เพื่อให้ฟังที่ทุก IP
//     port: 5173, // ใช้พอร์ตเดียวกับที่คุณแมพ
//   },
// });
