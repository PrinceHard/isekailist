import { lista } from "../../data/generosMangas"
import { Link } from "react-router-dom"

const MangasList = () => {
    return (
        <div>
            <h1>Mangás de Ação</h1>
            <div className="genero">
                {lista.map((anime) => (
                    <Link to={`/manga/${anime.id}`}><img src={anime.img} /></Link>
                ))}
            </div>
        </div>
    )
}
export default MangasList