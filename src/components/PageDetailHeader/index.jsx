import Erro from "../../pages/Erro"
import useFetch from "../../hooks/useFetch"
const PageDetailHeader = (props) => {
    const { data, error, isLoading } = useFetch(`https://api.jikan.moe/v4/anime/${props.id}/full`)
    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (error) {
        return <Erro />
    }
    const Anime =
    {
        titulo: data.data.title,
        ano: data.data.year,
        img: data.data.images.webp.large_image_url,
        video: data.data.trailer.embed_url,
        tipo: data.data.type
    }

    return (
        <div className="iconePag">
            <div className="pageDetailHeaderContainer">
                <h1 className="tituloCapa">{Anime.titulo}</h1>
                <h4 className="subTituloCapa">{Anime.ano + " - " + Anime.tipo}</h4>

                <div className="boxVideo">
                    <img className="imgCapa" src={Anime.img} />
                    <iframe className="videoTrailer" width="800" height="450" src={Anime.video} title="YouTube video player"   frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ borderRadius: "5px" }}></iframe>
                </div>
                <div className="generoObjeto">
                    {data.data.genres.map((genero) => (
                        <h5>{genero.name}</h5>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}
export default PageDetailHeader;