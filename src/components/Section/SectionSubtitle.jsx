import React from 'react';

const SectionSubtitle = ({ children }) => {
    return (
        <p className='text-sm font-normal text-gray-600 max-w-[550px]'>
            {children}
        </p>
    );
};

export default SectionSubtitle;