import SectionHeader from '@/components/Section/SectionHeader';
import { audienceData } from '@/content/AudienceData';

const AudienceSection = () => {
    return (
        <section className='pt-44'>
            {/* heading  */}
            <SectionHeader heading={audienceData.heading} />
        </section>
    );
};

export default AudienceSection;