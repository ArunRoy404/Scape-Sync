import Button from '../Button/Button';
import Logo from '@/components/UI/Logo';


const Navbar = () => {
    return (
        <nav className='relative z-100 flex justify-between w-screen container mx-auto border-black py-2 md:py-5 px-4 sm:px-6 lg:px-8'>
         <Logo  variant='primary'/>

            {/* button container  */}
            <div>
                <Button variant='primary' url='/register'>
                    Get Started
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;