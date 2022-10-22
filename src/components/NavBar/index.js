import SearchBar from '../SearchBar'
import Logo from '../../assets/image/Logo100px.png'
import "./style.css"

function NavBar() {
    return (
        <div className='Banner'>
            <nav>
                <div className='logo'>
                    <img src={Logo}></img>
                    <h1>SekaiList</h1>
                </div>
                <div>
                    <SearchBar />
                </div>
                <div className='menu'>
                    <ul>
                        <li><a href="#">Animes</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Mangás</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default NavBar