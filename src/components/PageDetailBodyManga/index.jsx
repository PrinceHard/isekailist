import { detailsMangas } from "../../data/pageDetail"
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
                            <p>{detailsMangas.sinopse}</p>
                            <div className="boxFichaTecnica">
                                <h2>Informações da produção</h2>
                                <h3>Autores <h4>{detailsMangas.autores}</h4></h3><br />
                                <h3>Studio <h4>{detailsMangas.studio}</h4></h3><br />
                                <h3>Fonte <h4>{detailsMangas.fonte}</h4></h3><br />
                                <h3>Demografia <h4>{detailsMangas.demografia}</h4></h3>
                            </div>
                            <div className="boxSemelhantes">
                                <h1>Mais itens semelhantes</h1>
                                <div className="imgSemelhantes">
                                    {recomendacao.map((detailsMangas) => (
                                        <div>
                                            <div className="caixaSemelhante">
                                                <img src={detailsMangas.img} alt="" />
                                                <h3>{detailsMangas.name}</h3>
                                                <h4>⭐{detailsMangas.score}</h4>
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