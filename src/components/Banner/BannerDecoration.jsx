import Image from 'next/image';

const BannerDecoration = ({ className, image }) => {
    return (
        <div className={className}>
            <Image
                src={image}
                alt='Decoration'
                fill
                style={{ objectFit: "contain" }}
            />
        </div>
    );
};

export default BannerDecoration;