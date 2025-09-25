import Image from 'next/image';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='p-7 rounded-3xl 
            shadow-[0px_16px_32px_-4px_rgba(146,171,145,0.1)]
            flex flex-col gap-7 bg-white z-1'
        >

            {/* reviewer info  */}
            <div className='flex gap-4 items-center'>
                {/* avatar  */}
                <div >
                    <Image
                        src={testimonial.avatar}
                        width={28}
                        height={28}
                        alt={testimonial.name}
                    />
                </div>

                {/* info */}
                <div>
                    <h2 className='text-gray-800 font-bold text-base leading-none'>
                        {testimonial.name}
                    </h2>
                    <h3 className='text-sm text-gray-600 font-normal leading-none'>
                        {testimonial.designation}
                    </h3>
                </div>
            </div>


            <div className='relative'>
                {/* review  */}
                <div className='z-10 text-gray-600 text-base font-normal leading-6'>
                    {testimonial.review}
                </div>

                <div className='absolute -z-10 -top-5 -left-3'>
                    <Image
                        src='/Icon/IconQuote.svg'
                        width={64}
                        height={52}
                        alt='Quote'
                    />
                </div>


            </div>
        </div>
    );
};

export default TestimonialCard;