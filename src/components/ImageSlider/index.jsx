import { useEffect, useState } from "react";
import './style.css'

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    const imageSlideStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${slides[currentIndex].url})`,
        filter: 'brightness(55%)',
    }

    return (
        <div className="container">
            <div>

            </div>
            <div style={imageSlideStyle}></div>
            <div className="pagination">
                <div>
                    {slides.map((slide, index) => (
                        <div key={index} className='dots' onClick={() => goToSlide(index)} >●</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ImageSlider;