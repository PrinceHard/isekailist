import './style.css'
import {useState,useEffect,useRef} from 'react'
import { motion } from 'framer-motion'
import banner1 from '../../assets/Animes da temporada/banner1.jpg'
import banner2 from '../../assets/Animes da temporada/banner2.jpeg'
import banner3 from '../../assets/Animes da temporada/banner3.png'
import banner4 from '../../assets/Animes da temporada/banner4.jpg'
import banner5 from '../../assets/Animes da temporada/banner5.jpg'
import banner6 from'../../assets/Animes da temporada/banner6.jpg'
import banner7 from '../../assets/Animes da temporada/banner7.jpg'
import banner8 from '../../assets/Animes da temporada/banner8.jpg'
import banner9 from '../../assets/Animes da temporada/banner9.jpg'
import banner10 from '../../assets/Animes da temporada/banner10.webp'
const images = [banner1,banner2,banner3,banner4,banner5,banner6,banner7,banner8,banner9,banner10]
function SliderCatalog(){
    const carousel = useRef();
    const [width,setWidth] = useState(0)
    useEffect(() =>{
        console.log(carousel.current?.scrollWidth,carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
    return(
        <div className='App'>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
                <motion.h1 className='titulo'>Animes da temporada</motion.h1>
                <motion.div className='inner' drag='x' dragConstraints={{right: 0,left: -width}}
                initial={{x: 100}}
                animate={{x: 0}}
                transition={{duration:0.8}}
                >

                    {images.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image}/>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}
export default SliderCatalog