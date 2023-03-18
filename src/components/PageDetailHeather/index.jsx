import { lista } from "../../data/pageDetail"
const PageDetailHeather = () => {
    return(
        <div className="iconePag">
                {lista.map((list) => (
                    <div>
                        <h1 className="tituloCapa">{list.titulo}</h1>
                        <h4 className="subTituloCapa">{list.Ano + " - " + list.duracao}</h4>

                        <div className="boxVideo">
                            <img className="imgCapa" src={list.img} />
                            <iframe className="videoTrailer" width="800" height="450" src="https://www.youtube.com/embed/BArxCLOOVwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ borderRadius: "5px" }}></iframe>
                        </div>
                        <div className="generoObjeto">
                            <h5>{list.genero.acao}</h5>
                            <h5>{list.genero.fantasia}</h5>
                        </div>
                    </div>)
                )}
            </div>
    )
}
export default PageDetailHeather;