import { detailsMangas } from "../../data/pageDetail"
const PageDetailHeader = () => {
    return (
        <div className="iconePag">
            <div className="pageDetailHeaderContainer">
                <h1 className="tituloCapa">{detailsMangas.titulo}</h1>
                <h4 className="subTituloCapa">{detailsMangas.Ano + " - " + detailsMangas.volumes + " Volumes"}</h4>

                <div className="boxVideo">
                    <img className="imgCapa" src={detailsMangas.img} />
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/NtzDAmRhD9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ borderRadius: "5px"}}></iframe>
                </div>
                <div className="generoObjeto">
                    <h5>{detailsMangas.genero.acao}</h5>
                    <h5>{detailsMangas.genero.drama}</h5>
                    <h5>{detailsMangas.genero.sobrenatural}</h5>
                </div>
            </div>
        </div>
    )
}
export default PageDetailHeader;