import './style1.css'
import {useState,useEffect,useRef} from 'react'
import { motion } from 'framer-motion'
import banner1 from '../../assets/MaisPopulares/banner1.jpg'
import banner2 from '../../assets/MaisPopulares/banner2.jpg'
import banner3 from '../../assets/MaisPopulares/banner3.jpe'
import banner4 from '../../assets/MaisPopulares/banner4.jpeg'
import banner5 from '../../assets/MaisPopulares/banner5.jpg'
import banner6 from'../../assets/MaisPopulares/banner6.jpeg'
import banner7 from '../../assets/MaisPopulares/banner7.jpg'
import banner8 from '../../assets/MaisPopulares/banner8.jpe'
import banner9 from '../../assets/MaisPopulares/banner9.webp'
import banner10 from '../../assets/MaisPopulares/banner10.jpg'
const images = [banner1,banner2,banner3,banner4,banner5,banner6,banner7,banner8,banner9,banner10]
function MaisPopulares(){
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
export default MaisPopulares