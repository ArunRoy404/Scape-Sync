import SectionHeader from '@/components/Section/SectionHeader';
import { faqData } from '@/content/faqData';
import React from 'react';

const FAQSection = () => {
    return (
        <div className='pt-30 md:pt-44'>
             <SectionHeader heading={faqData.heading} />
        </div>
    );
};

export default FAQSection;