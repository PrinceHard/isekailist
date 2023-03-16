import { lista } from "../../data/generos"
import { Link } from "react-router-dom"

const GenerosAnime = () => {
    return (
        <div>
            <h1>Gêneros Anime</h1>
            <div className="genero-container">
                {lista.map((genero) => (
                    <Link to={`/animes/generos/${genero.id}`}>
                        <div key={genero.id} style={{ backgroundImage: `url(${genero.img})`, filter: 'brightness(75%)' }}>
                            {genero.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default GenerosAnime