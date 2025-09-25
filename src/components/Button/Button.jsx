import Image from 'next/image';

const Button = ({ variant, children, onClick, icon, invert }) => {

    if (variant === 'download') {
        return (
            <button
                onClick={onClick}
                className='flex gap-3 active:translate-y-[2px] transition-all duration-300 
                cursor-pointer rounded-lg px-3 py-2 md:px-4 md:py-3 border-primary border 
                hover:border-primary/70'
            >
                <div>
                    <Image
                        src={icon}
                        width={25}
                        height={25}
                        alt={children}
                    />
                </div>
                <div className={`${invert ? 'text-white' : 'text-gray-800'} `}>
                    <p
                        className='text-left  text-[9px] font-normal leading-[9px]'>
                        Download on the
                    </p>
                    <p className=' font-semibold text-sm md:text-base'>
                        {children}
                    </p>
                </div>
            </button>
        )
    }


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