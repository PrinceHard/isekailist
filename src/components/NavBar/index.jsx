import "./style.css"
import SearchBar from '../SearchBar'
import Logo from '../../assets/images/logo.png'
import { ReactComponent as Profile } from '../../assets/svg/user.svg';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className='logo'>
                <img className="logo-img" src={Logo} alt="logo planet blue"></img>
                <a href='/'>
                    <h1 className="logo-title">Sekai List</h1>
                </a>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className='menu'>
                <ul className="list">
                    <li><a href="#">Animes</a></li>
                    <li><a href="#">Mangás</a></li>
                    <li><a href="#">Notícias</a></li>
                    <li><a href="#"><Profile /></a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar