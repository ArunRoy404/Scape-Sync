import Button from '../Button/Button';
import Logo from '../UI/Logo';

const Navbar = () => {
    return (
        <nav className='flex justify-between w-screen container mx-auto border-black py-5'>
         <Logo  variant='primary'/>

            {/* button container  */}
            <div>
                <Button variant='primary'>
                    Get Started
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;