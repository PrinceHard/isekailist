import "./style.css"
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer/Footer";
import Erro from '../../pages/Erro'
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Search = () => {

    var { titulo } = useParams();

    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/anime?q=${titulo}`);

    

    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (error) {
        return <Erro />
    }
    return (
        <div className="background">
            <NavBar />
            <div className="containerPagSearch">
                <h1 className="h1PagSearch">Resultados para {titulo}</h1>
                <div className="boxPagSearch">
                    {data.data.slice(0,12).map((lista) => (
                        <Link to={`../anime/${lista.mal_id}`} 
                        key={lista.mal_id} > <img src={lista.images.webp.large_image_url} alt={lista.title} /> 
                                <div className="tituloImgPagSearch">
                                    <h3>{lista.title}</h3>
                                </div>
                        </Link>))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Search;