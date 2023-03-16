import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar";
import "./style.css"

const Mangas = () => {
    return (
        <div className="background">
            <NavBar />
            <div className="mangas-container">
                <Outlet />
            </div>
            <Footer />
        </div >
    )
}

export default Mangas;