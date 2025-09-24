import React from 'react';

const AudienceTitle = ({children}) => {
    return (
        <h2 className='mt-[18px] mb-4 text-gray-900 font-bold text-2xl max-w-[380px]'>
            {children}
        </h2>
    );
};

export default AudienceTitle;