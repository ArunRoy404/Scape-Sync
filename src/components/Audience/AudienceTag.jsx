import React from 'react';

const AudienceTag = ({ children }) => {
    return (
        <p
            className='text-sm font-semibold text-primary 
            px-5 py-[6px] border border-primary rounded-full max-w-max'
        >
            {children}
        </p>
    );
};

export default AudienceTag;