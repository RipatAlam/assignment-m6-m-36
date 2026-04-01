import React from "react";

const WorkFlow = () => {
  return (
    <div className="bg-gradient-to-r from-[#652DF7] to-[#9016f9] text-white py-20 text-center space-y-5">
      <div className="space-y-5">
        <h1 className="text-5xl font-bold">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-zinc-300 text-lg">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trial today.
        </p>
      </div>

      <div className="flex justify-center gap-5 mt-10">
        <button className="bg-white text-[#652DF7] py-3 px-5 rounded-full font-semibold">
          Explore Products
        </button>
        <button className="border border-white text-white py-3 px-5 rounded-full font-semibold">
          View Pricing
        </button>
      </div>
      <p className="text-zinc-300 text-sm">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default WorkFlow;
