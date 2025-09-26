import React from 'react';

const PageHeading = ({ title, subtitle }) => {
    return (
        <div className='space-y-4 mt-6 mb-10'>
            <h1
                className='text-[rgba(33,43,54,1)] text-3xl font-bold'
            >
                {title}
            </h1>
            <p
                className='text-[rgba(99,115,129,1)] text-base font-normal'
            >
                {subtitle}
            </p>
        </div>
    );
};

export default PageHeading;