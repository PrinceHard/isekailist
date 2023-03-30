import './style.css'
import { ReactComponent as Search } from '../../assets/svg/search.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Erro from '../../pages/Erro';
const SearchBar = () => {

    const [searchValor, setSearch] = useState('');

    const handleChange = (evento) => {
        setSearch(evento.target.value)
    }

    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/anime`);

    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (error) {
        return <Erro />
    }

    return (
        <div className='container'>
            <form onSubmit="" className='pesquisa'>
                <input
                    placeholder='Pesquise um anime'
                    className='searchBar'
                    value={searchValor}
                    onChange={handleChange}
                    list="sugestao"
                />
                <Link to={"/busca/" + searchValor} >
                    <button type='submit' className='buttonSearch'>
                        <Search className='icon-search' />
                    </button>
                </Link>
            </form>
            <datalist id='sugestao' className='barraDeAutoComplete'>
                {data.data.map((complite) => (<option value={complite.title}></option>))}
            </datalist>
        </div>
    )
}
export default SearchBar

