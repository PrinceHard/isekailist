import SearchBar from '../SearchBar'
import Logo from '../../assets/image/Logo100px.png'
import "./style.css"
function NavBar() {
    return (
        <nav>
            <div className='logo'>
                <img src={Logo} className='img'></img>
                <h1>Sekai List</h1>
            </div>
            <div className='nav-container'>
                <SearchBar />
                <div>
                    <ul className='unorderedList Anime'>
                        <li><a href="#" className='linkUnordered'>Animes</a></li>
                    </ul>
                    <ul className='unorderedList Manga'>
                        <li><a href="#" className='linkUnordered'>Mangás</a></li>
                    </ul>
                </div>
                <div className='DivUser'>
                    <img src={Logo} className='img'></img>
                </div>
            </div>
        </nav>
    )
}
export default NavBar