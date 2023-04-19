import { details } from "../../data/pageDetail"
import { news } from "../../data/news"
import RecomendacaoAnime from "../RecomendacaoAnime"
import Erro from "../../pages/Erro"
import useFetch from "../../hooks/useFetch"
const PageDetailBody = (props) => {
    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/anime/${props.id}/full`)
    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (error) {
        return <Erro />
    }


    return (
        <div className="detailInfoContainer">
            <div className="infoAndNewsContainer">
                <div className="divSinopsePage">
                    <h2>Sinopse</h2>
                    <div className="boxComplementar">
                        <div className="containerComplementaMap">
                            <p className="tamanhoSinopes">{data.data.synopsis}</p>
                            <div className="boxFichaTecnica">
                                <h2>Informações da produção</h2>
                                <h3>Produtores {data.data.producers.map((produtor) => (<span key={produtor.name}>{produtor.name}</span>))}</h3><br />
                                <h3>Studio {data.data.studios.map((estudio) => (<span key={estudio.name}>{estudio.name}</span>))}</h3><br />
                                <h3>Fonte <span>{details.fonte}</span></h3><br />
                                <h3>Demografia {data.data.demographics.map((demographic) => (<span key={demographic.name}>{demographic.name}</span>))}</h3>
                            </div>
                            <RecomendacaoAnime id={props.id}/>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="noticiasContainer">
                    <h3 className="tituloNoticias">Notícias</h3>
                    {news.map((noticia) => (
                        <div key={noticia.noticia} className="boxNoticia">
                            <a href={noticia.link} target="_blank" rel="noreferrer"><img src={noticia.noticia} alt="" /></a>
                        </div>)
                    )}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default PageDetailBody;