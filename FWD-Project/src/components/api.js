import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000", // Your backend base URL
//   withCredentials: true, // Send cookies if required
// });

const api = axios.create({
  baseURL:
  "https://0002-2409-40f2-4e-c312-6994-d13f-6a62-adce.ngrok-free.app", // Your backend base URL
  withCredentials: true, // Send cookies if required
});

export default api;
