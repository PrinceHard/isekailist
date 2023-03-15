import './style.css';
import { list } from '../../data/section'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const AnimeSection = (props) => {

    const slideLeft = () =>{
        var slider = document.getElementById(props.id)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () =>{
        var slider = document.getElementById(props.id)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <section>
            <h2 className='name-section'>{props.nameSection}</h2>
            <div className='list-section'>
            <MdChevronLeft size={40} onClick={slideLeft} className='arrow'/>
                <div id={props.id} className='slider-list'>
                    {list.map((card) => (
                        <img className='item-section' src={card.url} alt='/' />
                    ))}
                </div>
            <MdChevronRight size={40} onClick={slideRight} className='arrow'/>
            </div>
        </section>
    )
}
export default AnimeSection

