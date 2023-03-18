import "./style.css"
import NavBar from "../../components/NavBar"
import PageDetailHeather from "../../components/PageDetailHeather"
import PageDetailBody from "../../components/PageDetailBody"
import Footer from "../../components/Footer/Footer"
const PageDetail = () => {
    return (
        <div className="background">
            <NavBar />
            <PageDetailHeather/>
            <PageDetailBody/>
            <Footer/>
        </div>
    )
}
export default PageDetail