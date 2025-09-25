import SectionHeader from '@/components/Section/SectionHeader';
import TestimonialContainer from '@/components/Testimonial/TestimonialContainer';
import { testimonialData } from '@/content/TestimonialData';
import React from 'react';

const TestimonialSection = () => {
    return (
        <section className='pt-30 md:pt-44'>
            <SectionHeader heading={testimonialData.heading} />
            <TestimonialContainer testimonialData={testimonialData} />
        </section>
    );
};

export default TestimonialSection;