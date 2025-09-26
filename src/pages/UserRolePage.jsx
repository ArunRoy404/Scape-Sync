import RoleCard from "@/components/Role/RoleCard";
import Logo from "@/components/UI/Logo";

const UserRolePage = () => {
    return (
        <main className='w-screen h-screen relative'>
            <section className='mx-auto max-w-max flex items-center justify-center h-[calc(100vh-63px)] md:h-[calc(100vh-110px)] px-4'>
                <div >
                    {/* logo  */}
                    <div className="mx-auto max-w-max">
                        <Logo variant={'primary'} />
                    </div>

                    {/* heading  */}
                    <div className="space-y-2 mt-6 mb-[50px] md:mb-[120px] text-center">
                        <h1 className="text-[rgba(33,43,54,1)] font-bold text-3xl">
                            Who Are You?
                        </h1>

                        <p className="text-gray-600 font-semibold text-base">
                            Choose the option that best describes you so we can tailor your experience.
                        </p>
                    </div>

                    <div className="md:flex space-y-6 md:space-y-0 gap-8 items-center justify-center">
                        <RoleCard role={'User'}/>
                        <RoleCard role={'Owner'}/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default UserRolePage;