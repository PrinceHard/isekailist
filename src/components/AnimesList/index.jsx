import "./style.css"

import { lista } from "../../data/generos"
import { Link } from "react-router-dom"

const AnimesList = () => {
    return (
        <div>
            <h1>Ação</h1>
            <div className="genero">
                {lista.map((anime) => (<Link to="/animes/acao/anime-main"><img className="acao-teste" src={anime.img} /></Link>))}
                {lista.map((anime) => (<img className="acao-teste" src={anime.img} />))}
            </div>
        </div>
    )
}
export default AnimesList