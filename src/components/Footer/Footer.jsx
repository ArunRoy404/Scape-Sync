import React from 'react';
import FooterContent from './FooterContent';
import FooterSocial from './FooterSocial';
import FooterCopyRight from './FooterCopyRight';
import { footerData } from '@/content/FooterData';
import FooterDecoration from './FooterDecoration';


const Footer = () => {
    return (
        <footer className='relative bg-footer overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <FooterContent footerData={footerData} />
                <FooterSocial socials={footerData.socials} />
            </div>
            <FooterCopyRight footerData={footerData} />

            <FooterDecoration/>
        </footer>
    );
};

export default Footer;