import React from 'react';
import Benefit from './Benefit';

const BenefitsContainer = ({audience}) => {
    return (
        <ul className='mt-8 space-y-4'>
            {
                audience.benefits.map((benefit, index)=>{
                    return <Benefit benefit={benefit} index={index} key={index}/>
                })
            }
        </ul>
    );
};

export default BenefitsContainer;