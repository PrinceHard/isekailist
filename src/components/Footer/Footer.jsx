import './style.css'
import { AiFillGithub, AiFillHeart } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <AiFillGithub size={45} style={{color: 'white'}} />
                <ul className='footer-nav-list'>
                    <li><a href='/'>Animes</a></li>
                    <li>&bull;</li>
                    <li><a href='/'>Mangás</a></li>
                    <li>&bull;</li>
                    <li><a href='/'>News</a></li>
                </ul>
                <p className='footer-message'>Made with <AiFillHeart size={20} /> using React <FaReact size={20} /></p>
                <p className='footer-copy'>&copy; 2023 Sekai List</p>
            </div>
        </footer>
    )
}
export default Footer