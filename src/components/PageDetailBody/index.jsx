import { lista } from "../../data/pageDetail"
import { news } from "../../data/news"
import { recomendacao } from "../../data/recomendacao"
const PageDetailBody = () => {
    return(
        <div className="fundoBranco">
                <h2>Sinopse</h2>
                <div className="boxComplementar">
                    {lista.map((list) => (
                        <div className="containerComplementaMap">
                            <p>{list.sinopse}</p>
                            <div className="boxFichaTecnica">
                                <h2>Informações da produção</h2>
                                <h3>Produtores <h4>{list.produtores}</h4></h3>
                                <h3>Studio <h4>{list.studio}</h4></h3>
                                <h3>Fonte <h4>{list.fonte}</h4></h3>
                                <h3>Demografia <h4>{list.demografia}</h4></h3>
                            </div>
                            <div className="boxSemelhantes">
                                <h1>Mais itens semelhantes</h1>
                                <div className="imgSemelhantes">
                                    {recomendacao.map((list) => (
                                        <div>
                                            <div className="caixaSemelhante">
                                                <img src={list.img} alt="" />
                                                <h3>{list.name}</h3>
                                                <h4>⭐{list.score}</h4>
                                            </div>
                                        </div>)
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div>
                        <h3 className="tituloNoticias">Notícias</h3>
                    </div>
                    {news.map((noticia) => (
                        <div className="boxNoticia">
                            <a href={noticia.link} target= "_blank"><img src={noticia.noticia} alt="" /></a>
                        </div>)
                    )}
                </div>
                <div>

                </div>
            </div>
    )
}
export default PageDetailBody;