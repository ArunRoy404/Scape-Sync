import React from 'react';
import BannerDecoration from '../Banner/BannerDecoration';

const FooterDecoration = () => {
    return (
        <>
            <BannerDecoration
                image='/Vector/VectorShape.svg'
                className='absolute z-1 -top-40 md:-top-70 -right-14 w-[300px] h-[320px] md:w-[420px] md:h-[450px] opacity-20'
            />
            <BannerDecoration
                image='/Vector/VectorShape.svg'
                className='absolute z-1 rotate-[150deg] transform -bottom-40 md:-bottom-50 right-30 md:right-40 xl:right-60 w-[300px] h-[320px] md:w-[420px] md:h-[450px] opacity-20'
            />
            <BannerDecoration
                image='/Vector/VectorShape.svg'
                className='absolute z-1 rotate-[125deg] transform -bottom-25 md:-bottom-35 -right-50 md:-right-70 w-[300px] h-[320px] md:w-[420px] md:h-[450px] opacity-20'
            />
        </>
    );
};

export default FooterDecoration;