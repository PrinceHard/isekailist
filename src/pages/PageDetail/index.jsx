import "./style.css"
import NavBar from "../../components/NavBar"
import PageDetailHeader from "../../components/PageDetailHeader"
import PageDetailBody from "../../components/PageDetailBody"
import Footer from "../../components/Footer/Footer"
const PageDetail = () => {
    return (
        <div className="background">
            <NavBar />
            <PageDetailHeader/>
            <PageDetailBody/>
            <Footer/>
        </div>
    )
}
export default PageDetail