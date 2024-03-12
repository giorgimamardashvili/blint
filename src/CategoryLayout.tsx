import { Outlet } from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";

const CategoryLayout = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="global-wrapper px-5 w-full h-[65px] flex">
        <BreadCrumbs />
      </div>
      <div className="global-wrapper flex gap-8">
        <div className="w-[200px] h-[200px]"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default CategoryLayout;
