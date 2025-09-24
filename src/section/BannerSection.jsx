import BannerContent from '@/components/Banner/BannerContent';
import BannerImage from '@/components/Banner/BannerImage';
import { BannerData } from '@/content/BannerData';
import React from 'react';

const BannerSection = () => {
    return (
        <section className='flex gap-10 pt-10 md:pt-20 lg:py-0 lg:pt-0 flex-col md:flex-row-reverse justify-between items-center'>
            <BannerImage image={BannerData.image} />
            <BannerContent />
        </section>
    );
};

export default BannerSection;