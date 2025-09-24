import Audience from '@/components/Audience/Audience';
import AudienceContainer from '@/components/Audience/AudienceContainer';
import SectionHeader from '@/components/Section/SectionHeader';
import { audienceData } from '@/content/AudienceData';

const AudienceSection = () => {
    return (
        <section className='pt-44'>
            {/* heading  */}
            <SectionHeader heading={audienceData.heading} />

            <AudienceContainer subSection={audienceData.subSection} />
        </section>
    );
};

export default AudienceSection;