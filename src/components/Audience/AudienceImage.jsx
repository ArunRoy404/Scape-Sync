import Image from 'next/image';
import React from 'react';

const AudienceImage = ({ image }) => {
    return (
        <div
            className="relative w-full h-[300px] md:w-[500px] lg::w-[610px] lg:h-[516px]">
            <Image
                src={image}
                alt='Audience Service'
                fill
                style={{ objectFit: "contain" }}
            />
            <div className='absolute -right-10 -z-10 w-[551px] h-[500px] -rotate-45 bg-secondary blur-[200px]' />
        </div>
    );
};
export default AudienceImage;