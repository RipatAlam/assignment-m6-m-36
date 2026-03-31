import { Check } from "lucide-react";
import React from "react";

const FeaturedData = ({ feature }) => {
  return (
    <div>
      <p className="text-zinc-500 flex items-center gap-2">
        <Check className="w-5 h-5 text-green-600"></Check>
        {feature}
      </p>
    </div>
  );
};

export default FeaturedData;
