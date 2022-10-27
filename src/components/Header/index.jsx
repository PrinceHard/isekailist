import './style.css'
import NavBar from '../NavBar'
import ImageSlider from '../ImageSlider'

const Header = () => {
    const slides = [
        { url: "http://localhost:3000/banner.png", title: "Your Name", imdb: 8.4, rottenTomatoes: "98%", synopsis: "Dois estranhos estão ligados de uma maneira bizarra, mais quando uma conexão é formada, a distância será a única coisa que os manterá separados?", urlTrailer: "https://www.imdb.com/video/vi1705097753/?playlistId=tt5311514&ref_=tt_ov_vi" },
        { url: "http://localhost:3000/banner2.png", title: "Attack on Titan", imdb: "9.0", rottenTomatoes: "95%", synopsis: "Depois que sua cidade é destruída e sua mãe é morta, um jovem promete limpar a terra dos humanóides que levaram a humanidade à beira da extinção.", urlTrailer: "https://www.imdb.com/video/vi1401073433/?playlistId=tt2560140&ref_=tt_ov_vi" },
        { url: "http://localhost:3000/banner3.jpg", title: "Chainsaw Man", imdb: "9.0", rottenTomatoes: "100%", synopsis: "Depois que seu pai morreu, Denji ficou com uma dívida enorme e não havia como pagá-la. Graças a um cão do diabo que ele salvou e nomeou Pochita, ele consegue sobreviver por biscates e matar demônios para a Yakuza.", urlTrailer: "https://www.imdb.com/video/vi3244278297/?ref_=tt_vi_i_1" },
        { url: "http://localhost:3000/banner4.jpg", title: "Blue Lock", imdb: 8.5, rottenTomatoes: "--%", synopsis: "Yoichi Isagi amargurado com sua derrota na partida que o levaria para o mundial de futebol, consegue entrar para um projeto controverso chamado Blue Lock, que competem 300 atacantes sub-18.", urlTrailer: "https://www.imdb.com/video/vi1417200153/?playlistId=tt15222080&ref_=tt_ov_vi" },
        { url: "http://localhost:3000/banner5.jpg", title: "Vanitas no Carte", imdb: 7.6, rottenTomatoes: "--%", synopsis: "Um humano empunha um livro mágico que pode curar vampiros de sua sede de sangue e sai em busca de vampiros para curar com o livro.", urlTrailer: "https://www.imdb.com/video/vi2334835481/?playlistId=tt14641098&ref_=tt_ov_vi" }
    ]

    return (
        <div className='container'>
            <NavBar />
            <div className='container-slide'>
                <ImageSlider slides={slides} />
            </div>
        </div>
    )
}
export default Header
