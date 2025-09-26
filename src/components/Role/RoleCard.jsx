'use client'

import { roleData } from '@/content/RoleData';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const RoleCard = ({ role }) => {
    const { data: session } = useSession() || {};
    return (
        <div
            className={`p-6 cursor-pointer rounded-2xl border
                        ${role === session?.user?.role ? 'border-primary bg-secondary' : ' bg-gray-100 border-[rgba(223,227,232,1)]  '} space-y-5`}>

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
                <h2 className={`
                ${role === session?.user?.role ? 'text-primary ' : 'text-gray-600 '}
                 text-2xl font-semibold `}>
                    {roleData[role].role}
                </h2>
                <p className={`${role === session?.user?.role ? 'text-primary ' : 'text-gray-600 '}
                 text-sm font-semibold `}>
                    {roleData[role].description}
                </p>
            </div>
        </div>
    );
};

export default RoleCard;