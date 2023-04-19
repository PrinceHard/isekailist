import Erro from "../../pages/Erro"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom"
const RecomendacaoAnime = (props) => {
    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/anime/${props.id}/recommendations`)
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
                {data.data.slice(0, 6).map((detail) => (  
                    <Link key={detail.entry.title} to={`../anime/${detail.entry.mal_id}`}>
                        <div className="caixaSemelhante">
                            <img src={detail.entry.images.webp.large_image_url} alt="" />
                            <h3 className="tituloRecomendacao">{detail.entry.title}</h3>
                        </div>
                    </Link>
                ))}
                {data.data.slice(0, 2).map((detail) => (  
                    <Link key={detail.entry.title}  to={`../anime/${detail.entry.mal_id}`}>
                        <div className="caixaSemelhanteEscondida">
                            <img src={detail.entry.images.webp.large_image_url} alt="" />
                            <h3 className="tituloRecomendacao">{detail.entry.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default RecomendacaoAnime;