import { BannerData } from "@/content/BannerData";
import BannerTitle from "./BannerTitle";
import BannerSubtitle from "./BannerSubtitle";
import BannerButtons from "./BannerButtons";


const BannerContent = () => {
    return (
        <div className='space-y-16 z-10'>
            {/* <div className='absolute border-2 border-black top-5  -z-10 w-[560px] h-[630px] rotate-[33deg] bg-secondary  ' /> */}
            <div className='hidden md:block absolute top-5 -left-100 -z-10 w-[560px] h-[630px] rotate-[33deg] bg-secondary blur-[300px] ' />

            <div className='space-y-4'>
                {/* title  */}
                <BannerTitle>
                    {BannerData.title}
                </BannerTitle>

                {/* subtitle  */}
                <BannerSubtitle>
                    {BannerData.subtitle}
                </BannerSubtitle>
            </div>

            {/* button container  */}
           <BannerButtons/>
        </div>
    );
};

export default BannerContent;