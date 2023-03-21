
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer/Footer"
import PageDetailHeader from "../../components/PageDetailHeaderManga"
import PageDetailBody from "../../components/PageDetailBodyManga"
const PageDetailManga = () =>{
    return(
        <div className="background">
            <NavBar/>
            <PageDetailHeader/>
            <PageDetailBody/>
            <Footer/>
        </div>
    )
}
export default PageDetailManga