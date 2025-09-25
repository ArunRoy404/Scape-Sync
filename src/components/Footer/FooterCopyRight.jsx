import React from 'react';

const FooterCopyRight = ({ footerData }) => {
    return (
        <div className='opacity-25 border-t border-[#D7DAE0] py-3'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <p className='text-[rgba(229,229,229,1)] text-sm font-normal'>
                    {footerData?.copyright}
                </p>
            </div>
        </div>
    );
};

export default FooterCopyRight;