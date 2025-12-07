import React, {use, useState} from 'react';
import { ReactComponent as MenuLogo } from '../assets/menu.svg';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    return(
    <nav className="navbar">
        <div className='nav-content'>
        <button className="menuButton" onClick={() => setOpen(!open)}>
            <MenuLogo className='size-6'/>
        </button>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/modules">Modules</Link></li>
        </ul>
        </div>
    </nav>
  );
};

export default NavBar;
