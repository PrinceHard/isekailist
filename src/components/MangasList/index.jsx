import { lista } from "../../data/generosMangas"
import { Link } from "react-router-dom"

const MangasList = () => {
    return (
        <div>
            <h1>Mangás de Ação</h1>
            <div className="genero">
                {lista.map((manga) => (
                    <Link to={`/manga/${manga.id}`}><img src={manga.img} /></Link>
                ))}
            </div>
        </div>
    )
}
export default MangasList