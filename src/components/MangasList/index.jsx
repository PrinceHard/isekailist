import { lista } from "../../data/generosMangas"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Erro from "../../pages/Erro"
import useFetch from "../../hooks/useFetch"

const MangasList = () => {

    const { genreName } = useParams();

    const genre = lista.filter(genre => genre.genreName == genreName)

    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/manga?genres=${genre[0].id}&order_by=score&min_score=5.5&sort=desc&limit=24`)

    if(isLoading){
        return <p>Carregando...</p>
    }
    if(error){
        return <Erro/>
    }
    return (
        <div>
            <h1>{genre[0].name}</h1>
            <div className="genero">
                {data.data.map((manga) => (
                    <div key={manga.mal_id}>
                        <Link to={`/manga/${manga.mal_id}`}><img src={manga.images.jpg.large_image_url} /></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MangasList