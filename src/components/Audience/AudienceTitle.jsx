import React from 'react';

const AudienceTitle = ({children}) => {
    return (
        <h2 className='mt-3 mb-2 md:mt-[18px] md:mb-4 text-gray-900 font-bold text-xl md:text-2xl max-w-[380px]'>
            {children}
        </h2>
    );
};

export default AudienceTitle;