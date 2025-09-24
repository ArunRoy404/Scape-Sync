import React from 'react';
import BannerDecoration from '../Banner/BannerDecoration';

const SectionTitle = ({ children }) => {
    return (
        <div className='relative max-w-max'>
            {/* title  */}
            <h1 className='z-10 text-3xl md:text-5xl font-bold text-gray-800 '>
                {children}
            </h1>

            {/* mark image  */}
            <BannerDecoration
                image='/Vector/VectorMarkSmall.png'
                className='absolute -z-10 -bottom-5 right-0 w-[150px] lg:w-[220px] xl:w-[220px] h-10'
            />
        </div>
    );
};

export default SectionTitle;