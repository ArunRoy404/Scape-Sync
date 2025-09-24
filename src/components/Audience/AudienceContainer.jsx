import React from 'react';
import Audience from './Audience';

const AudienceContainer = ({ subSection }) => {
    return (
        <div className='space-y-10'>
            {
                subSection.map(audience => {
                    return <Audience audience={audience} key={audience.target} />
                })
            }
        </div>
    );
};

export default AudienceContainer;