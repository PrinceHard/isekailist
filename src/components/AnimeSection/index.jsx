import './style.css';
import { motion } from 'framer-motion'

const AnimeSection = (props) => {
    return (
        <section style={{display: 'block'}}>
        <h2 className='name-section'>{props.nameSection}</h2>
            <motion.div className='list-section' drag='x' dragConstraints={{right: 0,left: -100}}
                initial={{x: 100}}
                animate={{x: 0}}
                transition={{duration:0.8}}
                >
                <div className="item-section"></div>
                <div className="item-section"></div>
                <div className="item-section"></div>
                <div className="item-section"></div>
                <div className="item-section"></div>
                <div className="item-section"></div>
                <div className="item-section"></div>
                <div className="item-section"></div>
            </motion.div>
        </section>
    )
}
export default AnimeSection