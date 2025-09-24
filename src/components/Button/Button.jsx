import React from 'react';

const Button = ({ variant, children, onClick }) => {
    if (variant === 'primary') {
        return (
            <button
                onClick={onClick}
                style={{ boxShadow: "0px 8px 16px 0px rgba(57, 164, 50, 0.24)" }}
                className='active:translate-y-[2px] hover:bg-primary/90 transition-transform duration-300 
                cursor-pointer bg-primary font-bold rounded-lg text-white text-xs md:text-base  px-4 py-2 md:px-7 md:py-3'
            >
                {children}
            </button>
        );
    }
};

export default Button;