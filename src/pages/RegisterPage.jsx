import GoogleLogIn from '@/components/Authentication/GoogleLogIn';
import NavbarAuth from '@/components/Navbar/NavbarAuth';
import RegisterForm from '@/components/Register/RegisterForm';
import Link from 'next/link';
import React from 'react';

const RegisterPage = () => {
    return (
        <main className='w-screen h-screen'>
            <NavbarAuth />


            <section className='mx-auto max-w-[480px] flex items-center justify-center h-[calc(100vh-63px)] md:h-[calc(100vh-110px)] px-4'>
                <div>
                    {/* heading  */}
                    <div className='space-y-2 text-center mb-10 md:mb-16 px-4'>
                        <h1 className='text-[rgba(33,43,54,1)] font-bold text-2xl' >
                            Create your Account
                        </h1>
                        <p className='text-[rgba(99,115,129,1)] text-base font-normal'>
                            When sports Meets smart Tech.
                        </p>
                    </div>


                    {/* form  */}
                    <RegisterForm />


                    {/* divider  */}
                    <div className="flex items-center mx-auto max-w-[480px] my-3 md:mt-12 md:mb-6 px-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-4 text-[rgba(99,115,129,1)] text-sm font-normal">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>


                    {/* google login  */}
                    <GoogleLogIn />


                    {/* redirect  */}
                    <div className='mx-auto max-w-[480px] mt-4 md:mt-8 px-4 flex items-center justify-center gap-1'>
                        <p className='text-[rgba(33,43,54,1)] text-sm font-medium'>
                            Already have an account?
                        </p>
                        <Link
                            href={'/login'}
                            className='text-primary font-semibold text-sm'
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RegisterPage;