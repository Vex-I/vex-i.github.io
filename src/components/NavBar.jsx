import React, {use, useState} from 'react';
import { ReactComponent as MenuLogo } from '../assets/menu.svg';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    return(
    <nav className="navbar">
        <div className='nav-content'>
        <h1 className="logo"># Nawwaf Sudi</h1>
        <button className="menuButton" onClick={() => setOpen(!open)}>
            <MenuLogo className='size-6'/>
        </button>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
            <li><Link to="/">/home</Link></li>
            <li><Link to="/blog">/blog</Link></li>
            <li><Link to="/projects">/projects</Link></li>
            <li><Link to="/modules">/modules</Link></li>
        </ul>
        </div>
    </nav>
  );
};

export default NavBar;