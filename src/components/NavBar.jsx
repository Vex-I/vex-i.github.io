import React, {use, useState} from 'react';
import { ReactComponent as MenuLogo } from '../assets/menu.svg';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    return(
    <nav className="navbar">
        <h1 className="logo"># Nawwaf Sudi</h1>
        <button className="menuButton" onClick={() => setOpen(!open)}>
            <MenuLogo className='size-6'/>
        </button>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
            <li><a href="/">/Home</a></li>
            <li><a href="/blog">/Blog</a></li>
            <li><a href="/projects">/Projects</a></li>
            <li><a href="/contact">/Contact</a></li>
        </ul>
    </nav>
  );
};

export default NavBar;