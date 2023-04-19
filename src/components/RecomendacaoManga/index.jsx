import Erro from "../../pages/Erro"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom"
const RecomendacaoManga = (props) => {
    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/manga/${props.id}/recommendations`)
    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (error) {
        return <Erro />
    }
    return (
        <div className="boxSemelhantes">
            <h1>Recomendações</h1>
            <div className="imgSemelhantes">
                {data.data.slice(0, 6).map((details)  => (
                    <Link to={`../manga/${details.entry.mal_id}`}>
                        <div className="caixaSemelhante">
                            <img src={details.entry.images.webp.large_image_url} alt="" />
                            <h3 className="tituloRecomendacao">{details.entry.title}</h3>
                        </div>
                    </Link>
                 ))}
                 {data.data.slice(0, 2).map((details) => (  
                    <Link to={`../anime/${details.entry.mal_id}`}>
                        <div className="caixaSemelhanteEscondida">
                            <img src={details.entry.images.webp.large_image_url} alt="" />
                            <h3 className="tituloRecomendacao">{details.entry.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default RecomendacaoManga;