import React from 'react';
import Button from '../Button/Button';
import { footerData } from '@/content/FooterData';

const FooterButtons = () => {
    return (
        <div className="flex gap-5 text-white">
            {
                footerData?.buttons?.map(button => {
                    return (
                        <Button
                            key={button.label}
                            variant={button.type}
                            icon={button.icon}
                            invert={button.invert}
                        >
                            {button.label}
                        </Button>
                    )
                })
            }
        </div>
    );
};

export default FooterButtons;