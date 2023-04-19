import { Link } from "react-router-dom"
import Erro from "../../pages/Erro"
import useFetch from "../../hooks/useFetch"
import { useParams } from 'react-router-dom';
import { lista } from '../../data/generosAnimes'


const AnimesList = () => {

    const { genreName } = useParams();

    const genre = lista.filter(genre => genre.genreName == genreName)

    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/anime?genres=${genre[0].id}&order_by=score&min_score=5.5&sort=desc&limit=24`)
    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (error) {
        return <Erro />
    }
    return (
        <div>
            <h1>{genre[0].name}</h1>
            <div className="genero">
                {data.data.map((anime) => (
                    <div key={anime.mal_id} className="containerCardAnimeList">
                        <Link to={`/anime/${anime.mal_id}`}><img src={anime.images.webp.large_image_url} alt={anime.title} /></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AnimesList