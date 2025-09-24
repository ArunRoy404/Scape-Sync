import Image from "next/image";

const Logo = ({variant}) => {
    let logo 
    if(variant === 'primary'){
        logo = "/Logo/Logo.png"
    }

    
    return (
        <Image
            src={logo}
            width={150}
            height={50}
            alt='SpaceSyncLogo'
        />
    );
};

export default Logo;