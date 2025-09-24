import React from 'react';
import BannerDecoration from './BannerDecoration';

const BannerTitle = ({ children }) => {

    if(!children) return <p className='text-red-400 text-2xl font-bold'>No Title Found</p>

    return (
        <div className='relative max-w-max'>
            <h1 className='text-4xl lg:text-[60px] xl:text-[84px] xl:leading-[92px] font-bold text-gray-800'>
                {children}
            </h1>


            {/* plant image  */}
            <BannerDecoration
                image='/Vector/VectorPlant.png'
                className='absolute -z-10 right-[50%] translate-x-[50%] -top-[60px] w-[100px] lg:w-[130px] h-[134px]'
            />

            {/* mark image  */}
            <BannerDecoration
                image='/Vector/VectorMark.png'
                className='absolute -z-10 -bottom-5 right-0 w-[200px] lg:w-[300px] xl:w-[440px] h-10'
            />
        </div>
    );
};

export default BannerTitle;