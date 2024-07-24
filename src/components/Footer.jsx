import LogoFooter from '../assets/logo_footer.png'
import './Footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={LogoFooter} alt='logo Kasa'/>
            <p className='footer__p'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
