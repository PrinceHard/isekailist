import { scans } from "../../data/news"
const Scans = () =>{
    return(
        
            <div className="scans">
                        {scans.map((scan) => (
                            <div className="logoScans"><a href={scan.link} target="_blank"><img src={scan.logo} alt=""/></a></div>
                        ))}
            </div>
        
    )
}
export default Scans