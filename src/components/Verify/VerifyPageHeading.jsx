import React from 'react';

const VerifyPageHeading = () => {
    return (
        <div className='space-y-4 mt-6 mb-10'>
            <h1
                className='text-[rgba(33,43,54,1)] text-3xl font-bold'
            >
                Please check your email!
            </h1>
            <p
                className='text-[rgba(99,115,129,1)] text-base font-normal'
            >
                We've emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.
            </p>
        </div>
    );
};

export default VerifyPageHeading;