import SocialLink from "@/components/UI/SocialLink";

const FooterSocial = ({socials}) => {
    return (
        <div className="flex items-center gap-8 py-9 max-w-max">
            {
                socials.map(social=>{
                    return <SocialLink key={social.label} social={social}/>
                })
            }
        </div>
    );
};

export default FooterSocial;