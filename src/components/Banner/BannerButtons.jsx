import React from 'react';
import Button from '../Button/Button';
import { BannerData } from "@/content/BannerData";

const BannerButtons = () => {
    return (
        <div className="flex gap-5">
            {
                BannerData?.buttons?.map(button => {
                    return (
                        <Button
                            key={button.label}
                            variant={button.type}
                            icon={button.icon}
                        >
                            {button.label}
                        </Button>
                    )
                })
            }
        </div>
    );
};

export default BannerButtons;