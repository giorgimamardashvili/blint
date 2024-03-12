import { Heart, MessageCircle, ShoppingBag, ShoppingBasket, User } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import CategoryList from "./CategoryList";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="global-wrapper flex flex-col px-5">
        <div className="flex justify-between items-center py-5">
          <Link to="/" className="flex gap-1 items-center">
            <ShoppingBag size={48} />
            <p className="text-3xl font-bold">Blint</p>
          </Link>
          <div className="flex gap-1">
            <Input type="search" placeholder="Search..." className="max-w-md w-full" />
            <Button variant="default">Search</Button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <User /> <p>Profile</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle /> <p>Message</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart /> <p>Orders</p>
            </div>
            <div className="flex flex-col items-center">
              <ShoppingBasket />
              <p>My cart</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-black" />
      <div className="global-wrapper py-4 px-5 ">
        <CategoryList />
      </div>
      <hr className="border-black" />
    </header>
  );
};

export default Header;
