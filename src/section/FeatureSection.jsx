import FeatureCard from '@/components/Feature/FeatureCard';
import { featureData } from '@/content/FeatureData';
import React from 'react';

const FeatureSection = () => {
    return (
        <section className='pt-30 md:pt-24 grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-9'>
            {
                featureData.map((feature, index) => <FeatureCard index={index} key={feature.title} feature={feature} />)
            }
        </section>
    );
};

export default FeatureSection; 