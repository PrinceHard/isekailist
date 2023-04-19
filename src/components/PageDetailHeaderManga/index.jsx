import Erro from "../../pages/Erro"
import useFetch from "../../hooks/useFetch"
import Mangas from "../../pages/Mangas"
const PageDetailHeader = (props) => {
    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/manga/${props.id}/full`)
    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (error) {
        return <Erro />
    }
    const Manga = {
        nome: data.data.title,
        ano: data.data.published.prop.from.year,
        volumes: data.data.volumes,
        img: data.data.images.webp.large_image_url
    }
    if(Manga.volumes == null){
        Manga.volumes = "em produção"
    }
    return (
        <div className="iconePag">
            <div className="pageDetailHeaderContainer">
                <h1 className="tituloCapa">{Manga.nome}</h1>
                <h4 className="subTituloCapa">{Manga.ano + " - " + "Volumes: "  + Manga.volumes}</h4>

                <div className="boxVideo">
                    <img className="imgCapa" src={Manga.img} />
                    
                </div>
                <div className="generoObjeto">
                    {data.data.genres.map((generos) => (<h5>{generos.name}</h5>))}
                </div>
            </div>
        </div>
    )
}
export default PageDetailHeader;