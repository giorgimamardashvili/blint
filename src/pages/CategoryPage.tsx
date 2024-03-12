import { ProductGridView } from "@/components/ProductGridView";
import { getProducts, getProductsInCategory } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { b } from "node_modules/@tanstack/query-core/build/modern/queryClient-Xp52MRx8";
import React from "react";
import { Outlet, useParams } from "react-router-dom";

const productsQuery = {
  queryKey: ["products"],
  queryFn: getProducts,
};
const productsInCategoryQuery = (category: any) => ({
  queryKey: ["productsInCategory", category],
  queryFn: () => getProductsInCategory(category),
});

export const loader =
  (queryClient: b) =>
  async ({ params }: { params: any }) => {
    console.log(params);

    const query = params.categoryId == "all" ? productsQuery : productsInCategoryQuery(params.categoryId);
    // ⬇️ return data or fetch it
    const data = await queryClient.ensureQueryData(query);
    console.log(data);

    return data;
  };

const CategoryPage = () => {
  const params = useParams();
  const { data } = useQuery(params.categoryId == "all" ? productsQuery : productsInCategoryQuery(params.categoryId));
  console.log(params, data);

  return params.productId ? (
    <Outlet />
  ) : (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-wrap gap-3 ">
        {data?.map((product: any) => {
          return <ProductGridView key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
