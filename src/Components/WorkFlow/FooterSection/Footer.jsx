
import React from "react";
import { FaFacebook, FaTwitch, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div className="grid grid-cols-1 md:grid-cols-5 mx-auto w-[80%] gap-10 py-20">
        <div className="">
          <h1 className="text-4xl font-bold mb-5">DigiTools</h1>
          <p className="text-zinc-400 text-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl">Products</h2>
          <ul className="text-zinc-400 text-sm space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl">Company</h2>
          <ul className="text-zinc-400 text-sm space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl">Resources</h2>
          <ul className="text-zinc-400 text-sm space-y-2">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl">Social Links</h2>
          <div className="flex gap-4 text-xl">
            <a href=""> <FaYoutube></FaYoutube> </a>
            <a href=""> <FaFacebook></FaFacebook> </a>
            <a href=""> <FaTwitterSquare className="rounded-full"></FaTwitterSquare> </a>
          </div>
        </div>
      </div>
        <hr className="w-[80%] mx-auto opacity-25" />
        <div className="flex justify-between w-[80%] mx-auto py-5">
            <p className="text-zinc-400 text-sm">© 2026 Digitools. All rights reserved.</p>
            <div>
                <a className="text-zinc-400 text-sm mr-5" href="">Privacy Policy</a>
                <a className="text-zinc-400 text-sm" href="">Terms & Conditions</a>
                <a className="text-zinc-400 text-sm ml-5" href="">Cookies</a>
            </div>
        </div>
    </div>
  );
};

export default Footer;
