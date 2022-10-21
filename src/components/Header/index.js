import './style.css'
import backgroundImg from '../../assets/image/612529.jpg' 

function Header() {
    return (
        <div className='container'>
           <img src={backgroundImg} className='imgBanner'></img>
        </div>
    )
}
export default Header
