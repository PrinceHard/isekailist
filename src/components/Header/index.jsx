import './style.css'
import NavBar from '../NavBar'
import ImageSlider from '../ImageSlider'
import {slides} from '../../data/banner/slides'

const Header = () => {

    return (
        <div>
            <NavBar />
            <div className='container-slide'>
                <ImageSlider slides={slides} />
            </div>
        </div>
    )
}
export default Header
