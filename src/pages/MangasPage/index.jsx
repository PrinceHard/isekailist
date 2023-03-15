import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar";
import "./style.css"

const MangasPage = () => {
    return (
        <div className="background">
            <NavBar/>
            <div className="mangas-container">
                <h1>Mangás</h1>
                <div className="generos-mangas-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MangasPage;