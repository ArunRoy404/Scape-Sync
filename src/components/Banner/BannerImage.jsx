import Image from 'next/image';
import React from 'react';

const BannerImage = ({ image }) => {
    return (
        <div
            // style={{ clipPath: 'inset(-1000px -1000px 0px -1000px)' }}
            className="relative w-full h-[300px] md:w-[500px] lg:w-[720px] lg:h-[656px]">
            <Image
                src={image}
                alt='Banner Image'
                fill
                style={{ objectFit: "contain" }}
            />
            {/* <div className='absolute -right-10 -z-10 w-[600px] h-[900px] rotate-[-45deg] bg-secondary border-2' /> */}
            <div className='absolute right-[50%] translate-x-[50%] lg:translate-x-0 lg:-right-10 -z-10 
            w-[200px] h-[300px] md:w-[300px] md:h-[400px] lg:w-[600px] lg:h-[700px] -rotate-45
             bg-secondary rounded-full blur-[100px]' />
        </div>
    );
};

export default BannerImage;