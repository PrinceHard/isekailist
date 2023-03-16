import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer/Footer";
import './style.css'
import { Outlet } from "react-router-dom";

const Animes = () => {
    return (
        <div className="background">
            <NavBar />
            <div className="animes-container">
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
}
export default Animes;