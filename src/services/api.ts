import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getCategories = async () => {
  return (await axiosInstance.get("products/categories")).data;
};

export const getProducts = async () => {
  return (await axiosInstance.get("products")).data;
};
export const getProductsInCategory = async (category: string) => {
  return (await axiosInstance.get(`products/category/${category}`)).data;
};
export const getProduct = async (id: any) => {
  return (await axiosInstance.get(`product/${id}`)).data;
};
