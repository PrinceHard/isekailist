import SearchBar from '../SearchBar'
import Logo from '../../assets/image/Logo100px.png'
import "./style.css"

function NavBar() {
    return (
        <nav>
            <div className='logo'>
                <img src={Logo}></img>
                <h1>SekaiList</h1>
            </div>
            <div className='container'>
                <SearchBar />
                <div className='menu'>
                    <ul>
                        <li><a href="#">Animes</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Mangás</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar