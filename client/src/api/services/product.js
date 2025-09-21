import http from "../../config/http";
export const getProduct = async () => {
  const res = await http.get("/api/products");
  return res.data;
};
