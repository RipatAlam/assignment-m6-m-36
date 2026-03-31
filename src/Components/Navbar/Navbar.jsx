import React, { useState } from "react";
import ShoppingCart from "../../assets/shopping-cart.png";
import { Menu, X } from "lucide-react";
import Link from "./Link";

const NavigationData =[
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "Products",
    "path": "/products"
  },
  {
    "id": 3,
    "name": "Pricing",
    "path": "/pricing"
  },
  {
    "id": 4,
    "name": "Testimonials",
    "path": "/testimonials"
  },
  {
    "id": 5,
    "name": "FAQ",
    "path": "/faq"
  }
]

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const links = NavigationData.map((item) => <Link key={item.id} item={item}></Link>)

  return (
    <div className="flex items-center justify-between mx-auto px-40 py-5 border border-zinc-100">
      <div className="navbar-start">
        <div className="flex items-center gap-3" onClick={() => setOpen(!open)}>

            {
            open ?
                <X className="md:hidden"></X> :
                <Menu className="md:hidden"></Menu>
            }
            <ul className={`md:hidden absolute p-5 rounded-lg ${open ? "top-12" : "-top-40"} transition-all duration-1000 font-bold text-sm`}>
                {
                    links
                }
            </ul>

          <h1 className="digi">DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="md:flex hidden justify-center gap-8 px-1 text-sm font-[600]">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        <div className="flex items-center gap-5">
            <img src={ShoppingCart} alt="" />
            <button className="text-sm font-[600]">Login</button>
        </div>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
