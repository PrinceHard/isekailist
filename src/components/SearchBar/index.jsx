import './style.css'
import { ReactComponent as Search } from '../../assets/svg/search.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Erro from '../../pages/Erro';
const SearchBar = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (evento) => {
        setInputValue(evento.target.value)
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
            <form  className='pesquisa'>
                <input
                    placeholder='Pesquise um anime'
                    className='searchBar'
                    value={inputValue}
                    onChange={handleChange}
                    list="sugestao"
                />
                <Link to={"/busca/" + inputValue} >
                    <button type='submit' className='buttonSearch'>
                        <Search className='icon-search' />
                    </button>
                </Link>
                <datalist id='sugestao' className='barraDeAutoComplete'>
                    {data.data.map((complite) => (<option key={complite.mal_id} value={complite.title}></option>))}
                </datalist>
            </form>
        </div>
    )
}
export default SearchBar

