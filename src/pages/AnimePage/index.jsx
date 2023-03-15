import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import './style.css'
import { lista } from "../../data/generos"
const AnimePage = () => {
    return (
        <div className="background">
            <NavBar />
            <div className="animes-container">
                <h1>Gêneros</h1>
                <div className="genero-container">
                    {lista.map((genero) => (
                        <Link to="#">
                            <div key={genero.id} style={{backgroundImage: `url(${genero.img})`, filter: 'brightness(75%)'}}>
                                {genero.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AnimePage;