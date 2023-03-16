import "./style.css"
import SearchBar from '../SearchBar'
import { ReactComponent as Profile } from '../../assets/svg/user.svg';
import { useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const listRef = useRef();
    const menuRef = useRef();

    const showMenuList = () => {
        console.log("true")
        listRef.current.classList.toggle("active")
        menuRef.current.classList.toggle("active-menu")

    }

    return (
        <nav className="nav-container">
            <div className='logo'>
                <Link to='/'>
                    <h1 className="logo-title">SL</h1>
                </Link>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className='menu'>
                <ul className="list" ref={listRef}>
                    <li><Link to="/animes">Animes</Link></li>
                    <li><Link to="/mangas">Mangás</Link></li>
                    <li><Link to="/noticias">Notícias</Link></li>
                </ul>
                <div className="profile-icon">
                    <Profile />
                </div>
            </div>
            <div className="mobile-menu" onClick={showMenuList}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
export default NavBar