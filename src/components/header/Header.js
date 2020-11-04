import React from 'react';
import {Link} from 'react-router-dom'
import './Header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='options' to='/shop'>
                    SHOP
                </Link>
                <Link className='options' to='/contact'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;