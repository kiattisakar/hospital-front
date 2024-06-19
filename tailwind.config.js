/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sarabun', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        '3xl': '1620px', // ตัวอย่างการเพิ่ม breakpoint สำหรับหน้าจอขนาดใหญ่กว่า 2xl
        '4xl': '1820px', // ตัวอย่างการเพิ่ม breakpoint สำหรับหน้าจอขนาดใหญ่กว่า 2xl
      },
    },
  },
  variants: {},
  plugins: [],
};
