import "./style.css"
import NavBar from "../../components/NavBar"
import PageDetailHeader from "../../components/PageDetailHeader"
import PageDetailBody from "../../components/PageDetailBody"
import Footer from "../../components/Footer/Footer"
import { useParams } from "react-router-dom"
const PageDetail = () => {
    const { animeId } = useParams();
    return (
        <div className="background">
            <NavBar />
            <PageDetailHeader id={animeId}/>
            <PageDetailBody id={animeId}/>
            <Footer/>
        </div>
    )
}
export default PageDetail