import Image from "next/image";

const Logo = ({ variant }) => {
    let logo
    if (variant === 'primary') {
        logo = "/Logo/Logo.svg"
    }


    return (
        <div className="relative w-24 md:w-36 h-[39px] md:h-[62px]">
            <Image
                src={logo}
                alt='SpaceSyncLogo'
                fill
                style={{ objectFit: "contain" }}
            />
        </div>
    );
};

export default Logo;