import React from 'react';

const BannerSubtitle = ({ children }) => {

    if (!children) return <p className='text-red-400 text-2xl font-bold'>No Subtitle Found</p>

    return (
        <p className='text-base font-normal leading-6 md:max-w-[495px] text-gray-600'>
            {children}
        </p>
    );
};

export default BannerSubtitle;