'use client'
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
    const router = useRouter()
    return (
        <button 
        onClick={()=>router.back()}
        className='cursor-pointer text-primary text-sm font-bold flex items-center gap-2'>
            <ChevronLeft width={18} height={18} />
            Back
        </button>
    );
};

export default BackButton;