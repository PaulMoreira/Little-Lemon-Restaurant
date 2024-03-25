import logo from './Logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/specials">Specials</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
