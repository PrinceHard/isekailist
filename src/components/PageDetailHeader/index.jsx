import { details } from "../../data/pageDetail"
const PageDetailHeader = () => {
    return (
        <div className="iconePag">
            <div className="pageDetailHeaderContainer">
                <h1 className="tituloCapa">{details.titulo}</h1>
                <h4 className="subTituloCapa">{details.Ano + " - " + details.duracao}</h4>

                <div className="boxVideo">
                    <img className="imgCapa" src={details.img} />
                    <iframe className="videoTrailer" width="800" height="450" src="https://www.youtube.com/embed/BArxCLOOVwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ borderRadius: "5px" }}></iframe>
                </div>
                <div className="generoObjeto">
                    <h5>{details.genero.acao}</h5>
                    <h5>{details.genero.fantasia}</h5>
                </div>
            </div>
        </div>
    )
}
export default PageDetailHeader;