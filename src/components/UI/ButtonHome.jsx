import Link from 'next/link';
import { Button } from "@/components/UI/button";

const ButtonHome = () => {
    return (
        <Link href={'/'} >
            <Button className="cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                Go To Home
            </Button>
        </Link>
    );
};

export default ButtonHome;