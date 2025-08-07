import './Navbar.css';
import { GiRecycle } from "react-icons/gi";
import { Link } from 'react-router-dom'

const Navbar = ({ size }) => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <GiRecycle style={{ fontSize: size }} />
                    <h1>EcoSip</h1>
                </div>
                <ul className='navbar-links'>
                    <Link to="/">Home</Link> 
                    <Link to="/collection">Bottle Collection</Link> 
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
