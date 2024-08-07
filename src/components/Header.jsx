import Logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'

import './Header.scss'

function Header() {

    return (
        <header className='header'>
            <img className='header__logo' src={Logo} alt='logo Kasa' height="68px" width="211px"/>
            <nav>
                <NavLink
                    className={({isActive}) => isActive ? 'header__a active' : 'header__a'}
                    to="/">
                    Accueil
                </NavLink>
                <NavLink
                    className={({isActive}) => isActive ? 'header__a active' : 'header__a'}
                    to="/a_propos">
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
