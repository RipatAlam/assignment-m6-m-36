import React from 'react';
import CreateAccountImage from "../../assets/user.png";
import ChooseProductsImage from "../../assets/package.png";
import StartCreatingImage from "../../assets/rocket.png"

const Account = () => {
    return (
        <div className="bg-zinc-100 py-3">
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold mb-4">Get Started in 3 Steps</h1>
                <p className="text-zinc-500 text-[12px]">Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-10 w-[80%] mx-auto">
                <div className="relative border border-zinc-200 p-12 py-20 rounded-lg bg-zinc-50 space-y-4">
                    <button className="absolute top-3 right-3 bg-linear-to-r from-[#652DF7] to-[#9016f9] text-white py-1 px-2 rounded-full">01</button>
                    <div className="mx-auto bg-purple-100 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                        <img className="w-full h-full object-cover p-2" src={CreateAccountImage} alt="" />
                    </div>
                    <h2 className="text-2xl font-[700]">Create Account</h2>
                    <p className="text-zinc-500 text-[14px] font-[400]">Sign up for free in seconds. No credit card <br /> required to get started.</p>
                </div>
                <div className="relative border border-zinc-200 p-12 py-20 rounded-lg bg-zinc-50 space-y-4">
                    <button className="absolute top-3 right-3 bg-linear-to-r from-[#652DF7] to-[#9016f9] text-white py-1 px-2 rounded-full">02</button>
                    <div className="mx-auto bg-purple-100 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                        <img className="w-full h-full object-cover p-2" src={ChooseProductsImage} alt="" />
                    </div>
                    <h2 className="text-2xl font-[700]">Choose Products</h2>
                    <p className="text-zinc-500 text-[14px] font-[400]">Browse our catalog and select the tools <br /> that fit your needs.</p>
                </div>
                <div className="relative border border-zinc-200 p-12 py-20 rounded-lg bg-zinc-50 space-y-4">
                    <button className="absolute top-3 right-3 bg-linear-to-r from-[#652DF7] to-[#9016f9] text-white py-1 px-2 rounded-full">03</button>
                    <div className="mx-auto bg-purple-100 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                        <img className="w-full h-full object-cover p-2" src={StartCreatingImage} alt="" />
                    </div>
                    <h2 className="text-2xl font-[700]">Start Creating</h2>
                    <p className="text-zinc-500 text-[14px] font-[400]">Download and start using your premium <br /> tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Account;