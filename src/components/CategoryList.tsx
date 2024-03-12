import { getCategories } from "@/services/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink } from "react-router-dom";

const CategoryList = () => {
  //   const data = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];
  const { data } = useSuspenseQuery({ queryKey: ["categories"], queryFn: getCategories });
  //   console.log(data);

  return (
    <nav>
      <ul className="flex items-center gap-2">
        <li>
          <NavLink to="/all" className="font-semibold [&.active]:font-extrabold">
            All
          </NavLink>
        </li>
        {data &&
          data.map((category: string) => {
            return (
              <li key={category}>
                <NavLink to={`${category}`} className="font-semibold [&.active]:font-extrabold">
                  {category}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default CategoryList;
