import { roleData } from '@/content/RoleData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RoleCard = ({ role }) => {

    return (
        <Link href={'/register'}
            className='p-6 cursor-pointer bg-gray-100 rounded-2xl border border-[rgba(223,227,232,1)]
                        group hover:border-primary space-y-5 hover:bg-[rgba(237,247,236,1)] transition-colors duration-300'>

            {/* image */}
            <div className="relative mx-auto w-[100px] h-[100px]">
                <Image
                    src={roleData[role].image}
                    alt='SpaceSyncLogo'
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            {/* description  */}
            <div className='gap-2 text-center max-w-[240px] mx-auto'>
                <h2 className='text-gray-600 transition-colors duration-300
                 group-hover:text-primary text-2xl font-semibold '>
                    {roleData[role].role}
                </h2>
                <p className='text-gray-500 transition-colors duration-300
                 group-hover:text-primary text-sm font-semibold '>
                    {roleData[role].description}
                </p>
            </div>
        </Link>
    );
};

export default RoleCard;