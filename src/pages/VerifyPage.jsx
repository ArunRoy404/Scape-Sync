import BackButton from '@/components/UI/BackButton';
import VerifyOTP from '@/components/Form/VerifyOTP';
import PageHeading from '@/components/Heading/PageHeading';
import React from 'react';

const VerifyPage = () => {
    return (
        <section className='mx-auto max-w-[480px] flex items-center justify-center h-[calc(100vh-63px)] md:h-[calc(100vh-110px)] px-4'>
            <div>
                <BackButton />

                <PageHeading
                    title={`Please check your email!`}
                    subtitle={`We've emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.`}
                />

                <VerifyOTP />


                {/* resend option  */}
                <div className='mt-4 md:mt-6 flex items-center justify-center gap-1'>
                    <p className='text-[rgba(33,43,54,1)] text-sm font-medium'>
                        Don't have a code?
                    </p>
                    <button
                        className='text-primary font-semibold text-sm'
                    >
                        Resend Code
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VerifyPage;