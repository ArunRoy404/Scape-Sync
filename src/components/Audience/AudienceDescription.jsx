import React from 'react';

const AudienceDescription = ({children}) => {
    return (
        <p className='text-gray-600 font-normal text-lg max-w-[524px]'>
            {children}
        </p>
    );
};

export default AudienceDescription;