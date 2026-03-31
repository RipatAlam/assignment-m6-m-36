import React from "react";
import BannerImage from "../../assets/banner.png";
import Group from "../../assets/Group 5.png";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 bg-linear-to-r from-[#652DF7] to-[#9016f9] bg-clip-text text-transparent font-bold text-sm px-5 py-2 rounded-full">
            <img src={Group} alt="" /> New: AI-Powered Tools Available
          </div>

          <h1 className="text-7xl font-[800] leading-tight tracking-tighter">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn">Explore Products</button>
            <button className="watch flex items-center gap-2">
              <Play className="w- h-4 text-purple-600"></Play> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
