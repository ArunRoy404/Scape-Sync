import Image from 'next/image';
import React from 'react';

const FeatureCard = ({ feature, index }) => {
    return (
        <div
            className={`${index !== 3 ? 'border-r' : 'border-r lg:border-none'}
                    border-gray-200 pr-9`}
        >
            {/* image  */}
            <div className='p-3 bg-secondary rounded-lg max-w-max'>
                <Image
                    src={feature.icon}
                    width={24}
                    height={24}
                    alt={feature.title}
                />
            </div>

            {/* title */}
            <h2 className='text-gray-800 font-bold text-lg mt-3 md:mt-5'>
                {feature.title}
            </h2>

            {/* description  */}
            <p className='text-gray-600 text-sm font-normal md:mt-1'>
                {feature.description}
            </p>
        </div>
    );
};

export default FeatureCard;