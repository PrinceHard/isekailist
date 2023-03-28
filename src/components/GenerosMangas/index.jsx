import { lista } from "../../data/generosMangas"
import { Link } from "react-router-dom"

const GenerosMangas = () => {
    return (
        <div>
            <h1 className="title-level1-genre">Gêneros Mangás</h1>
            <div className="genero-container">
                {lista.map((genero) => (
                    <Link to={`/mangas/generos/${genero.genreName}`}>  
                            <div key={genero.id} style={{width:'290px',height: '290px'}}>
                                <h3 className="title-generos">{genero.name}</h3>
                                <div key={genero.id} style={{ backgroundImage: `url(${genero.img})`, filter: 'brightness(55%)' }} className="card-genero"></div>
                            </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default GenerosMangas