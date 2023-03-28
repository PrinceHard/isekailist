import { details } from "../../data/pageDetail"
import { news } from "../../data/news"
import { recomendacao } from "../../data/recomendacao"
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
                <div>
                    <h2>Sinopse</h2>
                    <div className="boxComplementar">
                        <div className="containerComplementaMap">
                            <p>{data.data.synopsis}</p>
                            <div className="boxFichaTecnica">
                                <h2>Informações da produção</h2>
                                <h3>Produtores {data.data.producers.map((produtores) => (<h4>{produtores.name}</h4>))}</h3><br />
                                <h3>Studio {data.data.studios.map((estudio) => (<h4>{estudio.name}</h4>))}</h3><br />
                                <h3>Fonte <h4>{details.fonte}</h4></h3><br />
                                <h3>Demografia {data.data.demographics.map((estudio) => (<h4>{estudio.name}</h4>))}</h3>
                            </div>
                            <div className="boxSemelhantes">
                                <h1>Recomendações</h1>
                                <div className="imgSemelhantes">
                                    {recomendacao.map((details) => (
                                        <div>
                                            <div className="caixaSemelhante">
                                                <img src={details.img} alt="" />
                                                <h3>{details.name}</h3>
                                                <h4>⭐{details.score}</h4>
                                            </div>
                                        </div>)
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="noticiasContainer">
                    <h3 className="tituloNoticias">Notícias</h3>
                    {news.map((noticia) => (
                        <div className="boxNoticia">
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