import './style.css'
import imgFooter from '../../assets/Footer/footer.png'
import imgInstagram from '../../assets/images/icon.webp'
function Footer(){
    return(
        <div className='footer' style={{ backgroundImage:`url(${imgFooter})`}}>
            
            <div className='container_Footer'>
                <h1 className='titulo_footer'>Sekai List</h1>                
            </div>
        </div>
    )
}
export default Footer