
import { news } from "../../data/news"
import RecomendacaoManga from "../RecomendacaoManga"
import Erro from "../../pages/Erro"
import useFetch from "../../hooks/useFetch"
const PageDetailBody = (props) => {
    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/manga/${props.id}/full`)
    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (error) {
        return <Erro />
    }
    const Manga = {
        sinopse: data.data.synopsis,
    }
    return (
        <div className="detailInfoContainer">
            <div className="infoAndNewsContainer">
                <div>
                    <h2>Sinopse</h2>
                    <div className="boxComplementar">
                        <div className="containerComplementaMap">
                            <p>{Manga.sinopse}</p>
                            <div className="boxFichaTecnica">
                                <h2>Informações da produção</h2>
                                <h3>Autores {data.data.authors.map((autores) => (<h4>{autores.name}</h4>))}</h3><br />
                                <h3>Fonte <h4>Manga</h4></h3><br />
                                <h3>Demografia {data.data.demographics.map((Demografia) => (<h4>{Demografia.name}</h4>))}</h3>
                            </div>
                            <RecomendacaoManga id={props.id}/>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="noticiasContainer">
                    <h3 className="tituloNoticias">Notícias</h3>
                    {news.map((noticia) => (
                        <div className="boxNoticia">
                            <a href={noticia.link} target="_blank"><img src={noticia.noticia} alt="" /></a>
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