import './style.css'
import { ReactComponent as Search } from '../../assets/svg/search.svg'

function SearchBar() {
    return (
        <div className='container'>
            <input placeholder='Pesquise um anime' className='searchBar'></input>
            <Search className='icon-search' />
        </div>
    )
}

export default SearchBar