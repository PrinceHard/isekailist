
import {useState,useEffect,useRef} from 'react'
import { motion } from 'framer-motion'
import banner1 from '../../assets/AnimesSubestimados/banner1.jpe'
import banner2 from '../../assets/AnimesSubestimados/banner2.jpe'
import banner3 from '../../assets/AnimesSubestimados/banner3.jpe'
import banner4 from '../../assets/AnimesSubestimados/banner4.webp'
import banner5 from '../../assets/AnimesSubestimados/banner5.webp'
import banner6 from '../../assets/AnimesSubestimados/banner6.jpe'
import banner7 from '../../assets/AnimesSubestimados/banner7.jpg'
import banner8 from '../../assets/AnimesSubestimados/banner8.jpe'
import banner9 from '../../assets/AnimesSubestimados/banner9.jpe'
import banner10 from '../../assets/AnimesSubestimados/banner10.jpe'
const images = [banner1,banner2,banner3,banner4,banner5,banner6,banner7,banner8,banner9,banner10]
function AnimesSubestimados(){
    const carousel = useRef();
    const [width,setWidth] = useState(0)
    useEffect(() =>{
        console.log(carousel.current?.scrollWidth,carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
    return(
        <div className='App'>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
                <motion.h1 className='titulo'>Animes Subestimados</motion.h1>
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
export default AnimesSubestimados