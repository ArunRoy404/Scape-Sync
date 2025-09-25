import ButtonHome from '@/components/UI/ButtonHome';
import Image from 'next/image';
import React from 'react';

const SuccessfulPage = ({ title, subtitle }) => {
    return (
        <section className='flex items-center justify-center h-[calc(100vh-63px)] md:h-[calc(100vh-110px)] px-4'>
            <div>

                {/* image  */}
                <div className="relative w-[250px] h-[252px] md:w-[332px] md:h-[328px] mx-auto">
                    <Image
                        src='/Vector/VectorSparkle.svg'
                        alt='sparkles'
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>

                {/* message  */}
                <div className='space-y-4 mt-9 mb-10 text-center'>
                    <h1 className='text-[rgba(33,43,54,1)] font-bold text-3xl'>
                        {title}
                    </h1>

                    <p className='text-[rgba(99,115,129,1)] font-normal text-base'>
                        {subtitle}
                    </p>
                </div>

                <ButtonHome />

            </div>
        </section>
    );
};

export default SuccessfulPage;