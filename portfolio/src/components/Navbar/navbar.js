import React from 'react';
import "./navbar.css";
import logo from '../../assets/icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo' />
        <div className='desktopMenu'>
            <Link></Link>

        </div>
        <button className='desktopMenuBtn'></button>

    </nav>

  )
}

export default Navbar