import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JkYzlkMTFjMzc1NGNmOWE0MGI3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzY4NTc2MywiZXhwIjoxNjU3OTQ0OTYzfQ.qJg_V_TArXQIVWcx-rDmZv9D6InYN9f2G6ma7pNpjIs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
