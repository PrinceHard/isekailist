import Erro from '../../pages/Erro'
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const SearchManga = () => {
    var { titulo } = useParams();

    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/manga?q=${titulo}`);

    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (error) {
        return <Erro />
    }
    return(
        <div className='boxGeralSearch'>   
            <div className='tituloGeneroSearch'>
                <h2 className='tituloLevelDoisSearch'>Manga</h2>
            </div>
                <div className="containerPagSearch">
                    <div className="containerResultadoPagSearch">
                        {data.data.slice(0,24).map((lista) => (
                            <Link key={lista.mal_id} to={`../manga/${lista.mal_id}`}> <img src={lista.images.webp.large_image_url} alt={lista.title}/>
                                    <div className="tituloImgPagSearch">
                                        <h3>{lista.title}</h3>
                                    </div>
                            </Link>))}
                    </div>
                </div>
        </div>
    )
}
export default SearchManga