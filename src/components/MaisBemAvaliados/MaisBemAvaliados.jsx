
import {useState,useEffect,useRef} from 'react'
import { motion } from 'framer-motion'
import banner1 from '../../assets/MaisBemAvaliados/banner1.jpg'
import banner2 from '../../assets/MaisBemAvaliados/banner2.jpe'
import banner3 from '../../assets/MaisBemAvaliados/banner3.jpe'
import banner4 from '../../assets/MaisBemAvaliados/banner4.jpe'
import banner5 from '../../assets/MaisBemAvaliados/banner5.jpg'
import banner6 from'../../assets/MaisBemAvaliados/banner6.png'
import banner7 from '../../assets/MaisBemAvaliados/banner7.jpe'
import banner8 from '../../assets/MaisBemAvaliados/banner8.jpg'
import banner9 from '../../assets/MaisBemAvaliados/banner9.jpg'
import banner10 from '../../assets/MaisBemAvaliados/banner10.jpg'
const images = [banner1,banner2,banner3,banner4,banner5,banner6,banner7,banner8,banner9,banner10]
function MaisBemAvaliados(){
    const carousel = useRef();
    const [width,setWidth] = useState(0)
    useEffect(() =>{
        console.log(carousel.current?.scrollWidth,carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
    return(
        <div className='App'>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
                <motion.h1 className='titulo'>Mais Bem Avaliados</motion.h1>
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
export default MaisBemAvaliados