import PasswordSubmit from '@/components/Form/PasswordSubmit';
import PageHeading from '@/components/Heading/PageHeading';
import React from 'react';

const UpdatePasswordPage = () => {
    return (
        <section className='mx-auto max-w-[480px] flex items-center justify-center h-[calc(100vh-63px)] md:h-[calc(100vh-110px)] px-4'>
            <div>
                <PageHeading
                    title={`Enter your new password.`}
                    subtitle={`Please enter the email address associated with your account, and we'll email you a link to reset your password.`}
                />

                <PasswordSubmit />
            </div>
        </section>
    );
};

export default UpdatePasswordPage;