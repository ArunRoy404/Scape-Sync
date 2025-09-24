import FeatureCard from '@/components/Feature/FeatureCard';
import { featureData } from '@/content/FeatureData';
import React from 'react';

const FeatureSection = () => {
    return (
        <div className='pt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-9'>
            {
                featureData.map((feature, index) => <FeatureCard index={index} key={feature.title} feature={feature} />)
            }
        </div>
    );
};

export default FeatureSection; 