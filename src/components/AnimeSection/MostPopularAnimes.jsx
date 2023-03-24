import './style.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Erro from '../../pages/Erro'
import useFetch from '../../hooks/useFetch';

const MostPopularAnimes = ({ id, nameSection}) => {

    const { data, error, isLoading } = useFetch("https://api.jikan.moe/v4/top/anime");

    const slideLeft = () => {
        var slider = document.getElementById(id)
        slider.scrollLeft = slider.scrollLeft - 1100
    }

    const slideRight = () => {
        var slider = document.getElementById(id)
        slider.scrollLeft = slider.scrollLeft + 1100
    }

    if (isLoading) {
        return <p>Carregando...</p>
    }

    if(error){
        return <Erro/>
    }

    return (
        <section>
            <h2 className='name-section'>{nameSection}</h2>
            <div className='list-section'>
                <MdChevronLeft size={40} onClick={slideLeft} className='arrow' />
                <div id={id} className='slider-list'>
                    {data.data.map((card) => (
                        <img key={card.mal_id} className='item-section' src={card.images.webp.large_image_url} alt={card.title} />
                    ))}
                </div>
                <MdChevronRight size={40} onClick={slideRight} className='arrow' />
            </div>
        </section>
    )
}
export default MostPopularAnimes

