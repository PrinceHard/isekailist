
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer/Footer"
import PageDetailHeader from "../../components/PageDetailHeaderManga"
import PageDetailBody from "../../components/PageDetailBodyManga"
import { useParams } from "react-router-dom"
const PageDetailManga = () =>{
    const { mangaId } = useParams();
    return(
        <div className="background">
            <NavBar/>
            <PageDetailHeader id={mangaId}/>
            <PageDetailBody id={mangaId}/>
            <Footer/>
        </div>
    )
}
export default PageDetailManga