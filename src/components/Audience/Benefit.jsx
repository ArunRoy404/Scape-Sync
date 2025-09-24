import React from 'react';

const Benefit = ({ benefit, index }) => {
    return (
        <li className={`${index !== 2 ? 'border-primary' : 'border-primary/40'} 
                border-l-2 pl-6
                text-gray-900 text-lg font-medium`}
        >
            {benefit}
        </li>
    );
};

export default Benefit;