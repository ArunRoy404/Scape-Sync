import AudienceContent from './AudienceContent';
import AudienceImage from './AudienceImage';


const Audience = ({audience}) => {
    return (
        <div className={`${audience.reverse? '' : 'md:flex-row-reverse'} flex-col gap-10 flex items-center justify-between`}>
            <AudienceImage image={audience.image}/>
            <AudienceContent audience={audience} />
        </div>
    );
};

export default Audience;  