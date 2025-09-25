import AudienceSection from '@/section/AudienceSection';
import BannerSection from '@/section/BannerSection';
import FeatureSection from '@/section/FeatureSection';
import TestimonialSection from '@/section/TestimonialSection';
import React from 'react';

const HomePage = () => {
    return (
        <main className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <BannerSection/>
            <FeatureSection/>
            <AudienceSection/>
            <TestimonialSection/>
        </main>
    );
};

export default HomePage;