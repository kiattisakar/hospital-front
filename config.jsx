//config.jsx
// export const API_URL = 'http://localhost:3000/api';

export const API_URL = import.meta.env.PROD
  ? 'http://192.168.222.206:3000/api' // ใน container หรือ docker-compose
  : 'http://localhost:3000/api'; // dev mode ในเครื่อง
  
export const URL = 'http://localhost:3000/';

// export const API_URL = 'http://10.1.10.135:3000/api';
