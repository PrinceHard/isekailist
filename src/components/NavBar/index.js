import SearchBar from '../SearchBar'
import Logo from '../../assets/images/logo.png'
import { ReactComponent as Profile } from '../../assets/svg/user.svg';
import "./style.css"

function NavBar() {
    return (
        <nav>
            <div className='logo'>
                <img src={Logo}></img>
                <a href='#'>
                    <h1>Sekai List</h1>
                </a>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className='menu'>
                <ul>
                    <li><a href="#">Animes</a></li>
                    <li><a href="#">Mangás</a></li>
                    <li><a href="#"><Profile /></a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar