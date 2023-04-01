import "./style.css"
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer/Footer";
import SearchAnime from "../../components/SearchAnime";
import SearchManga from "../../components/SearchManga";
import { useParams } from "react-router-dom";
const Search = () => {
    var { titulo } = useParams();
    return (
        <div className="background">
            <NavBar />
            <div className="tituloPagBusca">
                <h1 className="h1PagSearch">Resultados para {titulo}</h1>
            </div>
            <div className="ContainerElementosPagSearch">
                <SearchAnime />
                <SearchManga />
            </div>
            <Footer />
        </div>
    )
}
export default Search;