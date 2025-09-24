import React from 'react';
import AudienceTag from './AudienceTag';
import AudienceTitle from './AudienceTitle';
import AudienceDescription from './AudienceDescription';
import BenefitsContainer from './BenefitsContainer';

const AudienceContent = ({ audience }) => {
    return (
        <div className='relative overflow-hidden'>
            <div className={`${audience.reverse ? '-right-130' : '-left-130'} absolute  
                    hidden lg:block -top-30 -z-10 w-[400px] h-[400px] -rotate-45 md:blur-[200px] bg-secondary ` }
            />
            <AudienceTag>
                {audience?.target}
            </AudienceTag>

            <AudienceTitle>
                {audience?.title}
            </AudienceTitle>

            <AudienceDescription>
                {audience.description}
            </AudienceDescription>

            <BenefitsContainer audience={audience} />
        </div>
    );
};

export default AudienceContent;