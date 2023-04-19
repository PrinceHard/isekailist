import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer/Footer";
import "./style.css"
const ErrorNotFund = () => {
    return(
        <div className="background">
            <NavBar/>
                <div className="fundoBrancoErro">
                    <div className="containerErro">
                        <h1>404</h1>
                        <h2>Desculpe, pagina não encontrada!</h2>
                        <video src="http://localhost:3000/zoro-perdido-video.mp4" className="videoErro" controls poster="http://localhost:3000/zoro-perdido.jpeg"></video>
                    </div>       
                </div>
            <Footer/>
        </div>
    )
}
export default ErrorNotFund;