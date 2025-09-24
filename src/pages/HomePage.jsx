import BannerSection from '@/section/BannerSection';
import FeatureSection from '@/section/FeatureSection';
import React from 'react';

const HomePage = () => {
    return (
        <main className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <BannerSection/>
            <FeatureSection/>
        </main>
    );
};

export default HomePage;