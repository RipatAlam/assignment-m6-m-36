import { Check } from 'lucide-react';
import React from 'react';

const TransParentFeature = ({feature}) => {
    console.log(feature);
    return (
        <div className='hover:text-white'>
            <p className='text-zinc-400 flex items-center gap-2 text-sm font-[500] hover:text-white'><Check className='w-5 h-5 text-green-600 hover:text-white'></Check>{feature}</p>
        </div>
    );
};

export default TransParentFeature;