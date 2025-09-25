import React from 'react';
import FooterContent from './FooterContent';
import FooterSocial from './FooterSocial';
import FooterCopyRight from './FooterCopyRight';
import { footerData } from '@/content/FooterData';
import FooterDecoration from './FooterDecoration';


const Footer = () => {
    return (
        <footer className='relative  bg-footer overflow-hidden'>
            <div className='relative container z-10  mx-auto px-4 sm:px-6 lg:px-8'>
                <FooterContent footerData={footerData} />
                <FooterSocial socials={footerData.socials} />
            </div>
            <div className=''>
                <FooterCopyRight footerData={footerData} />
            </div>

            <div>
                <FooterDecoration />
            </div>
        </footer>
    );
};

export default Footer;