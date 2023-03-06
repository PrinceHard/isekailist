import { useEffect, useState } from "react";
import RottenTomatoes from "../../assets/images/rottenTomatoes.png";
import { ReactComponent as Imdb } from "../../assets/svg/imdb.svg";
import './style.css';

const ImageSlider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => 
            setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
        8000)
    }, [currentIndex]);

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
            <div style={imageSlideStyle}></div>
            <div className="anime-info-container">
                <h1 className="title">{slides[currentIndex].title}</h1>
                <div className="critics-container">
                    <Imdb className="imdb" /><span>{slides[currentIndex].imdb}</span>
                    <img className="rotten" src={RottenTomatoes} /><span>{slides[currentIndex].rottenTomatoes}</span>
                </div>
                <div className="synopsis-container">
                    <p>{slides[currentIndex].synopsis}</p>
                </div>
                <div className="btn-container">
                    <button className="btn"><a href={slides[currentIndex].urlTrailer} target="blank">Assistir o Trailer</a></button>
                </div>
            </div>
            <div className="pagination">
                <div>
                    {slides.map((slide, index) => (
                        <div key={index} className='dots' onClick={() => goToSlide(index)}>●</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ImageSlider;