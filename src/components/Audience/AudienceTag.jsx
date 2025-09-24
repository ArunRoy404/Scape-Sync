import React from 'react';

const AudienceTag = ({ children }) => {
    return (
        <p
            className='text-sm font-semibold text-primary 
            px-3 py-[2px] md:px-5 md:py-[6px] border border-primary rounded-full max-w-max'
        >
            {children}
        </p>
    );
};

export default AudienceTag;