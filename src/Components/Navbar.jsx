import logo from '../images/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt='logo' className='nav--logo' />
        </nav>
    )
}

export default Navbar;