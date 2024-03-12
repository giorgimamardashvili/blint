import { useQuery } from "@tanstack/react-query";
import { getCategories, getProducts, getProductsInCategory } from "./api";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
export function useProducts() {
  return useQuery({
    queryKey: ["products"],

    queryFn: getProducts,
  });
}
export function useProductsInCategory(category: string) {
  return useQuery({
    queryKey: ["productsInCategory", category],
    queryFn: () => getProductsInCategory(category),
  });
}
