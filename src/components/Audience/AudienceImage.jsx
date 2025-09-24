import Image from 'next/image';
import React from 'react';

const AudienceImage = ({ image }) => {
    return (
        <div
            className="relative w-full h-[200px] md:w-[500px] lg::w-[610px] lg:h-[516px]">
            <Image
                src={image}
                alt='Audience Service'
                fill
                style={{ objectFit: "contain" }}
            />
            <div className='absolute right-[50%] translate-x-[50%] -z-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[551px] lg:h-[500px] -rotate-45 bg-secondary blur-[100px] ' />
        </div>
    );
};
export default AudienceImage;