import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialLink = ({ social }) => {
    return (
        <Link href={social?.url} >
            <div className='relative w-[24px] h-[24px]'>
                <Image
                    src={social?.icon}
                    alt={social?.label}
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
        </Link>
    );
};

export default SocialLink;