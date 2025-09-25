import Image from 'next/image';
import React from 'react';
import FooterButtons from './FooterButtons';

const FooterContent = ({footerData}) => {
    return (
        <div className='py-24 space-y-4 lg:flex items-center justify-between'>

            {/* logo  */}
            <div className='relative w-52 h-20'>
                <Image
                    src={footerData.logo}
                    alt='ScapeSync'
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            {/* description  */}
            <div className=' lg:max-w-[300px] xl:max-w-[404px] text-[rgba(207,216,214)] text-base font-medium leading-6'>
                {footerData.description}
            </div>

            {/* buttons  */}
            <FooterButtons/>
        </div>
    );
};

export default FooterContent;