"use client";

import { useEffect, useRef } from 'react';
import { ConfettiButton } from './confetti';

const ConfettiContainer = ({className}) => {
    const btnRef = useRef()

    useEffect(() => {
        if (btnRef.current) {
            btnRef.current.click()
        }
    }, [])


    return (
        <div className={className}>
            <div className='flex justify-center'>
                <div>
                    <ConfettiButton ref={btnRef}>
                        Confetti 🎉
                    </ConfettiButton>
                </div>
            </div>
        </div>
    );
};

export default ConfettiContainer;