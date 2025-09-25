import React from 'react';
import SectionTitle from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';

const SectionHeader = ({ heading }) => {
    return (
        <div className='flex flex-col items-center text-center gap-3 mb-16'>
            <SectionTitle decoration={heading?.decoration}>
                {heading.title}
            </SectionTitle>
            <SectionSubtitle>
                {heading.subtitle}
            </SectionSubtitle>
        </div>
    );
};

export default SectionHeader;