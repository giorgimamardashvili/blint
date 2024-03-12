import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Link, useParams } from "react-router-dom";
export function ProductGridView({ product }: { product: any }) {
  const params = useParams();
  console.log(product.rating.rate);

  return (
    <Link to={`/${params.categoryId}/${product.id}`} className="w-[296px] h-[406px] border-1 border-black bg-white rounded-[8px] shadow-sm cursor-pointer">
      <div className="w-full px-8 py-4 h-[262px] border-b-2 border-gray-200">
        <img src={product.image} alt={product.title} className=" w-full object-contain h-full" />
      </div>
      <div className="flex flex-col justify-between h-[144px] p-5">
        <p>${product.price}</p>
        <div className="flex gap-3">
          <Rating value={product.rating.rate} style={{ maxWidth: 80 }} readOnly />
          <p>{product.rating.rate}</p>
        </div>
        <p>{product.title}</p>
      </div>
    </Link>
  );
}
