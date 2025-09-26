import EmailSubmit from '@/components/Form/EmailSubmit';
import PageHeading from '@/components/Heading/PageHeading';
import BackButton from '@/components/UI/BackButton';

const ResetPasswordPage = () => {
    return (
        <section className='mx-auto max-w-[480px] flex items-center justify-center h-[calc(100vh-63px)] md:h-[calc(100vh-110px)] px-4'>
            <div>
                <BackButton />

                <PageHeading
                title={`Forgot your password?`}
                subtitle={`Please enter the email address associated with your account, and we'll email you a link to reset your password.`}
                />

                <EmailSubmit/>
            </div>
        </section>
    );
};

export default ResetPasswordPage;