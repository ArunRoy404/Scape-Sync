import Image from "next/image";
import Link from "next/link";

const Logo = ({ variant }) => {
    let logo
    if (variant === 'primary') {
        logo = "/Logo/Logo.svg"
    }


    return (
        <Link href={'/'}>
            <div className="relative w-24 md:w-36 h-[39px] md:h-[62px]">
                <Image
                    src={logo}
                    alt='SpaceSyncLogo'
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
        </Link>
    );
};

export default Logo;