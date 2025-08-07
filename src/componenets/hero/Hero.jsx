import Heroimg from '../../images/hero.jpeg'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={Heroimg} alt="" />
            <div className="overlay"></div>
        </div>
    )
}

export default Hero
