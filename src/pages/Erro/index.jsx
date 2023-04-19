import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer/Footer";
import "./style.css"
const Erro = () => {
    return (
        <div className="background">
            <NavBar />
            <div className="fundoErro">
                <div className="ErroBox">
                    <h1>Oops!</h1>
                    <h2>Algo deu Errado, notifique a staff para que seu problema seja resolvido!</h2>
                    <img src="http://localhost:3000/yuu-erro.gif" alt="" className="erroChar" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Erro;