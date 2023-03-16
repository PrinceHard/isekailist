import { lista } from "../../data/generosAnimes"
import { Link } from "react-router-dom"

const AnimesList = () => {
    return (
        <div>
            <h1>Ação</h1>
            <div className="genero">
                {lista.map((anime) => (
                    <Link to={`/anime/${anime.id}`}><img src={anime.img} /></Link>
                ))}
            </div>
        </div>
    )
}
export default AnimesList