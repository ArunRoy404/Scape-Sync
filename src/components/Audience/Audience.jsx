import AudienceContent from './AudienceContent';
import AudienceImage from './AudienceImage';


const Audience = ({audience}) => {
    return (
        <div className={`${audience.reverse? 'flex-row-reverse' : ''} flex items-center justify-between`}>
            <AudienceContent audience={audience} />
            <AudienceImage image={audience.image}/>
        </div>
    );
};

export default Audience;  