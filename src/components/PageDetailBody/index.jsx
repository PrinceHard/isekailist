import { details } from "../../data/pageDetail"
import { news } from "../../data/news"
import { recomendacao } from "../../data/recomendacao"
const PageDetailBody = () => {
    return (
        <div className="detailInfoContainer">
            <div className="infoAndNewsContainer">
                <div>
                    <h2>Sinopse</h2>
                    <div className="boxComplementar">
                        <div className="containerComplementaMap">
                            <p>{details.sinopse}</p>
                            <div className="boxFichaTecnica">
                                <h2>Informações da produção</h2>
                                <h3>Produtores <h4>{details.produtores}</h4></h3><br />
                                <h3>Studio <h4>{details.studio}</h4></h3><br />
                                <h3>Fonte <h4>{details.fonte}</h4></h3><br />
                                <h3>Demografia <h4>{details.demografia}</h4></h3>
                            </div>
                            <div className="boxSemelhantes">
                                <h1>Mais itens semelhantes</h1>
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