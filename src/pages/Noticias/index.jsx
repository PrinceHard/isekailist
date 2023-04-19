import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer/Footer"
import './style.css'
import { noticias } from "../../data/news"
const Noticias = () => {
    return (
        <div className="background">
            <NavBar />
            <div className="noticiasFundoBranco">
                <div className="bannerNoticias"/>
                    <h1>Notícias</h1>
                        <div className="noticiasBox">
                            {noticias.map((noticia) => (
                                <div key={noticia.id}><a href={noticia.link} target="_blank"><img src={noticia.noticia} alt="" /></a></div>
                            ))}
                        </div>
                
            </div>
            <Footer />
        </div>
    )
}
export default Noticias