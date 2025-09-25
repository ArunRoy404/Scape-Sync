import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import AudienceSection from '@/section/AudienceSection';
import BannerSection from '@/section/BannerSection';
import FAQSection from '@/section/FAQSection';
import FeatureSection from '@/section/FeatureSection';
import TestimonialSection from '@/section/TestimonialSection';
import React from 'react';

const HomePage = () => {
    return (
        <main className='pb-40 container mx-auto px-4 sm:px-6 lg:px-8'>
            <Navbar/>
            <BannerSection/>
            <FeatureSection/>
            <AudienceSection/>
            <TestimonialSection/>
            <FAQSection/>
            <Footer/>
        </main>
    );
};

export default HomePage;