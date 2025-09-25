import NavbarAuth from '@/components/Navbar/NavbarAuth';
import RegisterForm from '@/components/Register/RegisterForm';
import React from 'react';

const RegisterPage = () => {
    return (
        <main className='w-screen h-screen'>
            <NavbarAuth />

            {/* heading  */}
            <section className='space-y-2 text-center'>
                <h1 className='text-[rgba(33,43,54,1)] font-bold text-2xl' >
                    Create your Account
                </h1>
                <p className='text-[rgba(99,115,129,1)] text-base font-normal'>
                    When sports Meets smart Tech.
                </p>
            </section>


            <RegisterForm />
        </main>
    );
};

export default RegisterPage;