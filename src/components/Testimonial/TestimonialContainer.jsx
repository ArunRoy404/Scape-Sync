import TestimonialCard from './TestimonialCard';

const TestimonialContainer = ({ testimonialData }) => {
    return (
        <div className='relative'>
            <div className='grid z-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {
                    testimonialData.testimonials.map(testimonial => {
                        return (
                            <TestimonialCard
                                key={testimonial.name}
                                testimonial={testimonial}
                            />
                        )
                    })
                }
            </div>

            {/* blurry bg  */}
            <div
                className='absolute top-0 -z-10 w-full h-full
                bg-secondary rounded-full blur-[100px]'
            />
        </div>
    );
};

export default TestimonialContainer;