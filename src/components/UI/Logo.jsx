import Image from "next/image";

const Logo = ({ variant }) => {
    let logo
    if (variant === 'primary') {
        logo = "/Logo/Logo.png"
    }


    return (
        <div className="relative w-24 md:w-36">
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