import FAQContainer from '@/components/FAQ/FAQContainer';
import SectionHeader from '@/components/Section/SectionHeader';
import { faqData } from '@/content/faqData';
import React from 'react';

const FAQSection = () => {
    return (
        <div className='pt-30 max-w-[996px] mx-auto md:pt-44'>
             <SectionHeader heading={faqData.heading} />
             <FAQContainer faqData={faqData} />
        </div>
    );
};

export default FAQSection;