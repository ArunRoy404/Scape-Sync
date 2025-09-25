import BackButton from '@/components/UI/BackButton';
import VerifyOTP from '@/components/Verify/VerifyOTP';
import VerifyPageHeading from '@/components/Verify/VerifyPageHeading';
import { Link } from 'lucide-react';
import React from 'react';

const VerifyPage = () => {
    return (
        <section className='mx-auto max-w-[480px] flex items-center justify-center h-[calc(100vh-63px)] md:h-[calc(100vh-110px)] px-4'>
            <div>
                <BackButton />
                <VerifyPageHeading />
                <VerifyOTP/>


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