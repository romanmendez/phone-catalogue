import axios from "axios";

const server = axios.create({ baseURL: "http://localhost:3000" });

export const phones = async () => {
  const res = await server.get("/phones");
  return res.data;
};
