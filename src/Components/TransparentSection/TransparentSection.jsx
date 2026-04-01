import React from 'react';
import simpleData from "../../../public/Transparent.json";
import TransparentCart from './TransparentCart';

const TransparentSection = () => {
    return (
        <div className='py-20'>
           <div className='text-center w-[80%] mx-auto'>
             <h1 className='text-5xl font-[800] mb-5'>Simple, Transparent Pricing</h1>
            <p className='text-[16px] font-[400] text-zinc-500 mb-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

           </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-[80%] mx-auto'>
                {
                    simpleData.map((data, index) => <TransparentCart key={index} data={data}></TransparentCart>)
                }
            </div>
        </div>
    );
};

export default TransparentSection;