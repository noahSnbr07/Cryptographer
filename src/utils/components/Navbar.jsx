import React from 'react';
import '../../styles/navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link
                className='nav-home-link'
                to={'/'}> CRYPTOGRAPHER </Link>
            <div className='nav-right-group'>
                <Link to={'/new'} className='group-link' > New </Link>
                <a
                    href={'https://www.github.com/noahSnbr07/Cryptographer.git'}
                    className='group-link' > Repo </a>

                <a
                    href={'https://www.instagram.com/noah.snbr/'}
                    className='group-link' > Dev </a>
            </div>
        </nav>
    );
}