import './style.css'
import { ReactComponent as Search } from '../../assets/svg/search.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {

    const [searchValor, setSearch] = useState('');

    const handleChange = (evento) => {
        setSearch(evento.target.value)
    }

    return (
        <div className='container'>
            <form onSubmit="">
                <input
                    placeholder='Pesquise um anime'
                    className='searchBar'
                    value={searchValor}
                    onChange={handleChange}
                />
                <Link to={"/busca/" + searchValor} >
                    <button type='submit' className='buttonSearch'>
                        <Search className='icon-search' />
                    </button>
                </Link>
            </form>
        </div>
    )
}
export default SearchBar

